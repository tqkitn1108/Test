import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { destinations } from '../../../../data/destinationData';
import { IoCaretBackCircleOutline, IoCaretForwardCircleSharp } from "react-icons/io5";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";


const CustomTab = ({ label, isActive, onClick }) => (
    <div className={`choice-item ${isActive ? 'choice-item-active' : ''}`} onClick={onClick}>
        {label}
    </div>
);

const TripPlanner = () => {
    const [activeTab, setActiveTab] = useState('Beach');
    const [slidesPerView, setSlidesPerView] = useState(6);

    const handleTabSelect = (key) => {
        setActiveTab(key);
    };

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth <= 46.1875 * 16) {
                setSlidesPerView(4);
            } else {
                setSlidesPerView(6);
            }
        };

        window.addEventListener('resize', updateSlidesPerView);
        updateSlidesPerView();
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    return (
        <div className="flex flex-col items-center w-full py-8">
            <div className="flex mb-8" style={{ textAlign: 'left' }}>
                <CustomTab
                    label={<div>
                        <FaUmbrellaBeach />
                        <div className="choice-item-text" >Bãi biển</div>
                    </div>}
                    isActive={activeTab === 'Beach'}
                    onClick={() => handleTabSelect('Beach')}
                />
                <CustomTab
                    label={<div>
                        <FaMountainSun />
                        <div className="choice-item-text">Thiên nhiên</div>
                    </div>}
                    isActive={activeTab === 'Outdoors'}
                    onClick={() => handleTabSelect('Outdoors')}
                />
                <CustomTab
                    label={<div>
                        <FaCity />
                        <div className="choice-item-text">Thành phố</div>
                    </div>}
                    isActive={activeTab === 'City'}
                    onClick={() => handleTabSelect('City')}
                />
            </div>

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
                    {destinations.filter(destination => destination.type === activeTab).map((destination, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                            <div className="overflow-hidden cursor-pointer flex flex-col items-center">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="rounded-lg w-full h-[140px] object-cover md:h-[130px]"
                                    style={{ height: '140px' }}
                                />
                                <div className="text-center mt-2">
                                    <h5 className="text-lg">{destination.name}</h5>
                                    <h5 className="text-gray-700 font-normal mt-1 text-sm">Cách đây 88km</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 swiper-button-prev">
                    <IoCaretBackCircleOutline className="w-10 h-10 text-indigo-600 cursor-pointer bg-white rounded-full shadow-md hover:bg-gray-200" />
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 swiper-button-next">
                    <IoCaretForwardCircleSharp className="w-10 h-10 text-indigo-600 cursor-pointer bg-white rounded-full shadow-md hover:bg-gray-200" />
                </div>
            </div>
        </div>
    );
};

export default TripPlanner;