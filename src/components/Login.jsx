import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showSubmit, setShowSubmit] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === "user" && form.password === "password") {
      setShowSubmit(false);
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
    console.log(`Error: ${error}` );
    console.log(form);
    console.log(`showSubmit: ${showSubmit}`);
  };
  const handleReset = () => {
    setError(false);
    setForm({ username: "", password: "" });
    setShowSubmit(true);
    setIsSubmitted(false);
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1>Login Page</h1>

        {isSubmitted && <p>Welcome, user</p>}

        {!isSubmitted && (
          
          <div>
            {error.length > 0 && <p style={{margin:"0px 0px 0px 0px", color:"salmon"}}>Invalid username or password</p>}
            <div className={styles.formElements}>
              <label for="userName">Username:</label>
              <input
                type="text"
                id="userName"
                placeholder="Username"
                value={form.username}
                onChange={(e) => {
                  setForm({ ...form, username: e.target.value });
                }}
                required
              />
            </div>

            <div className={styles.formElements}>
              <label for="">Password:</label>
              <input
                type="text"
                id="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
                required
              />
            </div>
            
          </div>
          )}
          <div style={{ width:"100%"}}>
          {showSubmit && (
            <div className={styles.buttonWrapper}>
              <button className={styles.submitButtonElement} type="submit">
                Submit
              </button>
            </div>
          )}
          {!showSubmit && (
            <div className={styles.buttonWrapper}>
              <button
                className={styles.submitButtonElement}
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          )}
          </div>
        
      </form>
    </div>
  );
};

export default Login;
