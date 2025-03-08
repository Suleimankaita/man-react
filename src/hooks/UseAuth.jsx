import { auths } from '../features/logslice'
import { useSelector } from 'react-redux' 
import {jwtDecode} from 'jwt-decode'
import { getid } from '../features/logslice' 
import { useDispatch } from 'react-redux'
import { io } from 'socket.io-client'

const UseAuth = () => {
  

    const save=(saves)=>{
        localStorage.setItem("roles",JSON.stringify(saves))
    }
    

    const token=useSelector(auths)
    let Isadmin=false;
    let User=false;

    if(token){

        const docode=jwtDecode(token)                
        
        const {username,Roles,id, account,update}=docode.UserInfo;
        
           

        
        Isadmin=Roles.includes("Admin")
        
        User=Roles.includes("User")

        if(Isadmin){
                
            save({Isadmin,Roles})

        }
        
        else if(User){
            save({User,Roles})

        }
       
        return {Isadmin,User,id,username,Roles,account,update}

    }
    return {username:"",Roles:[],status,id:""}

}

export default UseAuth