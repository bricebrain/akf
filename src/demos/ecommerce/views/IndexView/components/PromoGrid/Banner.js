/* eslint-disable react/react-in-jsx-scope */
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <div>
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            src="https://res.cloudinary.com/dqhr2l0wr/image/upload/v1673273874/akfshop/mmm_c2e3yh.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dqhr2l0wr/image/upload/v1673273874/akfshop/maq_xtfhfz.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dqhr2l0wr/image/upload/v1673273874/akfshop/mmm2_zvh7wy.jpg"
            alt=""
          ></img>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
