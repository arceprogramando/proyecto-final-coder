import { promociones, promociones2 } from "../assets";
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../index.css'

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Carousel = () => {
    const images = [promociones, promociones2, promociones]



    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}


                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                className=" max-w-4xl  "
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center ">
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel