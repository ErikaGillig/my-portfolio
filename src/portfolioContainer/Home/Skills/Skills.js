import React from "react";
import "./Skills.css";


export default function Skills() {
  return (
    <div className="skill-parent">
      <h1> Mis proyectos </h1>
    <div className="skills-container">
        <div className="card">
          <div className="card-image car-1"></div>
          <h2> KDA FANPAGE</h2>
          <p> Este proyecto fue entregado como examen
            final en el curso de programacion web.
          </p>
          <a href="#"> Ir</a>
        </div>
        <div className="card">
          <div className="card-image car-2"></div>
          <h2> Cards</h2>
          <p> Un pequeño proyecto echo con CSS, HTML y Javascript
          </p>
          <a href="https://erikagillig.github.io/Aquelarre.github.io/"> Ir</a>
        </div>
        <div className="card">
          <div className="card-image car-3"></div>
          <h2>Simon dice </h2>
          <p>Un pequeño juego programado en Javascript</p>
          <a href="https://erikagillig.github.io/simon-says/n"> Ir</a>
        </div>
        <div className="card">
          <div className="card-image car-4"></div>
          <h2> To do list </h2>
          <p> Una aplicacion modesta echa con Javascript
          </p>
          <a href="https://erikagillig.github.io/listadetareas.github.io/"> Ir</a>
        </div>
      </div>



    </div>
  
  )}
