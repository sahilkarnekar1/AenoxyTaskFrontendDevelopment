import React from 'react'
import "./style4E.css";
import bagim from "./bagim.png";
import test2 from "./test2.jpg";
import sentmail from "./sentmail.png";
import basketball from "./basketball_1259898.png";
import facebook from "./facebook_1384005.png";
import twitter from "./twitter_739257.png";
import instagram from "./instagram_2111463.png";
import pinterest from "./pinterest_4902409.png";
import basketballlast from "./basketball.png";

const EmailVerify = () => {
    
  return (
    <>
        <div className="main11">
  <div className="navbardiv">
    <nav className="navbar navbar-expand-lg navbar-light border-bottom">
      <a className="navbar-brand" style={{color: '#e09ab8'}} href="#">Dribble</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inspiration <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Find Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Learn desin</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Go Pro</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hire desiners</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div className="input-container">
            <input className="form-control mr-sm-2 rounded searchEdit" type="search" placeholder="Search" aria-label="Search" />
          </div>
          <img className="baIm" src={bagim} alt srcSet />
          <img className="profileIm" src={test2} alt srcSet />
          <button className="btn btn-outline-success my-2 my-sm-0 btnUpload" type="submit">
            Upload
          </button>
        </form>
      </div>
    </nav>
  </div>
  <div className="centerhome">
    <p style={{fontSize: 30, fontFamily: 'sans-serif', fontWeight: 'bold', color: 'black'}}>Please Verify Your Email...</p>
    <img className="imMail" src={sentmail} alt srcSet />
    <p>please verify your email address. we sent you a confirmation main to : </p>
    <p style={{fontWeight: 'bold', color: 'black'}}>account@refero.desin</p>
    <p>click the confirmation link int that email to bein using dribble.</p>
    <font>Dont recieve the email . check your spam folder it may have been cauht by a filter. if you still dont see it , you can </font><font style={{fontFamily: 'sans-serif', fontWeight: 'bold', color: '#e09ab8'}}>resend the confirmation email.</font>
    <p>Wrong email address? <font style={{fontFamily: 'sans-serif', fontWeight: 'bold', color: '#e09ab8'}}>change it</font></p>
  </div>
  <div className="footerDiv">
    <div className="footersubDiv">
      <div className="footerDribbleDiv">
        <p className="dribbletxtfooterbold">Dribble</p>
        <p>Dribble is the worlds leadin community for creative to share, grow, and get hired. </p>
        <div className="socialIm">
          <img src={basketball} alt srcSet />
          <img src={facebook} alt srcSet />
          <img src={twitter} alt srcSet />
          <img src={instagram} alt srcSet />
          <img src={pinterest} alt srcSet />
        </div>
      </div>
      <div className="forDesFooterDiv">
        <b><p>For desiners</p></b>
        <p>Go pro!</p>
        <p>Explore desine work</p>
        <p>Desin Blog</p>
        <p>Overtime Podcast</p>
        <p>Playoffs</p>
        <p>Weekly warm-up</p>
        <p>Refer a friend</p>
        <p>Code of Conduct</p>
      </div>
      <div className="forDesFooterDiv">
        <b><p>Hire Designers</p></b>
        <p>Post a job opening</p>
        <p>Post a freelance project</p>
        <p>Search for designers</p>
        <b><p>Brands</p></b>
        <p>Advertise with us</p>
      </div>
      <div className="forDesFooterDiv">
        <b><p>Company</p></b>
        <p>About</p>
        <p>Careers</p>
        <p>Support</p>
        <p>Media kit</p>
        <p>Testimonials</p>
        <p>Api</p>
        <p>Terms of services</p>
        <p>Privacy policy</p>
        <p>Cookie policy</p>
      </div>
      <div className="forDesFooterDiv">
        <b><p>Directories</p></b>
        <p>Design jobs</p>
        <p>Designers for hire</p>
        <p>Freelancing designers for hire</p>
        <p>Tags</p>
        <p>Places</p>
        <b><p>Design assets</p></b>
        <p>Dribble marketplace</p>
        <p>Creative market</p>
        <p>Font Spring</p>
        <p>Font squirrel</p>
      </div>
      <div className="forDesFooterDiv">
        <b><p>Design Resources</p></b>
        <p>Freelancing</p>
        <p>Design hiring</p>
        <p>Design Portfolio</p>
        <p>Design Education</p>
        <p>Creative Process</p>
        <p>Design Industry trends</p>
      </div>
    </div>
    <div className="lastBottom">
      <p>© 2023 Dribble. All rights reserved</p>
      <p className="txtRi"><font style={{color: 'black', fontWeight: 'bold'}}>20,501,853 </font>shots dribbled <img style={{width: 24, height: 24}} src={basketballlast} alt srcSet /></p>
    </div>
  </div>
</div>

    </>
  )
}

export default EmailVerify