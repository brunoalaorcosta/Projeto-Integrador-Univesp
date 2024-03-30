import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.css';
import LinkButton from '../layout/LinkButton';

// Importe suas imagens para o carrossel
import imagem1 from '../../img/imagem1.jpg';
import imagem2 from '../../img/imagem2.jpg';
import imagem3 from '../../img/imagem3.jpg';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <section className={styles.home_container}>
      <div className={styles.slider_container}>
        <Slider {...settings}>
          <div className={styles.image_wrapper}>
            <img src={imagem1} alt="Imagem 1" />
          </div>
          <div className={styles.image_wrapper}>
            <img src={imagem2} alt="Imagem 2" />
          </div>
          <div className={styles.image_wrapper}>
            <img src={imagem3} alt="Imagem 3" />
          </div>
        </Slider>
      </div>
      <div className={styles.button_container}>
        <LinkButton to="/Contact" text="Solicitar orçamento" />
      </div>
      <div className={styles.map_container}>
        <h2>Nossa Localização</h2>
        <div dangerouslySetInnerHTML={{__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.327116175214!2d-0.0850568840053077!3d51.50665747963493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b538c8d3e91%3A0x13ab1c6b99a4a0fc!2sTower%20Bridge!5e0!3m2!1sen!2suk!4v1635830666969!5m2!1sen!2suk" width="400" height="300" style={{border: "0"}} allowfullscreen="" loading="lazy"></iframe>'}}></div>
      </div>
    </section>
  );
}

export default Home;

