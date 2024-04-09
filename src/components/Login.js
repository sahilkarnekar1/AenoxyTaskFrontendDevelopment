import React from 'react'
import "./style1L.css";
import test2 from "./test2.jpg";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <>
        <div className="main">
  <div className="subdiv">
    <div className="leftUI">
      <div className="leftSubDiv">
        <div className="toptextcont">
          <p className="bbltxt">dribble</p>
          <p className="txtdiscover">
            Discover the world's top Designers &amp; Creatives
          </p>
        </div>
        <div className="displayim1">
          <img className="setIm" src={test2} alt />
        </div>
        <div className="arttxt">
          <font>Art by</font>
          <u><span className="txtArtUnderline">Peter Tarka</span></u>
        </div>
      </div>
    </div>
    <div className="rightUI">
      <div className="txtsignin">
        <p className="setRiAlready">
          <font>Already a member? </font><span>Sign In</span>
        </p>
      </div>
      <div className="newFormCont">
        <div className="formcont">
          <div className="headcont">
            <h2 className="headForm">Sign up to Dribble</h2>
          </div>
          <div className="usernameError">
            <p className="txtusernameError">
              * Username has been already taken
            </p>
          </div>
          <div className="NameUnameCont">
            <div className="nameInpDiv">
              <label className="sameLbl" htmlFor="Name">Name</label>
              <input className="sameInp" type="text" name="nameIn" placeholder="Jon" />
            </div>
            <div className="unameInpDiv">
              <label className="sameLbl" htmlFor="Uname">Username</label>
              <input className="sameInp" type="text" name="unameIn" placeholder="Jon" />
            </div>
          </div>
          <div className="emailCont">
            <label className="sameLbl" htmlFor="Email">Email</label>
            <input className="sameInp" type="text" name="emailIn" placeholder="account@refero.design" />
          </div>
          <div className="emailCont">
            <label className="sameLbl" htmlFor="Password">Password</label>
            <input className="sameInp" type="password" name="PasIn" />
          </div>
          <br />
          <div className="termsCont">
            <div className="cBoxDiv">
              <input className="cBoc" type="checkbox" name />
            </div>
            <font>Creatin an account means its ok allow with our
              <span>Terms of services, Privacy Policy,</span> and our
              default <span>Notification Settins</span> all tinks our
              default notification settin</font>
          </div>
          <div className="createBtnDiv">
            <Link to="/profile"><button>Create Account</button></Link>
          </div>
          <div className="lastTxt">
            <p>This site is protected by reCAPTCA and the Google</p>
            <p>Privacy Policy and Terms of Services apply</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Login