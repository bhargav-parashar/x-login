import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error,setError] = useState("");
  const handleSubmit = (e)=> {
    e.preventDefault();
    if(form.username === "user" && form.password === "password"){
        setError("");
        setIsSubmitted(true);
    }else{  
        setError("Invalid username or password");
        setIsSubmitted(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <h1>Login Page</h1>
        <div>
          <label for="userName">Username: </label>
          <input
            type="text"
            name=""
            id="userName"
            placeholder="Username"
            value={form.userName}
            onChange={(e)=>{setForm({...form,username:e.target.value})}}
            required
          />
        </div>
        <div>
          <label for="password">Password: </label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="Password"
            value={form.passWord}
            onChange={(e)=>{setForm({...form,password:e.target.value})}}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
