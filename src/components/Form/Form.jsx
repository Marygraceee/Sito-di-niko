/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="formContainer">
      <form className="zonaForm">
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="message">La tua richiesta</label>
          <textarea type="text" name="message" id="message" cols="60" rows="5" style={{ resize: 'none' }} />
        </div>

        <div>
          <button className="sendBtn" type="submit">Invia</button>
        </div>

      </form>

      <div className="socialContainer">
        <div>
          <h1>Email</h1>
          <a href="mailto:nikolececcarelli@gmail.com">nikolececcarelli@gmail.com</a>
        </div>
        <div>
          <h1>Telefono</h1>
          <p>Italia</p>
          <p>+39 3884748205</p>
        </div>
        <div>
          <h1>Social</h1>
          <a href="https://www.linkedin.com/in/nikolececcarelli/">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Form;
