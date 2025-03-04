// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setlogin } from "../features/logslice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { setdetails } from "../features/setcredentials";
import { useNavigate as nav } from "react-router-dom";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    // baseUrl: "https://ict.onrender.com",
    credentials: "include",
    prepareHeaders: (Headers, { getState }) => {
        const token = getState()?.auth?.auth;
        if (token) {
            Headers.set("authorization", `Bearer ${token}`);
        }
        return Headers;
    }
});

const baseQuerywithreauth = async (arg, api, extraopt) => {
    let result = await baseQuery(arg, api, extraopt);

    if (result?.error?.originalStatus === 403) {
        const secoundresult = await baseQuery("/refresh", api, extraopt);

        if (secoundresult?.data) {
            await api.dispatch(setlogin(secoundresult?.data));
            result = await baseQuery(arg, api, extraopt);
        } else {
            const navigate = nav(); 
            await api.dispatch(setlogin(null)); 
            navigate("/form"); 
        }
    }
    return result;
};

const apislices = createApi({
    reducerPath: "api",
    baseQuery: baseQuerywithreauth,
    tagTypes: ["Post", "transaction"],
    endpoints: (builder) => ({})
});

export default apislices;
