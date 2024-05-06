import {z, ZodError} from 'zod';

const invalid_type_error = "Please enter a valid credentials.";
const required_error = 'This field cannot be blank';

const RegisterFormSchema = z.object({
    email: z
        .string()
        .min(1, {message: "This field has to be filled."})
        .email("This is not a valid email."),
    //        .refine((e) => e === "abcd@fg.com", "This email is not in our database"),
    password: z
        .string({invalid_type_error, required_error})
        .min(4),
})

export default RegisterFormSchema
