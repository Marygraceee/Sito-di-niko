import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import galbani from '../../assets/Carosello/galbani.png';
import infuga from '../../assets/Carosello/infuga.webp';
import kafe from '../../assets/Carosello/kafe.webp';
import leitv from '../../assets/Carosello/leitv.png';
import portal from '../../assets/Carosello/portal.svg';
import '@splidejs/splide/dist/css/splide.min.css';
import './Carosello.css';

function Carosello() {
  return (
    <Splide
      className="caroselloContenitore"
      options={{
        perPage: 1,
        width: '80%',
        height: '20rem',
        gap: '3rem',
        pagination: false,
        rewind: true,

      }}
    >
      <SplideSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="caroselloItem">
          <img src={galbani} alt="galbani" />
        </div>

      </SplideSlide>
      <SplideSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="caroselloItem">
          <img src={portal} alt="azienda portal" />
        </div>

      </SplideSlide>
      <SplideSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="caroselloItem">
          <img src={infuga} alt="infuga edizioni" />
        </div>

      </SplideSlide>
      <SplideSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="caroselloItem">
          <img src={kafe} alt="azienda Kafe" />
        </div>

      </SplideSlide>
      <SplideSlide style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="caroselloItem">
          <img src={leitv} alt="Lei tv" />
        </div>

      </SplideSlide>
    </Splide>
  );
}

export default Carosello;
