import axios from "axios";

import { DD_OAUTH_API_KEY } from "@env";

export const formRequest = axios.create({
    baseURL: "https://api.deepdialog.se/",
    timeout: 3000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${DD_OAUTH_API_KEY}`
    },
});