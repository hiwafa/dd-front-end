// const axios = require('axios');
// const qs = require('qs');

import axios from "axios";
import { DD_OAUTH_API_KEY } from "@env";

// let config = {
//     method: 'post',
//     url: 'https://api.deepdialog.se/auth/register/',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': `Basic ${DD_OAUTH_API_KEY}`
//     }
// };

// export const formRequest = async params => {
//     try {

//         console.log("DD_OAUTH_API_KEY: ",DD_OAUTH_API_KEY);

//         config.data = qs.stringify(params);
//         const { data } = await axios(config);
    
//         return data;
//     } catch (err) {
//         return err.message;
//     }
// }

export const formRequest = axios.create({
    baseURL: "https://api.deepdialog.se/",
    timeout: 7000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${DD_OAUTH_API_KEY}`
    },
});