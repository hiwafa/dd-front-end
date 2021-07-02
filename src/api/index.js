import axios from "axios";

import { DD_OAUTH_API_KEY } from "@env";

export default request = axios.create({
    baseURL: "https://api.deepdialog.se/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "HTTP_AUTHORIZATION": "QXlQVlVpZ3plNGNBb0pCZTJIU04zeG4wYko3blI5RGtIWlJaMUh2TTpmWU44MG1hNUhhMzc5MXhVOUIwbnVIWnF4b3JLU0Q1dnVPbmVxWHRiV0ZyMVNvV0xqelVnTDI1aUhoNVc1enNvT3dtaXFlbFBydm1ZaGlNdExQZ2ZVUHFObUZtbVF6aFZwenQ5QjVJOXBEVWZYNUxzcjMyUjdpVHd5ckp6NFJTdQ=="
    },
});