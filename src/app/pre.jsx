import { extendedapi } from "../features/appslice";
import { useEffect } from "react";
import { store } from "./store";
import React from "react";

const Pre = () => {
  useEffect(() => {
    const rms = store.dispatch(extendedapi.endpoints.getpost.initiate());

    return () => {
      rms.unsubscribe(); 
    };
  }, []);

  return <></>
  
};

export default Pre;
