import { setlogin } from "../features/logslice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useNavigate as nav } from "react-router-dom";

const baseQuery = fetchBaseQuery({
    // baseUrl: "https://ict-tr8s.onrender.com",
    // baseUrl: "https://booking-app-backend-7ih9.onrender.com",
    // baseUrl: "https://ict-vazm.onrender.com",
    baseUrl: "https://ict-1-05bk.onrender.com",
    // baseUrl: "http://localhost:4000",
    credentials: "include",
    prepareHeaders: (Headers, { getState }) => {
        const token = getState()?.auth?.auth;
        if (token) {
            Headers.set("authorization", `Bearer ${token}`);
        }
        
        // 🔹 Add headers to prevent iOS from caching the request
        // Headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
        // Headers.set("Pragma", "no-cache");
        // Headers.set("Expires", "0");

        return Headers;
    }
});

const baseQuerywithreauth = async (arg, api, extraopt) => {
    let result = await baseQuery(arg, api, extraopt);

    if (result?.error?.originalStatus === 403 || result?.error?.originalStatus === 401) {
        
        const secoundresult = await baseQuery(
             "/refresh",
            api,
            extraopt
        );
        // alert("refresh")

        if (secoundresult?.data) {
            await api.dispatch(setlogin(secoundresult?.data));
            
            // 🔹 Invalidate Cache Before Making a New Request
            // api.dispatch(apislices.util.invalidateTags(["Post", "transaction"]));

            // 🔹 Add headers to prevent iOS from caching the request
            // api.extraOptions.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
            // api.extraOptions.headers.set("Pragma", "no-cache");
            // api.extraOptions.headers.set("Expires", "0");

            result = await baseQuery(arg, api, extraopt);
        } 
        // else {
            else if(secoundresult?.error?.originalStatus===401||secoundresult?.error?.originalStatus===403){
                await api.dispatch(setlogin(null));
                window.location.href = "/form";
            }
        // }
    }
    
    // 🔹 Add headers to prevent iOS from caching the request
    // if (result?.error) {
    //     api.extraOptions.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
    //     api.extraOptions.headers.set("Pragma", "no-cache");
    //     api.extraOptions.headers.set("Expires", "0");
    // }

    return result;
};

const apislices = createApi({
    reducerPath: "api",
    baseQuery: baseQuerywithreauth,
    tagTypes: ["Post", "transaction"],
    endpoints: (builder) => ({})
});

export default apislices;
