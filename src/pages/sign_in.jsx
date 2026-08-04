import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration Successful!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
       backgroundImage:
      "url('https://img.magnific.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-p_1258-112144.jpg?semt=ais_hybrid&w=740&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
      }}
    >
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px",padding:"20px",borderRadius:"5px"}}>
        <div style={{ marginBottom: "12px" ,padding:"10px",borderRadius:"5px"}}> 
         <label style={{ display: "block", marginBottom: "6px"  }}>Name:</label>
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)} style={{ padding: "8px", width: "250px" }} />
         
         
          <label style={{ display: "block", marginBottom: "6px" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "8px", width: "250px" }}
          />
           <label style={{ display: "block", marginBottom: "6px",}}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "8px", width: "250px" }}
          />
        </div>
       
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Sign In
        </button>
        
            <a href="/login" style={{ color: "white", textDecoration: "none", marginTop: "10px",hover:{color:"blue"}}}>
              Already have an account? Log in
            </a>
        
      </form>
    </div>
  );
}

export default SignIn;