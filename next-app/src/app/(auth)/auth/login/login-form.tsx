"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import Error from "@/components/notifications/error";
import { useSession, signIn, signOut } from "next-auth/react"
import Icons from "@/components/icons";
import { validateLoginRequest } from "@/lib/auth";
import { toast, useToast } from "@/components/ui/use-toast";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { AuthService } from "@/services/auth/auth.service";


export default function LoginForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState } = useForm({
        mode: "onChange"
    });
    const { errors, isDirty } = formState;


    // handle form submission
    const handleCredentialLogin = async (data) => {
        // setLoading(true)
        try {
            const registerQuery = await AuthService.login(data)

            if (registerQuery?.data?.user) {
                console.log(registerQuery?.data?.user, ' registerQueryregisterQueryregisterQuery');

                setLoading(false)
                router.push('/dashboard');
            }
        } catch (error) {
            setLoading(false)
        }
    }
    // handle google login

    const handleGoogleLogin = async () => { }
    // handle facebook login

    const handleFacebookLogin = async () => {

    }


    return (
        <form onSubmit={handleSubmit(handleCredentialLogin)}
            className={"form group"}>
            <section className="grid gap-4">
                <article className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        className={errors?.email ? "border-red-500" : ""}
                        id="email"
                        type="email"
                        placeholder="emil@example.com"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <Error error={"Email is required"} />}

                </article>
                <article className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link href="/auth/forget-password" className="ml-auto inline-block text-sm underline">
                            Forgot your password?
                        </Link>
                    </div>
                    <Input id="password"
                        className={errors?.password ? "border-red-500" : ""}
                        {...register("password", { required: true })}
                        placeholder="*****"
                        type="password" />
                    {errors.password && <Error error={"Password is required"} />}

                </article>
                <Button type="submit"
                    disabled={loading}
                    className={`w-full group-invalid:pointer-events-none group-invalid:opacity-30`}>
                    {loading ? 'Loading...' : 'Login'}
                </Button>
                <article className={"flex justify-between gap-2"}>
                    <Button type={"button"} onClick={() => handleGoogleLogin()} variant="outline" className="w-full">
                        <Icons.google className={"h-3 w-3 mr-2"} /> Login with Google
                    </Button>
                    <Button type={"button"} onClick={() => handleFacebookLogin()} variant="outline" className="w-full">
                        <Icons.facebook className={"h-4 w-4 mr-2"} /> Login with Facebook
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
