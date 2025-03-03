import { configureStore } from "@reduxjs/toolkit";
import apislices from "../api/apislice";
// import  credentialsslice from "../features/setcredentials";
import auths from "../features/logslice";
export const store=configureStore({
    reducer:{
        [apislices.reducerPath]:apislices.reducer,
        auth:auths
    },
    middleware:getDefaultmiddleware=>
        getDefaultmiddleware().concat(apislices.middleware),
    devTools:true
    
})