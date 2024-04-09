import React, { useEffect } from "react";
import "./style2P.css";
import camImTest from "./camImTest.png";
import { Link } from "react-router-dom";

const Profile = () => {
  useEffect(() => {
    const avatarUpload = document.getElementById("avatar-upload");
    const avatarPreview = document.getElementById("avatar-preview");
    const chooseAvatarBtn = document.getElementById("choose-avatar");

    chooseAvatarBtn.addEventListener("click", () => {
      avatarUpload.click();
    });

    avatarUpload.addEventListener("change", () => {
      const file = avatarUpload.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
          avatarPreview.src = event.target.result;
          avatarPreview.setAttribute("style", "width:100%;height:100%;");
        };
        reader.readAsDataURL(file);
      }
    });
  }, []);
  return (
    <>
      <div className="main">
        
        <div className="ProfileCont">
          <div className="headDiv">
            <p className="txtBoldhead">Welcome! Let's create your profile</p>
            <p className="txtLets">
              Let others get to know you better! You can do these later
            </p>
            <p className="txtAddAvtar">Add an Avatar</p>
          </div>
          <div className="AtarDiv">
            <label htmlFor="avatar-upload" className="avtarImDiv">
              <img
                className="vatarImPr"
                id="avatar-preview"
                src={camImTest}
                alt="Avatar"
              />
            </label>
            <div className="imselectordiv">
              <button id="choose-avatar">Choose image</button>
              <p>or Choose one of our defaults</p>
            </div>
            <input type="file" id="avatar-upload" style={{ display: "none" }} />
          </div>
          <div className="locdiv">
            <p>Add your location</p>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter a location"
            />
          </div>
        <Link to="/finish">  <button className="nxtbtn">Next</button></Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
