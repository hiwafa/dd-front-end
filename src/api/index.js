import axios from "axios";

import { DD_OAUTH_API_KEY } from "@env";

export default request = axios.create({
    baseURL: "https://api.deepdialog.se/",
    timeout: 3000,
    headers: {
        // "Content-Type": "application/json",
        "Authorization": `Basic ${DD_OAUTH_API_KEY}`
    },
});