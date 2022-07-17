import React from 'react';

import ghostwriting from '../../assets/Servizi/ghostwriting.jpg';
import Copywriting from '../../assets/Servizi/Copywriting.jpg';
import editing from '../../assets/Servizi/editing.jpg';
import brand from '../../assets/Servizi/brand.jpg';
import socialmedia from '../../assets/Servizi/socialmedia.jpg';
import './Servizi.css';

function Servizi() {
  return (
    <div className="servicesContainer">

      <div className="service">
        <div className="cardServizi">
          <div>
            <h1>Copywriting</h1>
            <p>
              Testi per blog, articoli, testi per il tuo sito,
              i tuoi social o per le inserzioni del tuo e-commerce!
              Con una laurea in Arti Tecnologiche, più di 10 anni di
              esperienza e corsi di aggiornamento per il SEO copywriting periodici,
              posso occuparmi di qualsiasi esigenza di scrittura.
              <br />
              <br />
              Gli argomenti che ho trattato e che tratto sono davvero moltissimi e
              puoi controllare nei miei portfolio online cosa ho già scritto e, se
              non appare, è probabile che io ne abbia scritto ma non abbia più accesso ai documenti.
              L’unico modo per avere la certezza, quindi, è chiedermelo, che è poi
              una scusa per parlare del tuo progetto!
            </p>

          </div>
          <img src={Copywriting} alt="" />
        </div>

      </div>

      <div className="service">
        <div className="cardServizi">
          <img src={brand} alt="" />
          <div>
            <h1>Strutturazione brand identity</h1>
            <p>
              Dopo tanti anni nello scrivere di Digital Marketing
              e l’aver aiutato ormai diverse startup a raggiungere il
              loro posto nel mercato, mi occupo con successo di strutturare
              brand identity e creare un tone of voice, dare le indicazioni
              per una comunicazione efficace, fare ricerche di mercato e stilare
              i punti essenziali da seguire per l’intero team di creativi.
              <br />
              <br />
              Ho già gestito gruppi di persone e scegliendomi puoi quindi contare su una
              persona assolutamente professionale, eccellente in ciò che la riguarda e un
              approccio privo di quel carattere tossico che contraddistingue i
              “Professionisti Veri®”. Soddisfatti o rimborsati (in Shibacoin o
              qualche altra valuta morta).
            </p>

          </div>
        </div>

      </div>

      <div className="service">
        <div className="cardServizi">
          <div>
            <h1>Ghostwriting</h1>
            <p>
              Dopo alcuni anni di copywriting mi è capitato
              di occuparmi di alcuni libri scritti per altri.
              Inizialmente solo saggi sul digital marketing,
              per poi muovermi al settore delle biografie e
              persino in quella che chiamo “narrativa su commissione”:
              tu mi dai l’idea e io la realizzo.
              <br />
              <br />
              Sin da quando ero bambina dicevano che sarei stata
              una “pazza che scriveva libri coi gatti accanto” (cit.)
              e alla fine ti assicuro che qualsiasi cosa leggerai scritta
              in ghost da me sarà esattamente quello che voleva il cliente,
              solo reso molto migliore della loro idea iniziale. Ad oggi
              conto una decina di libri e nessun cliente insoddisfatto.
              <br />
              <br />
              Scrivo anche script per i video di Youtube e TikTok, cosa
              che considero appartenente al “ghostwriting”.
            </p>

          </div>
          <img src={ghostwriting} alt="" />
        </div>
      </div>

      <div className="service">
        <div className="cardServizi">
          <img src={socialmedia} alt="" />
          <div>
            <h1>Social Media/Email Marketing</h1>
            <p>
              Non solo i social media hanno bisogno di un copy
              decente, personalizzato in base alla piattaforma
              di destinazione, ma occorre anche che nel giro di
              10 parole si riesca a comunicare qualcosa, quello
              che si vuole, nella maniera più efficiente possibile.
              <br />
              <br />
              Se è pensiero comune che “chiunque può farlo”, la realtà è che
              trovare le parole giuste per un post sui social riguardo l’importanza
              delle fettuccine artigianali per l’Italia, o un Email per
              convincere i tuoi compratori a fidarsi della tua soluzione
              “a 360 gradi” non ha niente di facile. Il peso di una parola
              quando hai i secondi di attenzione contati è enorme: non ci
              credi? Prova a guardare quali sono i social più di successo e
              gli email marketer: sai fare quello che fanno loro?
            </p>

          </div>
        </div>
      </div>

      <div className="service">
        <div className="cardServizi">
          <div>
            <h1>Editor letterario</h1>
            <p>
              Sin da quando ero piccola ho corretto moltissimi libri,
              ma è da qualche anno che ho cominciato a lavorare come
              una cattivissima editor per alcune case editrici altrettanto
              cattivissime.
              <br />
              Non correggo soltanto i semplici refusi, ma suggerisco modifiche grammaticali
              e, se un paragrafo fa veramente schifo e va riscritto, non ci sarà pietà da
              parte mia: un libro o esce nel migliore dei modi o probabilmente
              non valeva la pena farlo uscire.
            </p>

          </div>
          <img src={editing} alt="" />
        </div>
      </div>

    </div>
  );
}

export default Servizi;
