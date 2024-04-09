import React, { useEffect } from "react";
import "./style3F.css";
import test2 from "./test2.jpg";
import { Link } from "react-router-dom";

const Finish = () => {
  useEffect(() => {
    function toggleSelect(event) {
      const element = event.currentTarget;
      // Toggle the 'selected' class for the div
      element.classList.toggle("selected");

      // Toggle the 'active' class for the SVG
      const svg = element.querySelector("svg");
      svg.classList.toggle("active");

      // Check if the element is selected
      if (element.classList.contains("selected")) {
        // Apply border style only to the selected div
        element.style.border = "solid 1px rgb(238, 81, 107)";
      } else {
        // If not selected, remove the border style
        element.style.border = "";
      }

      // Check if the SVG is active
      if (svg.classList.contains("active")) {
        // Apply background color only to the active SVG
        svg.style.backgroundColor = "rgb(238, 81, 107)";
      } else {
        // If not active, remove the background color
        svg.style.backgroundColor = "";
      }
    }

    const selectContainers = document.querySelectorAll(".selectCont");
    selectContainers.forEach((container) => {
      container.addEventListener("click", toggleSelect);
    });

    // Clean up event listeners
    return () => {
      selectContainers.forEach((container) => {
        container.removeEventListener("click", toggleSelect);
      });
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className="dribbletxtdiv">
          <p className="txtDribble">Dribble</p>
          <p className="txtBackarrow">🡨</p>
        </div>
        <div className="brinDiv">
          <div className="txttopbrindiv">
            <p className="txtbrin1">Whats brin you to Dribble?</p>
            <p className="txtbrin2">
              Select the option that best describe you. Dont worry, you can
              explore other options later
            </p>
          </div>
          <div className="selectordiv">
            <div className="selectCont">
              <img src={test2} alt srcSet />
              <p>im a desiner lookin to sare my work</p>
              <svg className="circlebtndiv" transform="scale(1, -1)">
                <path d="M3.53 9.354l-1.06-1.061L8 2.88l8.485 8.485-1.06 1.061L8 4.998z" />
              </svg>
            </div>
            <div className="selectCont">
              <img src={test2} alt srcSet />
              <p>im a lookin to ire a desiner</p>
              <svg className="circlebtndiv" transform="scale(1, -1)">
                <path d="M3.53 9.354l-1.06-1.061L8 2.88l8.485 8.485-1.06 1.061L8 4.998z" />
              </svg>
            </div>
            <div className="selectCont">
              <img src={test2} alt srcSet />
              <p>im a lookin for desin inspiration</p>
              <svg className="circlebtndiv" transform="scale(1, -1)">
                <path d="M3.53 9.354l-1.06-1.061L8 2.88l8.485 8.485-1.06 1.061L8 4.998z" />
              </svg>
            </div>
          </div>
          <div className="anyElse">
            <p>Anytin else? you can select multiple</p>
          </div>
          <div className="buttonNext">
            <Link to="/verify">
              {" "}
              <button>Finish</button>
            </Link>
            <p>or Press Return</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finish;
