import UseAuth from "../hooks/UseAuth";
import { useGetpostQuery } from "../features/appslice";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
const KSBankDashboard = () => {

  const {data}=useGetpostQuery('',{
    pollingInterval:1000,
    refetchOnFocus:true
  })
   
  const [find,setfind]=useState([])
  const [users,setusers]=useState([])
  const {account,username,id}=UseAuth()

  let mounted=true;

  const [arr,setarr]=useState([])

  useEffect(()=>{

    if(mounted){

      const man=async()=>{
        
      const {ids,entities}=data;
      const all=entities[id]

      setusers(all.transaction)
      
      
      
    }
    man()
  }

  return()=>{
    mounted=false
  }
  },[data])


  useEffect(()=>{
    if(users){
        
      const mk=users.map(sale=>{
        setarr([...arr,sale.amount])
      })
    }
  },[users])


  const user = {
    name: 'John Doe',
    balance: 5000.0,
    transactions: [
      { date: '2023-10-01', description: 'Salary Deposit', amount: 3000.0 },
      { date: '2023-10-03', description: 'Grocery Store', amount: -150.0 },
      { date: '2023-10-05', description: 'Online Shopping', amount: -200.0 },
    ],
  };
  const { name, balance, transactions } = user;

  return (
    <div className="main">
    {users&&arr&&

    <div className="ks-bank-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Welcome, {username.slice(0,username.indexOf("@"))}!</h1>
        <p>Your financial hub for seamless banking.</p>
      </header>

      {/* Quick Actions */}
      <div className="quick-actions">
        <Link to="/More/Transfer" className="action-button transfer">Transfer Funds</Link>
        <Link className="action-button pay">Pay Bills</Link>
        <Link to="/More/History" className="action-button statement">View Statements</Link>
      </div>

      {/* Account Summary */}
      <div className="account-summary-card">
        <h2>Account Summary</h2>
        <div className="summary-details">
          <p className="balance">Available Balance: <strong>₦{arr.reduce((sum,price)=>sum+price,0)}</strong></p>
          <p className="account-number">Account Number: {account}</p>
          <p className="account-type">Account Type: Savings</p>
        </div>
      </div>

      {/* Transaction History */}
      <div className="transaction-history">
        <h2>Recent Transactions</h2>
        <table className="transaction-table">
          <thead>
            <tr>
              <th style={{textAlign:"center"}}>Date</th>
              <th style={{textAlign:"center"}}>Type</th>
              <th style={{textAlign:"center"}}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {users?users.map((transaction, index) => (
              <tr key={transaction._id} className="transaction-row">
                <td style={{textAlign:"center"}}>{transaction.date}</td>
                <td style={{textAlign:"center"}}>{transaction.amount.toString().startsWith('-')?"Debet":"Credit"}</td>
                 <td style={{textAlign:"center"}} className={`amount ${transaction.amount > 0 ? 'credit' : 'debit'}`}>
                 ₦{transaction.amount.toFixed(2)}
                 </td>
               </tr>
            )):null}
          </tbody>
        </table>
      </div>

    </div>
    }
      <br /><br /><br /><br /><br />
            </div>
  );
};

export default KSBankDashboard