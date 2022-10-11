import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "/",
});

instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;

            try {
                const rs = await instance.get("/api/refresh");

                const { accessToken } = rs.data;
                localStorage.setItem("token", accessToken);

                return instance(originalConfig);
            } catch (_error) {
                return Promise.reject(_error);
            }
        }

        return Promise.reject(err);
    }
);

export default instance;
    