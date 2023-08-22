import axiosClient from "../apiClient";

export function getThemes() {
    return axiosClient.get('/theme')
}