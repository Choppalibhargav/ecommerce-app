import React from "react";
import '../component/Register.css'
import MainPage from "../pages/Mainpage";
import { Link } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";

function Register(){
    const [fnameval,setfnameval]=useState("");
    const [lnameval,setlnameval]=useState("");
  const [emailval,setemailval]=useState("");
  const[passval,setpassval]=useState("");
  const [cpassval,setcpassval]=useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();
  }


    return(
        <div className="main-login">
            <div className="login-contain">
              <div className="right-side">
                <form onSubmit={handleSubmit}>
                  <label for="name">first name</label>
                  <input placeholder="Enter your first name" type="text" id="first-name" value={fnameval}
                  onChange={()=>{setfnameval(HTMLInputElement.value)}}/>
                  <label for="lname">last name</label>
                    <input placeholder="Enter your last name" type="text"  id="last-name" value={lnameval}
                    onChange={()=>{setlnameval(HTMLInputElement.value)}}/>
                    <label for="email">Email</label>
                  <input placeholder="Enter your email..." type="email" id="email" value={emailval}
                  onChange={()=>{setemailval(HTMLInputElement.value)}}/>
                  <label for="password">Password</label>
                  <input placeholder="Enter your pasword" type="password" id="pwd1" value={passval}
                  onChange={()=>{setpassval(HTMLInputElement.value)}}/>
                  <label for="cpassword">Confirm password</label>
                  <input placeholder="Re-enter same password" type="password" id="pwd2" value={cpassval}
                  onChange={()=>{setcpassval(HTMLInputElement.value)}}/>
                  
                  <Link to ="/Login">
                  <button type="submit" id="sbt-btn">Signup</button>
                  </Link>
                  <Routes>
                      <Route path="/Login" element={<Login />}/> 
                    </Routes>
                  
                </form>
              </div>
            
              <div className="left-side">
                <div className="welcomenote">
                  <h3>Welcome</h3>
                </div>
                <div className="welcome-img">
                  <img src="logo"id="wel-img-id" alt="" srcset="" />
                </div>

              </div>
            </div>
          </div>

    );
}

export default Register;