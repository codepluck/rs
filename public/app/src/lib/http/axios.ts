import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        if (res.status == 401) {
            // window.location.href =;
        }
        // console.error(“Looks like there was a problem.Status Code: “ + res.status);
        console.error(res.status);
        return Promise.reject(error);
    }
);

export default axiosClient;
