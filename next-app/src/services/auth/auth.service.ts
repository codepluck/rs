import { CoreApi } from "@/lib/api/core.api";
import { API_ENDPOINTS } from "@/lib/api/endpoints";
import { showErrors } from "@/lib/utils";

export type LoginInputType = {
    email: string;
    password: string;
};
export type RegisterUserInputType = {
    name?: string;
    email: string;
    password: string;
};

export type ChangePasswordInputType = {
    oldPassword: string;
    newPassword: string;
};
export type ForgetPasswordInputType = {
    email: string;
};
export type ResetPasswordInputType = {
    email: string;
    token: string;
    password: string;
};
export type VerifyPasswordInputType = {
    email: string;
    token: string;
};
export type SocialLoginInputType = {
    provider: string;
    access_token: string;
};

class Auth extends CoreApi {
    async login(input: LoginInputType) {

        return this.http.post(API_ENDPOINTS.LOGIN, input)
            .then((res) => {
                if (res.data?.errors) {
                    showErrors(res.data.errors);
                    return false
                } else {
                    return res
                }
            })
            .catch((error) => {
                console.log(error, '[[[[[[[[[[[');
            })
    }
    socialLogin(input: SocialLoginInputType) {
        return this.http
            .post(API_ENDPOINTS.SOCIAL_LOGIN, input)
            .then((res) => res.data);
    }
    register(input: RegisterUserInputType) {
        this.http.get(API_ENDPOINTS.TOKEN)
        try {
            return this.http
                .post(API_ENDPOINTS.REGISTER, input)
                .then((res) => {
                    if (res.data?.errors) {
                        showErrors(res.data.errors);
                        return false
                    } else {
                        return res
                    }
                })
                .catch((error) => {
                    return error
                })
        } catch (error) {
            return error
        }

    }
    logout() {
        return this.http.post(API_ENDPOINTS.LOGOUT);
    }
    changePassword(input: ChangePasswordInputType) {
        return this.http
            .post(API_ENDPOINTS.CHANGE_PASSWORD, input)
            .then((res) => res.data);
    }
    forgetPassword(input: ForgetPasswordInputType) {
        return this.http
            .post(API_ENDPOINTS.FORGET_PASSWORD, input)
            .then((res) => res.data);
    }
    resetPassword(input: ResetPasswordInputType) {
        return this.http
            .post(API_ENDPOINTS.RESET_PASSWORD, input)
            .then((res) => res.data);
    }
    verifyForgetPassword(input: VerifyPasswordInputType) {
        return this.http
            .post(API_ENDPOINTS.VERIFY_FORGET_PASSWORD, input)
            .then((res) => res.data);
    }
    async token() {
        await this.http.get(API_ENDPOINTS.TOKEN)
    }
}

export const AuthService = new Auth("auth");
