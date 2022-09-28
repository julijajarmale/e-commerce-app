import React from "react";
import Navbar from "../components/Navbar";

function Register() {
  return (
    <>
      <Navbar />
      <div className="reg-container">
        <div className="register">
        <div className="form">
          <h1 className="title"> CREATE AN ACCOUNT</h1>
          <form>
            <input placeholder="name" />
            <input placeholder="last name" />
            <input placeholder="user name" />
            <input placeholder="email" />
            <input placeholder="password" />
            <input placeholder="confirm password" />
          </form>
          <button className="button-1">Create user</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Register;
