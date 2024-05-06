import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import LoginForm from "@/app/(auth)/auth/login/login-form";
import LoadingSpinner from "@/components/ui/loader";

export default async function Login() {
    const loading = false;
    if (loading) {
        return (
            <LoadingSpinner />
        )
    }
    return (
        <Card className="mx-auto my-auto max-w-lg min-w-96">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>
    )
}
