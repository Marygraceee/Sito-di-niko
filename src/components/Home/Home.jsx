/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import motivo1 from '../../assets/motivo1.jpeg';
import motivo2 from '../../assets/motivo2.webp';
import motivo3 from '../../assets/motivo3.jpg';

function Home() {
  return (
    <div className="homeContent">

      <div className="introduzione">
        <h3>
          <cite>“Si legge quello che piace leggere, ma si scrive quello che si è capaci di scrivere.”</cite>
        </h3>
        <h4>(Jorge Luis Borges)</h4>

        <p>
          <span style={{ fontWeight: 'bold' }}>Editing di libri. Proofreader. Copywriter</span>
          {' '}
          per blog post, per landing page e siti… ecco perché nascono sempre “lavori nuovi”:
          sono solo nomi, etichette. Nel mio caso potremmo dire che sono una
          {' '}
          <span style={{ fontWeight: 'bold', color: 'rgb(241, 53, 53)' }}>“creativa della comunicazione”</span>
          .
        </p>
        <p>
          Per presentarmi quindi di solito faccio una sola domanda.
        </p>

        <NavLink to="/servizi">
          <button type="button" className="serviceBtn">In cosa ti posso aiutare?</button>
        </NavLink>

      </div>

      <div className="motivazioni">

        <h1>Perché scegliere un creatore di contenuti?</h1>
        <p className="questioning">
          Andresti in giro su un’auto con un motore improvvisato? Ti fideresti a salire su un aereo mai collaudato prima?
          <br />
          <br />
          Se non lo faresti per te, perché farlo con il tuo progetto? Affidarsi agli
          {' '}
          <span style={{ fontWeight: 'bold' }}>esperti della comunicazione </span>
          significa avere meno ansie, meno problemi e qualcuno che sa “smanettare” per far funzionare ogni cosa, che oggi definiamo generalmente "copywriter".
          <br />
          Di contro, lascia che ti chieda una cosa.

        </p>
        <h2 className="percheNo">Perché dovresti NON scegliere un copywriter?</h2>
        <div className="cards">
          <div className="card">
            <img src={motivo1} alt="Non posso spendere soldi" />
            <h3><em>"Non posso spendere soldi"</em></h3>
            <p>
              Non puoi o non
              {' '}
              <em>vuoi</em>
              ? La scelta è tutta qui:
              capire quali spese sono necessarie e quali non. Hai la
              certezza che non valga la pena investire nella comunicazione
              {' '}
              <strong>OGGI</strong>
              ?
            </p>
          </div>
          <div className="card">
            <img src={motivo2} alt="So scrivere i testi da me" />
            <h3><em>"So scrivere i testi da me"</em></h3>
            <p>
              Certo! Il punto è
              {' '}
              <em>come</em>
              . Il mio compito è ottimizzare ogni
              parola affinché sia estremamente coerente all’obiettivo: cosa ho studiato
              per anni se potevo limitarmi ad improvvisare?
            </p>
          </div>
          <div className="card">
            <img src={motivo3} alt="Non mi fido di nessuno" />
            <h3><em>"Non mi fido di nessuno"</em></h3>
            <p>
              Fai bene! Il mercato è pieno di persone che improvvisano
              e non devi fidarti sulla base del nulla. Guarda
              il mio portfolio, mettimi alla prova. Tu hai bisogno di aiuto e io sono qui per questo:
              {' '}
              <strong>aiutare</strong>
              .
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
