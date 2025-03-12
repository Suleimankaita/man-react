import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth: null,
    displays: null,
    pricess: null,
    amount: null,
    getId: null,
    account_no:null,
    ide:null,
    account: [0]
};

let me;
let ms;
let act_no;

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {

        getid: (state, action) => {
            console.log("!"+action.payload)
            state.getId = action.payload;
            ms = action.payload;
        },
        Accno: (state, action) => {
            state.account_no = action.payload;
            act_no=Number(action.payload);
            console.log("act"+action.payload)
        },

        setlogin: (state, action) => {
            state.auth = action.payload;
        },

        logout: (state) => {
            state.auth = null;
        },

        Balance: (state, action) => {
            me = Number(action.payload);
            state.amount = me;
            console.log(action.payload)
        },

        pricesss: (state, action) => {
            const { credit, phone } = action.payload;
            state.pricess = `${credit || Number(credit).toLocaleString()}  ${phone}`;
        },

        accounts: (state, action) => {
            state.account = [...state.account, action.payload];
            // localStorage.setItem("amount",JSON.stringify(state.account))
        },

        setide:(state,action)=>{
            state.ide=action.payload
        },

        disp: (state, action) => { 
            const { values, num } = action.payload;
            if (values === true) {
                state.account = [...state.account, Number(-state.amount)]; 
                state.displays = num;
            } else {
                state.displays = null;
            }
        }
    }
});

export const { setlogin, logout, disp, pricesss, Balance,setide, getid, accounts,Accno } = auth.actions;

export const auths = (state) => state.auth.auth;
export const dispricess = (state) => state.auth.pricess;
export const display = (state) => state.auth.displays;
export const account = (state) => state.auth.account;
export const amount = (state) => state.auth.amount;
export const id = (state) => state.auth.getId;
export const ide = (state) => state.auth.ide;
export const act_nos = (state) => state.auth.account_no;

export default auth.reducer;
