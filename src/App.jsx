import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign_in from './components/forms/sign_in'
import Login from './components/forms/login'
 import Layout from './app/layout'
 import Child_layout from './app/child_layout'
 import Card from './components/card/card'
 import History from './components/history/History'
 import Notification from './components/notifications/notification'
 import History_id from './components/history/History_id'
 import User_dashbord from './components/User_dashbord'
 import MarqueeText from './hooks/test'
 import './print.css'
 import T from './t'
 import S from './s'
 import AddAmountToUser from './components/Admin/add_fund'
 import Forget from './forget'
 import Bill from './components/Bill/Bill_com'
 import TV from './components/airtime/TV'
 import Data from './components/airtime/Data'
 import Airtime from './components/airtime/airtime'
 import Widrawel from './components/widthdrawel/widrawel'
 import Transfer from './components/transfer/transfer'
 import More from './app/more'
 import Profile from './app/profile/Profile'
 import Loan from './components/Loan/Loan'
 import Setting from './app/Setting'
 import Overview from './components/Admin/overview'
 import Vedio from '../vedio'
 import GetUser from './hooks/getUser'
 import Userlist from './components/Admin/charts/Userlist'
 import DashBord from './components/Admin/DashBord'
 import Role from './components/role'
 import UseAuth from './hooks/UseAuth'
 import Contact from './components/airtime/contact'
 import FAQ from './app/faq'
 import UserBill from '../UserBill'
 import LoanSection from './components/Loan/Loan'
 import Usersection from './components/Admin/Usersection'
 import { useGetpostQuery } from './features/appslice'
 import Bills from './components/Admin/AllBill'
//  import LoanSection from './components/Loan/Loan'
import Pre from './app/pre'
import Loan_section from './components/Admin/Loan_section'
import ResetPasswordPage from './reset'
import Sx from '../sx'
 const App = () => {

  const {isLoading,isSuccess}=useGetpostQuery('',{
    pollingInterval:1000,
    refetchOnFocus:true
  })



  const {Isadmin,User}=UseAuth()
  return (
  <Routes>
    {/* <Route element={<Pre/>}></Route> */}
    <Route path='/form' element={<Sign_in/>}/>
    {/* <Route path='/login' element={<Login/>}/> */}
    {/* <Route path='/s' element={<S/>}/> */}
    {/* <Route path='/v' element={<Vedio/>}/>
    <Route path='/wv' element={<FAQ/>}/>
    <Route path='/ms' element={<T/>}/> */}
    {/* <Route path='/ms' element={<AddAmountToUser/>}/>  */}
    {/* <Route path='/ms' element={<Sx/>}/>  */}
    <Route path='/forget' element={<Forget/>}/>
    <Route path='/reset/:id' element={<ResetPasswordPage/>}/>
    <Route path='/' element={<Child_layout/>}>
    <Route  element={<Layout allowedroles={["Admin",'User']}/>}>
    {/* <Route path='/m' element={<DashBord/>}/> */}
    <Route index element={<Role/>}/>
    {/* {
      isLoading?<div className="loader_cen"> <div className='loader'></div></div>:
      // isSuccess?
      Isadmin?
    <Route index element={<DashBord/>}/>:User?<Route index element={<User_dashbord/>}/> :null   }  */}

    </Route>
    <Route  element={<Layout allowedroles={['User']}/>}>
    <Route path='/s' element={<UserBill/>}/>
    
    <Route path='/Card' element={<Card/>}/>
    <Route path='/Loan' element={<Loan/>}/>
    <Route path='/History' element={<History/>}/>
    <Route path='/bills' element={<Bill/>}/>
    <Route path='/Data' element={<Data/>}/>
    <Route path='/notification' element={<Notification/>}/>
    <Route path='/Transfer' element={<Transfer/>}/>
    <Route path='/More/Transfer' element={<Transfer/>}/>
    <Route path='/More/History' element={<History/>}/>
    <Route path='/widrawel' element={<Widrawel/>}/>
    <Route path='/TV' element={<TV/>}/>
    <Route path='/Loan' element={<LoanSection/>}/>
    <Route path='/More' element={<More/>}/>
    <Route path='/Setting' element={<Setting/>}/>
    <Route path='/Setting/Profile' element={<Profile/>}/>
    <Route path='/Setting/Card' element={<Card/>}/>
    <Route path='/Setting/History' element={<History/>}/>
    <Route path='/Setting/notifications' element={<Notification/>}/>
    <Route path='/Setting/Contact us' element={<Contact/>}/>
    <Route path='/Setting/FAQ' element={<FAQ/>}/>
    <Route path='/Setting/Transaction History' element={<Notification/>}/>
    <Route path='/Airtime' element={<Airtime/>}/>
    <Route path='/History/:id' element={<History_id/>}/>
    </Route>
    
    <Route  element={<Layout allowedroles={["Admin"]}/>}>
    <Route path='/m' element={<DashBord/>}/>
    <Route path='/Add_fund' element={<AddAmountToUser/>}/> 
    
    <Route path='/Overview' element={<Overview/>}/>
    <Route path='/Userlist' element={<Userlist/>}/>
    <Route path='/paybill' element={<Bills/>}/>
    <Route path='/loan_request' element={<Loan_section/>}/>
    <Route path='/Userlist/Usersection/:id' element={<Usersection/>}/>
    <Route path='/Usersection/:id' element={<Usersection/>}/>
    <Route path='/paybill/Userlist/Usersection/:id' element={<Usersection/>}/>
    <Route path='/Admin_Settings/Userlist' element={<Userlist/>}/>
    <Route path='/Admin_Settings' element={<Setting/>}/>
    <Route path='/Admin_Settings/Profile' element={<Profile/>}/>
    <Route path='/Admin_Settings/History' element={<History/>}/>
    <Route path='/Admin_Settings/Contact us' element={<Contact/>}/>
    <Route path='/Admin_Settings/FAQ' element={<FAQ/>}/>

    <Route path='/Admin_Settings/notifications' element={<Notification/>}/>
    </Route>
    </Route>
  </Routes>
  )
}

export default App