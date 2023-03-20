import "./affiliation.css";
import Google from "../../assets/google.png";
import Microsoft from "../../assets/microsoft.png";
import AWS from "../../assets/aws.png";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// register();

const Affiliation = () => {
  return (
    <div className="affiliation">
      <h1>Affiliation</h1>

      <div className="dd">
        
<Swiper className="swiperjs"
      // install Swiper modules
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>

      </div>
{/* 
      </Swiper> */}

      {/* <Swiper className="affiliation-slider">
        <SwiperSlide>
          <img src={Microsoft} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AWS} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Google} alt="" />
        </SwiperSlide>
      </Swiper> */}

      {/* <swiper-container
        slides-per-view="3"
        grid-rows="3"
        mousewheel-force-to-axis="true"
      >
        <swiper-slide>Slide 1wwwwww</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
      </swiper-container> */}

{/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}

    </div>
  );
};

export default Affiliation;
