
import { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import { useRequest_loanMutation } from "../../features/appslice";
import { useDispatch } from "react-redux";
import { FaTimes,FaWallet,FaUnlockAlt } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import { useSelector } from "react-redux";
import { pricesss ,display} from "../../features/logslice";
import S from "../../s";
const LoanSection = () => {

  const [opens,setopens]=useState(false)
  const [contents,setcontents]=useState([])
  const [amounts,setamounts]=useState('')

  const user = {
    creditScore: 720,
    loanOffers: [
      {
        amount: 10000,
        interestRate: 5.5,
        duration: 24,
      },
      {
        amount: 5000,
        interestRate: 6.0,
        duration: 12,
      },
      {
        amount: 15000,
        interestRate: 4.5,
        duration: 36,
      },
      {
        amount: 15000,
        interestRate: 4.5,
        duration: 36,
      },
      {
        amount: 15000,
        interestRate: 4.5,
        duration: 36,
      },
    ],
  };

  const selects=useSelector(display)

  const close=()=>{
    setopens(pr=>!pr)
    setcontents("")
  }

  const pay = () => {
  
    setcontents(
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


  const {id,account,username}=UseAuth()

  const dispatch=useDispatch()

  const [Loan,{isLoading,isSuccess}]=useRequest_loanMutation()

  const { creditScore, loanOffers } = user;

  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleLoanRequest = async() => {
    // try{

      if (selectedOffer&&amounts) {

          await dispatch(Loan({id,account_no:account,username,amount:amounts.amount}))
         
       
      } else {
        toast('Please select a loan offer to proceed.');
      }

  
  };
  
  let ismounted=true


  useEffect(()=>{

    //             // dispatch(pricesss({ credit: amounts.amount, phone:"Paybills" }));

    
  

    if(amounts){
      
      dispatch(pricesss({ credit: `₦${amounts.amount}`, phone:`Loan request submitted for
         at ${amounts.interestRate}% interest`}));
          
          // setamounts(null)
          // dispatch(Accno(account));
          //             // dispatch(Balance(amounts.amount));
          
          // toast(`Loan request submitted for ₦${selectedOffer.amount} at ${selectedOffer.interestRate}% interest.`);
        
  
   


  }
 
},[isSuccess,amounts])



  useEffect(()=>{
      if(ismounted){

        if(selects&&amounts){
          
          handleLoanRequest()
              
              setcontents(selects) 
          
        }
      }
      return()=>{

        ismounted=false
        setcontents('')

      
      }
    },[selects])
 
  

    // useEffect(() => {
    //     if (selectedOffer) {
    //             // dispatch(Accno(account));
    //             // dispatch(Balance(amounts.amount));
          
    //       setcontents(opens ? (
    //         <main className='credit_alert'>
    //           <div className="close"><FaTimes className='fatimes' onClick={close} /></div>
    //           {/* <h1>NGN{amounts.amount}</h1> */}
    //           <div className="simm sl"><p>Product Name</p><p>Paybill</p></div>
    //           {/* <div className="simm sl"><p>Receipient Mobile</p><p>{phone}</p></div> */}
    //           {/* <div className="simm sl"><p>Amount</p><p>{amounts.amount}</p></div> */}
    //           <hr />
    //           <div className="payment_met">
    //             <h3>Payment Method</h3>
    //             <div className="box_pay"><FaWallet className='fa_wa' />
    //             {/* <p> Wallet (&#8358;{mans.toLocaleString()})</p> */}
    //             </div>
    //           </div>
    //           <button className='btns_pay' onClick={pay}>Pay</button>
    //         </main>
    //       ) : <></>);
    //     }
    //   }, [selectedOffer, opens]);
    
      

  return (
    <div className="main">
<ToastContainer/>
    <div className="loan-section">

      <div className="loan-offers-card">
        <h2>Your Loan Offers</h2>
        {loanOffers.length > 0 ? (
          <ul className="loan-offers-list">
            {loanOffers.map((offer, index) => (
              <li
                key={index}
                className={`loan-offer-item ${selectedOffer === offer ? 'selected' : ''}`}
                onClick={() => {setSelectedOffer(offer)
                  setamounts(offer)
                }}
              >
                <p><strong>Amount:</strong> ₦{offer.amount.toFixed(2)}</p>
                <p><strong>Interest Rate:</strong> {offer.interestRate}%</p>
                <p><strong>Duration:</strong> {offer.duration} months</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-offers">You currently have no loan offers.</p>
        )}
      </div>

      
      {/* Loan Eligibility */}
      <div className="loan-eligibility-card">
        <h2>Loan Eligibility</h2>
        <p>Your credit score: <strong>{creditScore}</strong></p>
        <p className="eligibility-message">
          {creditScore >= 700
            ? 'You are eligible for competitive loan offers.'
            : 'You may need to improve your credit score for better loan options.'}
        </p>
      </div>

      {/* Request Loan Button */}
      {loanOffers.length > 0 && (
        <div className="loan-request-card">
          <h2>Request a Loan</h2>
          {amounts ? (
            <div className="selected-offer-details">
              <p><strong>Selected Offer:</strong></p>
              <p>Amount: ₦{selectedOffer.amount.toFixed(2)}</p>
              <p>Interest Rate: {selectedOffer.interestRate}%</p>
              <p>Duration: {selectedOffer.duration} months</p>
            </div>
          ) : (
            <p className="select-offer-message">Please select a loan offer to proceed.</p>
          )}
          <button
            // onClick={handleLoanRequest}
            onClick={()=>{
             
              pay()}}
            className="request-button"
            disabled={!amounts}
          >
            Request Loan
          </button>
        </div>
      )}
    </div>
      <div className='pws'>
       {contents}

       </div>
    <br /><br /><br /><br /><br />
    </div>
  );
};

export default LoanSection