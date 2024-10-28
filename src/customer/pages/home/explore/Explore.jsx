import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { destinations } from '../../../../data/destinationData';
import { IoCaretBackCircleOutline, IoCaretForwardCircleSharp } from "react-icons/io5";

const Explore = () => {
    const slidesPerView = 4;

    return (
        {
            destinations.map((destinations, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                    <div className="overflow-hidden cursor-pointer flex flex-col items-center">
                        <img
                            src={destinations.image}
                            alt={destinations.label}
                            className="rounded-lg w-full h-[140px] object-cover md:h-[130px]"
                            style={{ height: '140px' }}
                        />
                        <div className="text-center mt-2">
                            <h5 className="text-lg">{destinations.name}</h5>
                            <h5 className="text-gray-700 font-normal mt-1 text-sm">0 chỗ nghỉ</h5>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
        < div className = "absolute top-1/2 left-0 transform -translate-y-1/2 swiper-button-prev" >
            <IoCaretBackCircleOutline className="w-10 h-10 text-indigo-600 cursor-pointer" />
                    </div >
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 swiper-button-next">
        <IoCaretForwardCircleSharp className="w-10 h-10 text-indigo-600 cursor-pointer" />
    </div>
                </Swiper >
            </div >
        </div >
    );
};

export default Explore;
