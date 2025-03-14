import React from 'react';
import Bill from './Bill';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { usePaybilMutation, useGetpostQuery, useAdd_TransMutation } from '../../features/appslice';
import UseAuth from '../../hooks/UseAuth';
import S from '../../s';
import { useEffect, useState, useRef } from 'react';
import { FaTimes, FaWallet, FaUnlockAlt } from 'react-icons/fa';
import { account as acc, Balance, pricesss, accounts as acct, Accno, display } from '../../features/logslice';
import { io } from 'socket.io-client';
import a from '../transfer/note.mp3';

const BillComponent = () => {
  const noti = new Audio(a);
  const { data, isLoading, isSuccess } = useGetpostQuery("", {
    pollingInterval: 1000,
    refetchOnFocus: true
  });

  const { id, account, username } = UseAuth();
  const dispatch = useDispatch();
  const accounts = useSelector(acc);
  const [paybill] = usePaybilMutation();
  // const [transaction] = useAdd_TransMutation();
  const [contents, setContents] = useState([]);
  const [opens, setOpens] = useState(false);
  const selects = useSelector(display);
  const [amounts, setAmounts] = useState({});
  const mans = accounts.reduce((sum, prices) => sum + prices, 0);
  const bills = [
    {
      billName: 'Electricity Bill',
      amount: 120.5,
      dueDate: '2023-10-25',
      status: 'Pending',
    },
    {
      billName: 'Internet Bill',
      amount: 60.0,
      dueDate: '2023-10-20',
      status: 'Paid',
    },
    {
      billName: 'Water Bill',
      amount: 45.75,
      dueDate: '2023-10-15',
      status: 'Overdue',
    },
  ];

  let content;

  const handlePay = async (billName, amount) => {
    setOpens(pr => !pr);
    setAmounts({ billName, amount });
  };

  const success = async () => {
    toast(`Paying ${amounts.billName} ₦${amounts.amount}`);
    dispatch(paybill({ id, account_no: account, username, amount: amounts.amount, billname: amounts.billName }));
  };

  const close = () => {
    setOpens(pr => !pr);
    setContents("");
  };

  const pay = () => {
    if (mans < amounts.amount) {
      return swal({
        text: `Insufficient balance. You need NGN ${amounts.amount}.`,
        title: "No enough balance",
        icon: "error"
      });
    }

    setContents(
      <main className='credit_alert2'>
        <div className="close">
          <FaTimes className='fatimes' onClick={close} />
        </div>
        <div className="locks">
          <div className="do"><FaUnlockAlt /></div>
          <h5>Authentication</h5>
        </div>
        <div className="simm sl2"><S /></div>
      </main>
    );
  };

  let isMounted = true;
  useEffect(() => {
    if (amounts.amount) {
      success();
    }
    if (isMounted) {
      if (selects) {
        setContents(selects);
      }
    }
    return () => {
      isMounted = false;
      setTimeout(() => {
        setContents(null);
      }, 10);
    };
  }, [selects]);

  useEffect(() => {
    if (amounts.amount) {
      dispatch(Accno(account));
      dispatch(Balance(amounts.amount));
      dispatch(pricesss({ credit: amounts.amount, phone: `payment of ${amounts.amount} to ${amounts.billName}` }));

      setContents(opens ? (
        <main className='credit_alert'>
          <div className="close"><FaTimes className='fatimes' onClick={close} /></div>
          <h1>NGN{amounts.amount}</h1>
          <div className="simm sl"><p>Product Name</p><p>Paybill</p></div>
          <div className="simm sl"><p>Amount</p><p>{amounts.amount}</p></div>
          <hr />
          <div className="payment_met">
            <h3>Payment Method</h3>
            <div className="box_pay"><FaWallet className='fa_wa' />
              <p> Wallet (&#8358;{mans.toLocaleString()})</p>
            </div>
          </div>
          <button className='btns_pay' onClick={pay}>Pay</button>
        </main>
      ) : <></>);
    }
  }, [amounts, opens]);

  const socket = useRef(null);
  const [transactions, setTransactions] = useState([]);
  const [idee, setIdee] = useState('');

  useEffect(() => {
    if (isMounted) {
      const man = async () => {
        if (!socket.current) {
          socket.current = io('https://ict-vazm.onrender.com');
        }

        const sock = socket.current;

        socket.current.off('message').on('message', (data) => {
          setTransactions(data);
          setIdee(data);
        });
        socket.current.off('transactionUpdates').on('transactionUpdates', (datas) => {
          // toast(datas)
        });

        socket.current.off('notify').on('notify', (datas) => {
          if (datas.id1 === id) {
            noti.play().catch((err) => console.log('Sound error:', err));
            let man = `${datas.name} \n\r NGN${datas.amount} ${datas.time}`;
            toast(man);
            if ("Notification" in window) {
              if (Notification.permission === "granted") {
                new Notification("New Notification", { body: datas.amount });
              } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((permission) => {
                  if (permission === "granted") {
                    new Notification("New Notification", { body: datas.amount });
                  }
                });
              }
            }
          }
          toast(null);
        });

        socket.current.off('transactionUpdate').on('transactionUpdate', (newTransaction) => {
          setTransactions(prev => {
            const exists = prev.some(tx => tx._id === newTransaction._id);
            return exists ? prev : [newTransaction, ...prev];
          });
        });
      };
      man();
    }

    return () => {
      isMounted = false;
      socket.current.off('message');
      socket.current.off('transactionUpdate');
      socket.current.off('transactionUpdates');
      socket.current.off('notify');
    };
  }, [id, data]);

  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }

  useEffect(() => {
    if (isMounted) {
      if (!transactions.length) return;

      const processTransactions = async () => {
        const userTransactions = transactions.find((t) => t._id === id);

        if (userTransactions) {
          for (let tx of userTransactions.transaction) {
            dispatch(acct(tx.amount));
          }
        }
      };

      processTransactions();
    }
  }, [transactions, id, dispatch]);

  if (isLoading) {
    content = (<div className="loader_cen"> <div className='loader'></div></div>);
  } else if (isSuccess) {
    content = (
      <div className='mains' style={{ width: "100%" }} >
        <ToastContainer />
        <h1>KS Bank - My Bills</h1>
        <div className='pw'>
          {contents}
        </div>
        {bills.map((bill, index) => (
          <Bill
            contents={contents}
            key={index}
            billName={bill.billName}
            amount={bill.amount}
            dueDate={bill.dueDate}
            status={bill.status}
            setOpens={setOpens}
            onPay={() => handlePay(bill.billName, bill.amount)}
          />
        ))}
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    );
  }

  return content;
};

export default BillComponent;