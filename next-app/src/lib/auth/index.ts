// login form validation

import { LoginSchema, RegisterSchema } from "./schema";

interface LoginFormSchema {
    email?: string;
    password?: string;
}
interface RegisterFormSchema {
    name?: string;
    email?: string;
    password?: string;
}
/**
 * Validate the login form
 * @param data 
 * @returns 
 */
const validateLoginRequest = (data: LoginFormSchema) => {
    let messages = [];
    console.log(data, ' credentials');
    try {
        const result = LoginSchema.safeParse(data);
        if (!result.success) {
            const { issues } = result?.error;
            if (issues.length === 1 && issues[0].path.length < 1)
                return issues[0].message;

            issues.forEach(({ path, message }) => {
                messages[path.join('-')] = message;
            });
            return {
                status: false,
                data: null,
                errors: messages
            }
        }
        return {
            status: true,
            data: data,
            errors: null
        }
    } catch (error) {
        return {
            status: false,
            data: null,
            errors: ['Something went wrong']
        }
    }

}


const useCsrf = () => {

}

const validateRegisterRequest = (data: RegisterFormSchema) => {
    let messages = [];
    console.log(data, ' credentials');
    try {
        const result = RegisterSchema.safeParse(data);
        if (!result.success) {
            const { issues } = result?.error;
            if (issues.length === 1 && issues[0].path.length < 1)
                return issues[0].message;

            issues.forEach(({ path, message }) => {
                messages[path.join('-')] = message;
            });
            return {
                status: false,
                data: null,
                errors: messages
            }
        }
        return {
            status: true,
            data: data,
            errors: null
        }
    } catch (error) {
        return {
            status: false,
            data: null,
            errors: ['Something went wrong']
        }
    }

}

export {
    validateLoginRequest,
    validateRegisterRequest
}