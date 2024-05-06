"use client"

import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Link from "next/link";
import {Button} from "@/components/ui/button"
import {FormEvent, useState} from "react";
import Error from "@/components/notifications/error";
import {useSession, signIn, signOut} from "next-auth/react"
import Icons from "@/components/icons";
import {useFormState} from "react-dom";
import {useToast} from "@/components/ui/use-toast";
import {redirect} from "next/navigation";
import LoginFormSchema from "@/app/(auth)/auth/login/validation-schema";

export async function login() {

}

interface ErrorSchema {
    email?: string
    password?: string
}


export default function LoginForm() {
    const [errors, setErrors] = useState<ErrorSchema>({});
    const [state, formAction] = useFormState<any, FormData>(login, undefined);
    const {data: session} = useSession()
    const {toast} = useToast()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    if (session?.user) {
        redirect('/dashboard')
    }


    const clearErrors = () => {
        setErrors((errors: any) => {
            // setIsLoading(false)
            Object.assign({email: '', password: ''}, errors);
        })
    }


    const handleLoginAction = async (formData: FormData) => {
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        try {
            const result = LoginFormSchema.safeParse(data);
            if (!result.success) {
                let messages = [];
                toast({
                    title: "Scheduled: Catch up",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                })
                const {issues} = result?.error;
                if (issues.length === 1 && issues[0].path.length < 1)
                    return issues[0].message;

                issues.forEach(({path, message}) => {
                    messages[path.join('-')] = message;
                });
                setErrors(messages);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogleLogin = async () => {

        try {
            await signIn('google');
            const user = session?.data?.user;
            if (user) {
                console.log(user, ' user');
            } else {
                console.log('user not logged in')
            }
        } catch (err) {
            console.log(err, "errrr");

        }

    };

    const handleFacebookLogin = async () => {
        try {
            await signIn('facebook');
            const user = session?.data?.user;
            if (user) {
                console.log(user, ' user');
            } else {
                console.log('user not logged in')
            }
        } catch (err) {
            console.log(err, "errrr");

        }
    }

    const handleFormSubmitss = async () => {
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: "example@gmail.com",
                    password: "abacdfsd"
                }),
            })
            const res = await response.json()
            console.log(res, 'res')
            if (res.status) {
            }
        } catch (e) {
        }
    }
    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true);
        const formData = new FormData(event.currentTarget)
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        try {
            const result = LoginFormSchema.safeParse(data);
            if (!result.success) {
                let messages = [];
                const {issues} = result?.error;
                if (issues.length === 1 && issues[0].path.length < 1)
                    return issues[0].message;

                issues.forEach(({path, message}) => {
                    messages[path.join('-')] = message;
                });
                setErrors(messages);
                setIsLoading(false);
                return
            }
            const response = await signIn('credentials', {
                email: data.email,
                password: data.password,
                type: 'login',
                redirect: false
            })
            if (response?.status == 200) {
                console.log(response, ' responseresponse')
                alert("Logged In")
            }
            toast({
                variant: "destructive",
                title: "Error",
                description: "Can not login, please try again.",
            })
            setIsLoading(false);
            return;
        } catch (e) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Can not login, please try again.",
            })
            setIsLoading(false);
            return;
        }
    }
    return (
        <form
            // action={handleLoginAction}
            onSubmit={handleFormSubmit}
            className={"form group"}>
            <section className="grid gap-4">
                <article className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        className={"peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="emil@example.com"
                        onChange={clearErrors}
                    />
                    <Error error={errors?.email}/>
                </article>
                <article className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link href="/auth/forget-password" className="ml-auto inline-block text-sm underline">
                            Forgot your password?
                        </Link>
                    </div>
                    <Input id="password"
                           name="password"
                           className={"peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"}
                           onChange={clearErrors}
                           placeholder="*****"
                           type="password"/>
                    <Error error={errors?.password}/>

                </article>
                <Button type="submit"
                    // onClick={handleFormSubmit}
                        disabled={isLoading}
                        className={`w-full group-invalid:pointer-events-none group-invalid:opacity-30`}>
                    {isLoading ? 'Loading...' : 'Submit'}
                </Button>
                <article className={"flex justify-between gap-2"}>
                    <Button type={"button"} onClick={() => handleGoogleLogin()} variant="outline" className="w-full">
                        <Icons.google className={"h-3 w-3 mr-2"}/> Login with Google
                    </Button>
                    <Button type={"button"} onClick={() => handleFacebookLogin()} variant="outline" className="w-full">
                        <Icons.facebook className={"h-4 w-4 mr-2"}/> Login with Facebook
                    </Button>

                </article>

            </section>
            <article className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/auth/register" className="underline">
                    Sign up
                </Link>
            </article>
        </form>
    )
}
