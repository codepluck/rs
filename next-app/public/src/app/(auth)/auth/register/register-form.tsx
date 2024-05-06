"use client"

import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import Link from "next/link";
import {Button} from "@/components/ui/button"
import {FormEvent, useState} from "react";
import Error from "@/components/notifications/error"
import {useToast} from "@/components/ui/use-toast";
import {signIn, useSession} from "next-auth/react";
import RegisterFormSchema from "@/app/(auth)/auth/register/validation-schema";


interface ErrorSchema {
    email?: string
    password?: string
}

export default function RegisterForm() {
    const {toast} = useToast()
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<ErrorSchema>({});

    const {data: session} = useSession()
    console.log(session, ' session')
    // handle the form submission


    const clearErrors = () => {
        setIsLoading(false)
        setErrors((errors: any) => {
            Object.assign({name: '', email: '', password: ''}, errors);
        })
    }

    const handleFormRegistration = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true);
        const formData = new FormData(event.currentTarget)
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        try {
            const result = RegisterFormSchema.safeParse(data);
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
                type: 'register',
                redirect: false
            })
            console.log(response, ' responseresponse')
            if (response?.error) {
                toast({
                    variant: "destructive",
                    title: `Error `,
                    description: response?.error,
                })
            }
            setIsLoading(false);

        } catch (error) {

        }
    }


    return (
        <>
            <form
                onSubmit={handleFormRegistration}
                className="group">
                <section className="grid gap-4">
                    {/*<article className="grid gap-2 my-2">*/}
                    {/*    <Label htmlFor="name">Your Name</Label>*/}
                    {/*    <Input*/}
                    {/*        id="name"*/}
                    {/*        type="text"*/}
                    {/*        name="name"*/}
                    {/*        placeholder="Enter your name"*/}
                    {/*        onChange={clearErrors}*/}
                    {/*    />*/}
                    {/*    <Error error={errors?.name}/>*/}
                    {/*</article>*/}
                    <article className="grid gap-2 my-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="mail@example.com"
                            onChange={clearErrors}
                        />
                        <Error error={errors?.email}/>

                    </article>
                    <article className="grid gap-2 my-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Your Password</Label>
                        </div>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="******"
                            onChange={clearErrors}
                        />
                        <Error error={errors?.password}/>
                    </article>
                    <Button
                        disabled={isLoading}
                        className="w-full">
                        Register
                    </Button>
                </section>
                <article className={"flex justify-between gap-2 my-6"}>
                    <Button type={"button"} onClick={() => signIn('google')} variant="outline" className="w-full">
                        Login with Google
                    </Button>
                    <Button onClick={() => signIn('facebook')} type={"button"} variant="outline" className="w-full">
                        Login with Facebook
                    </Button>
                </article>

                <article className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="underline">
                        Login
                    </Link>
                </article>
            </form>
        </>
    )
}
