import React, { useState ,useEffect} from "react";
import { useParams} from "react-router-dom";
import { useGetpostQuery,useResetMutation } from "./features/appslice";
import { useDispatch } from "react-redux";


    const ResetPasswordPage = () => {

        const disp=useDispatch()
        const [reset,{isLoading,isSuccess}]=useResetMutation()


        const {id}=useParams()
        const {data}=useGetpostQuery('',{
            pollingInterval:2000,
            refetchOnFocus:true
        })

    const [user,setuser]=useState([])
    const [find,setfind]=useState([])

    // useEffect(()=>{

    //     const man=async()=>{

    //         const {ids,entities}=data;
    //         const users=ids.map(id=>entities[id])
    //         setuser(users)
    //     }
    //     man()

    // },[data])

    // useEffect(()=>{

    //     if(!user)return ;

    //     const finds=user.find(id=>id.id===id)

    //     setfind(finds)

    // },[user])
    

    const [password, setpassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const [success, setSuccess] = useState(false);


  const handleSubmit = async(e) => {
    e.preventDefault();


    if (!password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    await disp(reset({password,id}))

    setError("");
    setSuccess(true);
    console.log("Password reset successful for:", password);

    setpassword("");
    setConfirmPassword("");
  };

  return (
    <>
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Reset Your Password</h2>
        <p style={styles.subtext}>
          Please enter your new password below.
        </p>

        {success && (
          <p style={styles.successMessage}>
            Your password has been reset successfully. You can now log in with
            your new password.
          </p>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              New Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your new password"
              value={password}
              onInput={(e) => setpassword(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          {error && <p style={styles.errorMessage}>{error}</p>}

          <button type="submit"  style={styles.button} >
            
            {isLoading?<div className='load'></div> :"Reset Password"}
          </button>
        </form>

        <div style={styles.links}>
          <a href="/form" style={styles.link}>
            Back to Login
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "1rem",
    color: "#333",
  },
  subtext: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "1rem",
    textAlign: "left",
  },
  label: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "0.5rem",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.75rem",
    borderRadius: "4px",
    position:"relative",display:"flex",justifyContent:"center",alignItems:'center',
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "1rem",
  },
  errorMessage: {
    color: "#dc3545",
    fontSize: "14px",
    marginBottom: "1rem",
  },
  successMessage: {
    color: "#28a745",
    fontSize: "14px",
    marginBottom: "1rem",
  },
  links: {
    marginTop: "1.5rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default ResetPasswordPage;