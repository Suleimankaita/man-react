
import { useState, useRef, useEffect } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import obj from "./hooks/obj";
import Usebuy from "./hooks/Usebuy";
import { useGetpostQuery } from "./features/appslice";
import UseAuth from "./hooks/UseAuth";

const S = () => {

    const {data}=useGetpostQuery("",{
      pollingInterval:1000,
      refetchOnFocus:true,
    })


    const {id}=UseAuth()



    const {values,setvalues}=Usebuy()

    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    
    const [otp, setOtp] = useState(["", "", "", ""]);
    
    let num="1234"
    
    const [nums,setnums]=useState('')
    
    const [result,setresult]=useState('')

    const [pin,setpin]=useState('')
  
    useEffect(()=>{

      const mans=async()=>{

        const {ids,entities}=data;
       
        const pins=entities[id]
        console.log(pins)
        setpin(pins.transaction_pin)
        
      }
      mans()

    },[data])

    const handleChange = (index, value) => {
  
      if (isNaN(value)) return; 

  
      const newOtp = [...otp];
  
      newOtp[index] = value;
  
      setOtp(newOtp);

  
      if (value && index < 3) {
  
        inputRefs[index + 1].current.focus(); // Move to next input
  
      }


    if (newOtp.every((digit) => digit !== "")) {
      onSubmit(newOtp.join("")); // Submit OTP when filled
      setnums(newOtp.join(''))
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const [open,setopen]=useState(true)


  const show=()=>{
    setopen(prev=>!prev)
    inputRefs.map(is=>{
        is.current.type="text"
    })
}
    const hide=()=>{
        setopen(prev=>!prev)
 
        inputRefs.map(is=>{
            is.current.type="password"
        })
    }

    const onSubmit=(val)=>console.log(val)
    const content=(
        open?
        <>
      <button className="eye_btn" onClick={show}><FaEye/></button>
        </>
:<>
    <button className="eye_btn" onClick={hide}><FaEyeSlash/></button>
  </>
    )


    const [display,setdisplay]=useState('')
    
          const [opens,setopens]=useState(true)

    useEffect(()=>{
      console.log("pins",nums===pin)
        setresult(pin.length?nums===pin?"opo":num.length!==nums.length?null:'reds':null)
      setvalues(pin.length?nums===pin:null)


    },[otp,nums])

    useEffect(()=>{
      inputRefs[0].current.focus()
    },[])

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="password"
          value={digit}
          maxLength="1"
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className={result}

          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            textAlign: "center",
            
        }}
        />
      ))}
      {/* {content} */}
    </div>
  );
};

export default S;
