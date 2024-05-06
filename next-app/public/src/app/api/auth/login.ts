import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'true'
    }
})

http.defaults.withCredentials = true


/**
 * Login User
 * @param credentials
 */
export async function loginUser(credentials) {
    const cookies = await http.get("sanctum/csrf-cookie")
    const xsrf = cookies.headers["set-cookie"] as string[]
    const token = decodeURIComponent(
        xsrf[0].split(";")[0].split("=")[1]
    )
    return await axios.post("http://127.0.0.1:8000/api/auth/login", credentials, {
        headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": token,
        },
    }).then((response) => {
        return response.data?.data;
    })
        .catch((error) => {
            return {
                status: false,
                data: null,
                errors: error?.response?.data?.message
            }
        }) || null;
}

/**
 * Login User
 * @param credentials
 */
export async function registerUser(credentials) {
    const cookies = await http.get("sanctum/csrf-cookie")
    const xsrf = cookies.headers["set-cookie"] as string[]
    const token = decodeURIComponent(
        xsrf[0].split(";")[0].split("=")[1]
    )
    const registerURL = process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/auth/register';
    return await axios.post(registerURL, credentials, {
        headers: {
            "Content-Type": "application/json",
            "X-XSRF-TOKEN": token,
        },
    }).then((response) => {

        return response.data?.data;
    })
        .catch((error) => {
            return error?.response?.data?.meta;
            let errors = [];
            if (error.response.data?.data) {
                if (Object.keys(error.response?.data?.meta?.errors)?.length) {
                    Object.entries(error.response?.data?.meta?.errors).forEach((error) => {
                        const [key, value] = error;
                        errors[key] = value;
                    })
                }
            }
            return {
                status: false,
                data: null,
                errors
            }
        }) || null;
}
