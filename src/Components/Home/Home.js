import React from 'react';
import Slideshow from '../Slideshow';
import './Home.css';

const Home = (props) => {
  return (
    <div className="container">
      <h1>Herramientas Ahegao</h1>
      <h2>Página web creada con el único propósito de pasar la materia de programación web y antojar con el fino arte del estilo ahegao.</h2>

      <Slideshow />
    </div>
  );
}

export default Home;