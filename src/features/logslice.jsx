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
            state.getId = action.payload;
            ms = action.payload;
        },
        Accno: (state, action) => {
            state.account_no = action.payload;
            console.log("mlmk")
            console.log(state.account_no)
            act_no=Number(action.payload);
        },

        setlogin: (state, action) => {
            state.auth = action.payload;
            console.log(action.payload);
        },

        logout: (state) => {
            state.auth = null;
        },

        Balance: (state, action) => {
            me = Number(action.payload);
            state.amount = me;
        },

        pricesss: (state, action) => {
            const { credit, phone } = action.payload;
            state.pricess = `${credit || Number(credit).toLocaleString()}  ${phone}`;
        },

        accounts: (state, action) => {
            console.log(action.payload);
            state.account = [...state.account, action.payload];
            console.log(state.account)  
        },

        setide:(state,action)=>{
            console.log(action.payload)
            state.ide=action.payload
        },

        disp: (state, action) => { 
            const { values, num } = action.payload;
            if (values === true) {
                console.log("pops " + ms);
                state.account = [...state.account, Number(-me)]; 
                console.log(Number(me));
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
