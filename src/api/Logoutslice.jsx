import apislice from "./apislice"
import { logout } from "../features/logslice" 

 const log=apislice.injectEndpoints({
    endpoints:((builder)=>({

        log:builder.mutation({
            query:(body)=>({
                url:"auth",
                method:"POST",
                body:body
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:arg.id}]
            }
        }),
        logout:builder.mutation({
            query:()=>({
                url:"Logout",
                method:"POST",
            }),
            async onQueryStarted(args,{queryFulfilled,dispatch}){
                    
                const {data}=queryFulfilled;
                 console.log(data);
                 dispatch(logout());
                 setTimeout(()=>{
                   dispatch(apislice.util.resetApiState())
                 },1000)
            }
        }),
        Delete:builder.mutation({
            query:({id})=>({
                url:"/delete",
                method:"DELETE",
                body:{id}
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:arg.id}]
            }
        }),
        refresh:builder.mutation({
            query:()=>({
                url:"/refresh",
                method:"GET",
            }),
            invalidatesTags:(result,error,arg)=>{
                return [{type:"Post",id:"LIST"}]
            }
        })


    }))
 })
 export const {useLogMutation,useRefreshMutation,useLogoutMutation,useDeleteMutation}=log

 export default log