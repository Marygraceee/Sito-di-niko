/* eslint-disable max-len */
import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import placeholder from '../../assets/placeholder.jpg';

function Home() {
  return (
    <div className="homeContent">
      <div className="introduzione">
        <div className="introduzioneElementi">
          <h2>Mi chiamo</h2>
          <h1>Nikole Ceccarelli</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime at facere quasi, excepturi aliquid aspernatur.
            Iste nostrum obcaecati itaque dolorem ipsum rem libero! Debitis tenetur deserunt facere maiores maxime.

          </p>
          <NavLink to="/servizi">
            <button type="button" className="serviceBtn">Richiedi un servizio</button>
          </NavLink>
        </div>
      </div>
      <div className="motivazione">
        <div className="motivazioneElementi">
          <h2>Perché</h2>
          <h1>scegliere un copywriter?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime at facere quasi, excepturi aliquid aspernatur.
            Iste nostrum obcaecati itaque dolorem ipsum rem libero! Debitis tenetur deserunt facere maiores maxime.
          </p>
          <div className="cards">
            <div className="card">
              <img src={placeholder} alt="placeholder" />
              <h1>Ciao!</h1>
              <p>Hola!</p>
            </div>
            <div className="card">
              <img src={placeholder} alt="placeholder" />
              <h1>Ciao!</h1>
              <p>Hola!</p>
            </div>
            <div className="card">
              <img src={placeholder} alt="placeholder" />
              <h1>Ciao!</h1>
              <p>Hola!</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
