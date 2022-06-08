/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_PERSONAL_KEY,
      process.env.REACT_APP_TEMPLATE_KEY,
      form.current,
      process.env.REACT_APP_API_KEY,
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="formContainer">

      <form className="zonaForm" ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Nome ciao!</label>
          <input type="text" id="name" name="user_name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" />
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
          <a href="https://www.linkedin.com/in/nikolececcarelli/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Form;
