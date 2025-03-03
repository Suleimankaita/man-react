import React, { useEffect, useState } from "react";
import { useForgetMutation } from "./features/appslice";
import { useDispatch } from "react-redux";

const ForgotPasswordPage = () => {

    const disp=useDispatch()

    const [forget,{isLoading,isSuccess}]=useForgetMutation()

    const [email, setEmail] = useState("");

    const [error, setError] = useState("");

    const [success, setSuccess] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    await disp(forget({email})
)    // Simulate sending a reset link (replace with actual API call)
    setError("");
    console.log("Reset link sent to:", email);

    // Clear the form after submission
    setEmail("");
  };
  
  useEffect(()=>{
    if(isSuccess){
        setSuccess(true);

    }
  },[isSuccess])

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Forgot Your Password?</h2>
        <p style={styles.subtext}>
          Enter your registered email address below, and we'll send you a link to
          reset your password.
        </p>

        {success && (
          <p style={styles.successMessage}>
            A password reset link has been sent to your email address. Please
            check your inbox and follow the instructions.
          </p>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your registered email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          {error && <p style={styles.errorMessage}>{error}</p>}

          <button type="submit" style={styles.button}>
            
            {isLoading?<div className='load'></div> :"Send Reset Link"}
          </button>
        </form>

        <div style={styles.links}>
          <a href="/form" style={styles.link}>
            Back to Login
          </a>
          <a href="/support" style={styles.link}>
            Need Help?
          </a>
        </div>
      </div>
    </div>
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
    borderRadius: "4px",position:"relative",display:"flex",justifyContent:"center",alignItems:'center',
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
    margin: "0 0.5rem",
  },
};

export default ForgotPasswordPage;