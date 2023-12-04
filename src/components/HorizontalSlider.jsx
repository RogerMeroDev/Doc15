import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importación de imágenes
import Slider1 from '../images/PLAZO_FIJO_1920x872.jpg';
import Slider2 from '../images/activaygana.webp';

const HorizontalSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, 
    autoplay: true,         // Habilita el avance automático
    autoplaySpeed: 5000,    // Intervalo de tiempo de 5 segundos// Ajusta la altura de manera adaptativa
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
      // Puedes agregar más puntos de interrupción si es necesario
    ]
  };

  return (
    <div style={{ width: '98%', maxHeight: '50vh',margin: '10px 0 10px 10px', float: 'left', borderRadius: '15px', overflow: 'hidden' }}>
      <Slider {...settings}>
        <div>
          <img src={Slider1} alt="Descripción de la Imagen 1" style={{ width: "100%", height: "auto" }} />
        </div>
        <div>
          <img src={Slider2} alt="Descripción de la Imagen 2" style={{ width: "100%", height: "auto" }} />
        </div>
        {/* Más slides con otras imágenes según sea necesario */}
      </Slider>
    </div>
  );
};

export default HorizontalSlider;
