import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import RegisterForm from "@/app/(auth)/auth/register/register-form";

export default function Register() {
    return (
        <Card className="mx-auto my-auto max-w-lg min-w-96">
            <CardHeader>
                <CardTitle className="text-2xl">Register</CardTitle>
                <CardDescription>
                    Please fill your details to create an account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RegisterForm/>
            </CardContent>
        </Card>
    )
}
