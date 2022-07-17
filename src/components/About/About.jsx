/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { VscBook } from 'react-icons/vsc';
import Chisono from '../../assets/Chisono.jpg';
import './About.css';

function About() {
  return (
    <div className="mainContainer">

      <div className="firstSection">
        <div className="photoSubSection">
          <img src={Chisono} alt="" />
        </div>
        <div className="textSubSection">
          <p>
            Mi chiamo Nikole.
            <br />

            Al momento della scrittura ho 30 anni
            e lavoro come copywriter professionale da 11.
            <br />
            Sin da quando avevo 12 anni immaginavo di lavorare con le parole,
            ma al tempo credevo sarei diventata un’autrice strafiga e famosa.
            In realtà ho cominciato poi a scrivere di cose sempre più tecniche,
            finché non ho deciso di gettarmi nel mondo del content writing: blog,
            siti, social, script, libri.
            <br />
            <br />
            Ad oggi ho raccolto una quantità impressionante di esperienze e,
            oltre a essere più cinica e onesta, sono anche fortemente concentrata
            sull’obiettivo: da me non esiste il servizio “a metà”. Non posso,
            materialmente, forzarmi a lavorare male. Anche se lo facessi mi sentirei
            fisicamente male e dovrei stirarmi le dita come Dobby.

          </p>
        </div>

      </div>

      <div className="secondSection">
        <div className="invito">
          <p>Dai un'occhiata a qualche mio progetto!</p>
        </div>
        <div className="linkAiProgetti">
          <a href="https://nikolececcarelli.contently.com/" target="_blank" rel="noopener noreferrer"><VscBook /></a>
        </div>
        <div className="dueRighe">
          <p>
            Richiedi un portfolio più completo tramite messaggio!
            <br />
            Ne ho uno raccolto in questi anni su Drive,
            con più argomenti e stili.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
