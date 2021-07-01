import axios from "axios";

import { DD_OAUTH_CLIENT_ID, DD_OAUTH_CLIENT_SECRET } from "@env";

export default request = axios.create({
    baseURL: "https://api.deepdialog.se/",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
        "HTTP_AUTHORIZATION": DD_OAUTH_CLIENT_SECRET
    },
});