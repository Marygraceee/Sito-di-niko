import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { SiFiverr, SiUpwork } from 'react-icons/si';
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
        <h1 className="linkedin"><BsLinkedin /></h1>
        <h1><SiFiverr /></h1>
        <h1 className="upWork"><SiUpwork /></h1>

      </div>
    </div>
  );
}

export default Contatti;
