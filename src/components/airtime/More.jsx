const BankDashboard = () => {
  
    const user = {
      name: 'John Doe',
      balance: 5000.0,
      transactions: [
        { date: '2023-10-01', description: 'Salary Deposit', amount: 3000.0 },
        { date: '2023-10-03', description: 'Grocery Store', amount: -150.0 },
        { date: '2023-10-05', description: 'Online Shopping', amount: -200.0 },
      ],
      notifications: [
        { type: 'info', message: 'Your salary has been credited.' },
        { type: 'warning', message: 'Low balance alert!' },
      ],
    };
  
  
    const { name, balance, transactions, notifications } = user;
  
    return (
      <div className="main">
      <div className="bank-dashboard">
        {/* Header */}
        <header className="dashboard-header">
          <h1>Welcome, {name}!</h1>
          <p>Your financial hub for seamless banking.</p>
        </header>
  
        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="action-button transfer">Transfer Funds</button>
          <button className="action-button pay">Pay Bills</button>
          <button className="action-button statement">View Statements</button>
        </div>
  
        {/* Account Summary */}
        <div className="account-summary-card">
          <h2>Account Summary</h2>
          <div className="summary-details">
            <p className="balance">Available Balance: <strong>${balance.toFixed(2)}</strong></p>
            <p className="account-number">Account Number: ********1234</p>
            <p className="account-type">Account Type: Savings</p>
          </div>
        </div>
  
        {/* Transaction History */}
        <div className="transaction-history">
          <h2>Recent Transactions</h2>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="transaction-row">
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td className={`amount ${transaction.amount > 0 ? 'credit' : 'debit'}`}>
                    ${transaction.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Notifications */}
        <div className="notifications-panel">
          <h2>Notifications</h2>
          <ul className="notifications-list">
            {notifications.map((notification, index) => (
              <li key={index} className={`notification-item ${notification.type}`}>
                <span className="notification-icon">
                  {notification.type === 'info' ? 'ℹ️' : '⚠️'}
                </span>
                <span className="notification-message">{notification.message}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    );
  };
  
  export default BankDashboard


  
// const  KSBankDashboard = () => {

//     const user = {
//       name: 'John Doe',
//       balance: 5000.0,
//       transactions: [
//         { date: '2023-10-01', description: 'Salary Deposit', amount: 3000.0 },
//         { date: '2023-10-03', description: 'Grocery Store', amount: -150.0 },
//         { date: '2023-10-05', description: 'Online Shopping', amount: -200.0 },
//       ],
//     };
//     const { name, balance, transactions } = user;
  
//     return (
//       <div className="ks-bank-dashboard">
//         {/* Header */}
//         <header className="dashboard-header">
//           <h1>Welcome, {name}!</h1>
//           <p>Your financial hub for seamless banking.</p>
//         </header>
  
//         {/* Quick Actions */}
//         <div className="quick-actions">
//           <button className="action-button transfer">Transfer Funds</button>
//           <button className="action-button pay">Pay Bills</button>
//           <button className="action-button statement">View Statements</button>
//         </div>
  
//         {/* Account Summary */}
//         <div className="account-summary-card">
//           <h2>Account Summary</h2>
//           <div className="summary-details">
//             <p className="balance">Available Balance: <strong>${balance.toFixed(2)}</strong></p>
//             <p className="account-number">Account Number: ********1234</p>
//             <p className="account-type">Account Type: Savings</p>
//           </div>
//         </div>
  
//         {/* Transaction History */}
//         <div className="transaction-history">
//           <h2>Recent Transactions</h2>
//           <table className="transaction-table">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Description</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((transaction, index) => (
//                 <tr key={index} className="transaction-row">
//                   <td>{transaction.date}</td>
//                   <td>{transaction.description}</td>
//                   <td className={`amount ${transaction.amount > 0 ? 'credit' : 'debit'}`}>
//                     ${transaction.amount.toFixed(2)}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   };
  
//   export default  KSBankDashboard