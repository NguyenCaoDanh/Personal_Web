import axios from "axios";
import { BASE_API } from "../../setting/constant/app";

const HttpnoToken = axios.create({
    baseURL: BASE_API,
    withCredentials: true,
});

// Interceptor without adding Bearer token
HttpnoToken.interceptors.request.use(
    (config) => {
        
        return config;
    },
    (error) => Promise.reject(error)
);

export default HttpnoToken;
