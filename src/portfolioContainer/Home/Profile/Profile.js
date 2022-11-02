import React from "react";
import Typical from "react-typical";
import "./Profile.css";
 

export default function Profile() {
  return (
    <div className="skill-parent">
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a href="https://www.linkedin.com/in/erika-gillig/">
                <i className=" fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/ErikaGillig">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Erika</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full stack Developer ​💻​",
                    1000,
                    "Jr. Developer ​🎠​",
                    1000,
                    "React Dev ​👓​",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Soy una programadora web Jr. Con talento disponible y con muchas
                ganas de aprender   
              </span>
            </span>
          </div>
          <div className="profile-options">
            
            <a href="CV Erika Gillig.pdf" download="CV Erika Gillig.pdf">
              <button className="btn highlighted-btn"> Descargar CV</button>
            </a>
            <a href="Resume Erika Gillig.pdf" download="Resume Erika Gillig.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  </div>
  );
}
