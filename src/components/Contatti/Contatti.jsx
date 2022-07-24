/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { SiFiverr, SiUpwork, SiLinkedin } from 'react-icons/si';
import './Contatti.css';

function Contatti() {
  return (
    <div className="doveTrovarmiContainer">
      <div className="writingSection">
        <p>
          Per essere presente in più posti possibili online
          e rendere più flessibile richiedere un servizio,
          sono presente sulle seguenti piattaforme: possiamo
          lavorare direttamente da lì!
          <br />
          <br />
          Basta mandare un messaggio 😁

        </p>
      </div>

      <div className="iconsSection">
        <a href="https://it.linkedin.com/in/nikolececcarelli" target="_blank" rel="noopener noreferrer" className="linkedin"><AiFillLinkedin /></a>
        <a href="https://www.fiverr.com/nikolehally" target="_blank" rel="noopener noreferrer" className="fiverr"><SiFiverr /></a>
        <a href="https://www.upwork.com/freelancers/~01704fba0242b3801c" target="_blank" rel="noopener noreferrer" className="upWork"><SiUpwork /></a>

      </div>
    </div>
  );
}

export default Contatti;
