import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();

  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#141414",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#222",
          padding: "30px",
          borderRadius: "10px",
          width: "400px",
          textAlign: "center",
        }}
      >
        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />

        <h2>My Profile</h2>

        <p>
          <strong>Email:</strong>
          <br />
          {user.email}
        </p>

        <p>
          <strong>UID:</strong>
          <br />
          {user.uid}
        </p>

        <button
          onClick={handleLogout}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;