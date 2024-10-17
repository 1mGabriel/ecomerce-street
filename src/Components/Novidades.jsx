import React from "react";
import {Link} from 'react-router-dom'
import video from "../assets/videos.mp4";
import "./Novidades.css";
const Novidades = () => {
  const image_1 =
    "https://s.lojakings.com.br/gallery/puma-suede-1.png?format=webp";
    const image_2 = "https://s.lojakings.com.br/gallery/vapormax.png?format=webp";
  return (
    <div className="novidades-wraper">
      <div className="novidades-content container">
        <h2 className="title questrial">Novidades</h2>
        <div className="novidades-cards">
        <Link>
            <img src={image_1} alt="imagem" />
        </Link>
        <Link to="/produto/19">
        <video src={video} autoPlay="autoplay" muted="muted" loop="loop" ></video>
        </Link>
        <Link to="/produto/1">
            <img src={image_2} alt="imagem" />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Novidades;
