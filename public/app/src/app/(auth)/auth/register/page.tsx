"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "@/app/(auth)/auth/register/register-form";
import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react"

const Page = () => {
  // const { data: session } = useSession()
  // console.log(session,' IN REGISTER')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <section className="w-full h-screen relative">
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-200"></div>
        </div>
      </section>
    );
  }
  return (
    <Card className="mx-auto my-auto max-w-lg min-w-96">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Please fill your details to create an account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
    </Card>
  );
};

export default Page;
