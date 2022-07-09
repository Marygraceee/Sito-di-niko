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
          Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aspernatur in odit quae distinctio architecto suscipit.

        </p>
      </div>

      <div className="iconsSection">
        <h1 className="linkedin"><AiFillLinkedin /></h1>
        <h1><SiFiverr /></h1>
        <h1 className="upWork"><SiUpwork /></h1>

      </div>
    </div>
  );
}

export default Contatti;
