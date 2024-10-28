import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { propertyTypes } from '../../../../data/propertyTypeSample';
import { IoCaretBackCircleOutline, IoCaretForwardCircleSharp } from "react-icons/io5";

const PropertyType = () => {
    const slidesPerView = 4;

    return (
        <div className="flex justify-center w-full py-8">
            <div className="w-full max-w-[1200px] relative">
                <Swiper
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    slidesPerView={slidesPerView}
                    spaceBetween={16}
                    loop={true}
                    className="swiper-container"
                >
                    {propertyTypes.map((propertyType, i) => (

                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 swiper-button-prev">
                        <IoCaretBackCircleOutline className="w-10 h-10 text-indigo-600 cursor-pointer" />
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 swiper-button-next">
                        <IoCaretForwardCircleSharp className="w-10 h-10 text-indigo-600 cursor-pointer" />
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default PropertyType;
