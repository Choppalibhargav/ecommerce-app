import React from "react";
import '../component/Login.css'
import MainPage from "../pages/Mainpage";
import { Link } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import { useState } from "react";

function Login(){

  const [emailval,setemailval]=useState("");
  const[passval,setpassval]=useState("");
  const handleSubmit=(event)=>{
    event.preventDefault();
  }


    return(
        <div className="main-login">
            <div className="login-contain">
              <div className="left-side">
                <form onSubmit={handleSubmit}>
                  <label for="email">Email</label>
                  <input placeholder="Enter your email..." type="email" id="email" value={emailval}
                  onChange={()=>{setemailval(HTMLInputElement.value)}}/>
                  <label for="password">Password</label>
                    <input placeholder="Enter Password" type="password"  id="pwd1" value={passval}
                    onChange={()=>{setpassval(HTMLInputElement.value)}}/>
                    <Link to="/MainPage">
                    <button type="submit" id="sbt-btn">Login</button>
                    </Link>
                    <Routes>
                      <Route path="/MainPage" element={<MainPage />} />
                    </Routes>
                  
                </form>
              </div>
            
              <div className="right-side">
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

export default Login;