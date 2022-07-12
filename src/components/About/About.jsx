/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { VscBook } from 'react-icons/vsc';
import placeholder from '../../assets/placeholder.jpg';
import './About.css';

function About() {
  return (
    <div className="mainContainer">

      <div className="firstSection">
        <div className="photoSubSection">
          <img src={placeholder} alt="" />
        </div>
        <div className="textSubSection">
          <p>
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Et beatae libero, repudiandae
            aut repellendus sit adipisci
            similique perspiciatis tempora
            accusamus commodi voluptatibus
            provident aperiam molestiae nesciunt v
            oluptatem magni cupiditate optio q
            uis itaque animi eius laborum
            sint nobis. Alias, sint hic?
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
          <p>Richiedi un portfolio più completo</p>
        </div>
      </div>

    </div>
  );
}

export default About;
