import axios, { AxiosInstance } from 'axios'

const axiosInstance : AxiosInstance = axios.create({
    baseURL: "",
    timeout: 10000,
    headers: {
        "Content-Type": "application.json"
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return error;
    }
)

axiosInstance.interceptors.response.use(
    (Response) => {
        return Response;
    },
    (error) => {
        return error;
    }
)