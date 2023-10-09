import PropTypes from 'prop-types';
import Item from "./Item"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ItemList = ({ shoes }) => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                slidesPerGroup={4}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                className=" max-w-4xl  "
            >
                <div className='flex'>
                    {shoes.map((shoe) => {
                        return (
                            <SwiperSlide key={shoe.id}>
                                <Item shoe={shoe} key={shoe.id} />
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
        </>
    )
}

ItemList.propTypes = {
    shoes: PropTypes.array.isRequired,
};

export default ItemList;