// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { setlogin } from "../features/logslice";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // import { setdetails } from "../features/setcredentials";
// import { useNavigate as nav } from "react-router-dom";

// const baseQuery = fetchBaseQuery({
//     // baseUrl: "http://localhost:4000",
//     // baseUrl: "https://ict.onrender.com",
//     baseUrl: "https://ict-tr8s.onrender.com",
//     credentials: "include",
//     prepareHeaders: (Headers, { getState }) => {
//         const token = getState()?.auth?.auth;
//         if (token) {
//             Headers.set("authorization", `Bearer ${token}`);
//         }
//         return Headers;
//     }
// });

// const baseQuerywithreauth = async (arg, api, extraopt) => {
//     let result = await baseQuery(arg, api, extraopt);

//     if (result?.error?.originalStatus === 403) {
//         const secoundresult = await baseQuery("/refresh", api, extraopt);

//         if (secoundresult?.data) {
//             await api.dispatch(setlogin(secoundresult?.data));
//             result = await baseQuery(arg, api, extraopt);
//         } else {
//             const navigate = nav(); 
//             await api.dispatch(setlogin(null)); 
//             navigate("/form"); 
//         }
//     }
//     return result;
// };

// const apislices = createApi({
//     reducerPath: "api",
//     baseQuery: baseQuerywithreauth,
//     tagTypes: ["Post", "transaction"],
//     endpoints: (builder) => ({})
// });

// export default apislices;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setlogin } from "../features/logslice";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://ict-tr8s.onrender.com",
    credentials: "include", // ✅ Ensures cookies are sent with every request
    prepareHeaders: (headers, { getState }) => {
        const token = getState()?.auth?.auth;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    }
});

 const baseQuerywithreauth = async (arg, api, extraopt) => {
     let result = await baseQuery(arg, api, extraopt);
     
     
        
        if (result?.error?.status === 401 || result?.error?.status === 403) {
            const secoundresult = await baseQuery(
                { url: "/refresh", method: "GET" }, 
                api, 
                { ...extraopt, credentials: "include" } // ✅ Ensure cookies are sent
            );
            if (secoundresult?.data) {
                await api.dispatch(setlogin(secoundresult?.data));
                result = await baseQuery(arg, api, extraopt);
            } else {
                const navigate = nav(); 
                await api.dispatch(setlogin(null)); 
            if (typeof window !== "undefined") {
                window.location.href = "/form"; // ✅ Redirect after logout
            }
            }
        }
        return result;
    };
    

const apiSlices = createApi({
    reducerPath: "api",
    baseQuery: baseQuerywithreauth,
    tagTypes: ["Post", "transaction"],
    endpoints: (builder) => ({})
});

export default apiSlices;
