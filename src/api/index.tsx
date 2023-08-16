import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const authToken =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

let headers: any = {
    "Content-Type": "application/json",
};

if (authToken) {
    headers["Authorization"] = `Bearer ${authToken}`;
}

export const apiClient = axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {
        ...headers,
    },
});
