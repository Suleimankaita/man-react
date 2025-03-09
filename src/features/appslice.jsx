import apislices from "../api/apislice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import sign_in from "../components/forms/sign_in";

const postadapter=createEntityAdapter()

const initialState=postadapter.getInitialState()

export const extendedapi=apislices.injectEndpoints({
    endpoints:(builder)=>({
        getbills:builder.query({
            query:()=> '/paybill',

            transformResponse:res=>{

                const man=res.map(user=>{
                    user.id=user._id
                    return user
                });

                return postadapter.setAll(initialState,man)
            },
            providesTags:(result,err,arg)=>{
                if(result?.ids){

                    return[{type:"Post",id:"LIST"},...result.ids.map(id=>({type:"Post",id}))]
                }else{
                    return[{type:"Post",id:"LIST"}]
                }
            }
        }),
        getpost:builder.query({
            query:()=> '/get',

            transformResponse:res=>{

                const man=res.map(user=>{
                    user.id=user._id
                    return user
                });

                return postadapter.setAll(initialState,man)
            },
            providesTags:(result,err,arg)=>{
                if(result?.ids){

                    return[{type:"Post",id:"LIST"},...result.ids.map(id=>({type:"Post",id}))]
                }else{
                    return[{type:"Post",id:"LIST"}]
                }
            }
        }),
        getloan:builder.query({
            query:()=> '/Loan',

            transformResponse:res=>{

                const man=res.map(user=>{
                    user.id=user._id
                    return user
                });

                return postadapter.setAll(initialState,man)
            },
            providesTags:(result,err,arg)=>{
                if(result?.ids){

                    return[{type:"Post",id:"LIST"},...result.ids.map(id=>({type:"Post",id}))]
                }else{
                    return[{type:"Post",id:"LIST"}]
                }
            }
        }),

        sign:builder.mutation({
            query:({values})=>({
                url:"/registration",
                method:"POST",
                body:{...values},
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                }
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:"Lists"}]
            }
        }),
        update:builder.mutation({
            query:({form,id})=>({
                url:`/update/${id}`,
                method:"PATCH",
                body:form,
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                }
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:"Lists"}]
            }
        }),
        reset:builder.mutation({
            query:({password,id})=>({
                url:`/reset/${id}`,
                method:"POST",
                body:{password},
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                }
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:"Lists"}]
            }
        }),
        amount:builder.mutation({
            query:({id,amount,username})=>({
                url:`/Tran/${id}`,
                method:"PUT",
                body:{amount,username},
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                }
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:"Lists"}]
            }
        }),
        forget:builder.mutation({
            query:({email})=>({
                url:`/forget`,
                method:"POST",
                body:{email},
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                }
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:"Lists"}]
            }
        }),
        ref:builder.mutation({
            query:({id})=>({
                url:`/Tran/${id}`,
                method:"PATCH",
                body:{id},
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                }
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:"Lists"}]
            }
        }),
        Paybil:builder.mutation({
            query:({id,account_no, username,amount,billname})=>({
                url:`/paybill`,
                method:"PUT",
                body:{id,account_no, username,amount,billname},
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                }
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:"Lists"}]
            }
        }),
        Request_loan:builder.mutation({
            query:({username,account_no,amount,id})=>({
                url:`/Loan`,
                method:"PUT",
                body:{username,account_no,amount,id},
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                }
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:"Lists"}]
            }
        }),
        add_Trans:builder.mutation({
            query:({id,addamount,username,id1})=>({
                url:`/Tran2/${id}`,
                method:"PUT",
                body:{addamount,username,id1},
                headers: {
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0"
                }
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:"Lists"}]
            }
        })

    })

})
export const {useGetpostQuery,useGetloanQuery,useGetbillsQuery,usePaybilMutation,useRequest_loanMutation,useResetMutation,useRefMutation,useUpdateMutation,useSignMutation,useAmountMutation,useAdd_TransMutation,useForgetMutation}=extendedapi;

const all=extendedapi.endpoints.getpost.select()

const selector=createSelector(
    all,
    res=>res.data
)

export const {
    selectAll,
    selectById,
    selectIds
}=postadapter.getSelectors(state=>selector(state)??initialState)