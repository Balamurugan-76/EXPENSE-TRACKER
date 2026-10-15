import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("Please fill all fields");
    } else {
      alert("Login successful!");
      
    }
  }

  return (
    <div className="login-box">
      <h2>Login</h2>
      <p>Welcome to Expense Tracker</p>

      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Enter username" 
          onChange={(e) => setUsername(e.target.value)} />

        <input type="password" placeholder="Enter password" 
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;