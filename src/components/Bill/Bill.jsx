import React from 'react';

const Bill = ({ billName, amount, dueDate, status, onPay ,setopens}) => {
  // Determine the status color based on the bill status
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'green';
      case 'pending':
        return 'orange';
      case 'overdue':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <div className="bill-container" >
      <div className="bill-header">
        <h3 className="bill-name">{billName}</h3>
        <span
          className="bill-status"
          style={{ backgroundColor: getStatusColor(status) }}
        >
          {status}
        </span>
      </div>
      <div className="bill-details">
        <p className="bill-amount">Amount: ₦{amount.toFixed(2)}</p>
        <p className="bill-due-date">Due Date: {dueDate}</p>
      </div>
      {status.toLowerCase() !== 'paid' && (
        <button className="pay-button" onClick={()=> {
          onPay()
          setopens(true)}}>
          Pay Now
        </button>
      )}
      
    </div>
  );
};

export default Bill;