"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import Error from "@/components/notifications/error";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { FeatherIcon, Gamepad, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<[]>([]);

  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const handleLoginForm = async (formData) => {
    console.log("data", formData);
    setLoading(true);
    try {
      const loginQuery = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        remember: formData?.remember,
        redirect: false,
        callbackUrl: "/",
      });
      console.log(loginQuery, "loginQuery");

      if (loginQuery?.error) {
        toast({
          title: "Error",
          description: "Credentials did not match our records.	",
          variant: "destructive",
        });
      }

      if (
        loginQuery?.error == null &&
        (loginQuery?.status == 200 || loginQuery?.ok == true)
      ) {
        toast({
          title: "Success",
          description: "Successfully logged in.",
          variant: "success",
        });
        // window.location.href = "/dashboard/";
        //                router.push('/dashboard/');
        setTimeout(() => {
          setLoading(false);
        }, 15000);
      } else {
        const { error } = loginQuery;
        const { errors } = JSON.parse(error);
        if (errors) {
          Object.entries(errors).forEach((e) => {
            const [key, val] = e;
            toast({
              title: typeof key === "string" ? capitalize(key) : key,
              description: val,
              variant: "destructive",
            });
          });
        }
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLoginForm)} className="group">
      <section className="grid gap-4">
        <article className="grid gap-2 my-2">
          <Label htmlFor="email">Your Email</Label>
          <Input
            id="email"
            type="email"
            className={errors?.email ? "border-red-500" : ""}
            placeholder="mail@example.com"
            {...register("email", { required: true })}
          />
          {errors.email && <Error message={"Email is required"} />}
        </article>
        <article className="grid gap-2 my-2">
          <div className="flex items-center">
            <Label htmlFor="password">Your Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="******"
            className={errors?.password ? "border-red-500" : ""}
            {...register("password", { required: true })}
          />
          {errors.password && <Error message={"Password is required"} />}
        </article>

        <article className="grid gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember_me"
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              {...register("remember")}
            />
            <label
              htmlFor="remember_me"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Me
            </label>
          </div>
        </article>
        <article className={"flex justify-between gap-2"}>
          <Button
            type="submit"
            disabled={loading}
            className={`w-full group-invalid:pointer-events-none group-invalid:opacity-30`}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </article>

        <article className={"flex justify-between gap-2"}>
          <Button
            type={"button"}
            variant="outline"
            className="w-full"
          >
            <Gamepad className={"h-3 w-3 mr-2"} /> Login with Google
          </Button>
          <Button
            type={"button"}
            variant="outline"
            className="w-full"
          >
            <FeatherIcon className={"h-4 w-4 mr-2"} /> Login with Facebook
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
  );
}
