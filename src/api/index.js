import axios from "axios";


export const request = axios.create({
    baseURL: "https://api.deepdialog.se",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});