import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

class CoreApi {
    private http: AxiosInstance;

    constructor(private _base_path: string | null) {
        this.http = axios.create({
            baseURL: _base_path,
            timeout: 10000, // Example timeout
            headers: {
                'Content-Type': 'application/json',
                // Add any default headers here
            },
        });

        // Add request interceptor to attach bearer token
        this.http.interceptors.request.use(
            (config) => {
                // Retrieve token from storage or wherever you store it
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Add response interceptor for error handling
        this.http.interceptors.response.use(
            (response) => {
                return response;
            },
            (error: AxiosError) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    console.error('Response error:', error.response.data);
                    return Promise.reject(error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error('Request error:', error.request);
                    return Promise.reject(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Request setup error:', error.message);
                    return Promise.reject(error.message);
                }
            }
        );
    }

    private handleRequest<T>(promise: Promise<AxiosResponse<T>>): Promise<T> {
        return promise.then((response) => response.data).catch((error) => {
            throw error;
        });
    }

    public request<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.handleRequest<T>(this.http.request(config));
    }

    public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.handleRequest<T>(this.http.get(url, config));
    }

    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.handleRequest<T>(this.http.post(url, data, config));
    }
}
export default CoreApi;



// Example usage:
// const api = new CoreApi('https://api.example.com');

// Simulate setting the bearer token (in a real scenario, this would come from authentication)
// localStorage.setItem('token', 'your_bearer_token_here');

// api.get('/users')
//     .then((data) => {
//         console.log('GET /users success:', data);
//     })
//     .catch((error) => {
//         console.error('GET /users error:', error);
//     });

// api.post('/users', { name: 'John Doe', email: 'john.doe@example.com' })
//     .then((data) => {
//         console.log('POST /users success:', data);
//     })
//     .catch((error) => {
//         console.error('POST /users error:', error);
//     });
