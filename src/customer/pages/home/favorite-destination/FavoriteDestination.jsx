import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FavoriteDestination() {
    const tabsData = {
        regions: [
            // Thêm 19 dữ liệu mẫu
            { name: 'Hanoi', rooms: 150 },
            { name: 'Ho Chi Minh City', rooms: 200 },
            { name: 'Danang', rooms: 120 },
            { name: 'Nha Trang', rooms: 180 },
            { name: 'Hue', rooms: 90 },
            { name: 'Paris', rooms: 300 },
            { name: 'New York', rooms: 250 },
            { name: 'Tokyo', rooms: 180 },
            { name: 'Sydney', rooms: 200 },
            { name: 'Barcelona', rooms: 120 },
            { name: 'London', rooms: 220 },
            { name: 'Berlin', rooms: 160 },
            { name: 'Rome', rooms: 130 },
            { name: 'Cairo', rooms: 100 },
            { name: 'Mumbai', rooms: 170 },
            { name: 'Sydney', rooms: 200 },
            { name: 'Beijing', rooms: 240 },
            { name: 'Moscow', rooms: 110 },
        ],
        cities: [
            { name: 'Paris', rooms: 300 },
            { name: 'New York', rooms: 250 },
            { name: 'Tokyo', rooms: 180 },
            { name: 'Sydney', rooms: 200 },
            { name: 'Barcelona', rooms: 120 },
            { name: 'London', rooms: 220 },
            { name: 'Berlin', rooms: 160 },
            { name: 'Rome', rooms: 130 },
            { name: 'Cairo', rooms: 100 },
            { name: 'Mumbai', rooms: 170 },
            { name: 'Sydney', rooms: 200 },
            { name: 'Beijing', rooms: 240 },
            { name: 'Moscow', rooms: 110 },
            { name: 'Los Angeles', rooms: 280 },
            { name: 'Dubai', rooms: 150 },
            { name: 'Istanbul', rooms: 190 },
            { name: 'Toronto', rooms: 210 },
            { name: 'Rio de Janeiro', rooms: 140 },
            { name: 'Bangkok', rooms: 230 },
        ],
        placesOfInterest: [
            { name: 'Eiffel Tower', rooms: 50 },
            { name: 'Statue of Liberty', rooms: 80 },
            { name: 'Mount Fuji', rooms: 30 },
            { name: 'Sydney Opera House', rooms: 40 },
            { name: 'Sagrada Familia', rooms: 20 },
            { name: 'Great Wall of China', rooms: 60 },
            { name: 'Red Square', rooms: 25 },
            { name: 'Colosseum', rooms: 35 },
            { name: 'Giza Pyramids', rooms: 15 },
            { name: 'Gateway of India', rooms: 45 },
            { name: 'Opera House, Sydney', rooms: 55 },
            { name: 'Forbidden City', rooms: 65 },
            { name: 'Kremlin', rooms: 28 },
            { name: 'Hollywood Sign', rooms: 75 },
            { name: 'Burj Khalifa', rooms: 95 },
            { name: 'Blue Mosque', rooms: 22 },
            { name: 'CN Tower', rooms: 85 },
            { name: 'Christ the Redeemer', rooms: 32 },
            { name: 'Wat Arun', rooms: 42 },
        ],
    };

    const [activeTab, setActiveTab] = useState('regions');
    const numRows = 5;

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="bg-white w-full text-sm p-5">
            <div className="flex space-x-4 overflow-x-auto">
                <div
                    className={`tab ${activeTab === 'regions' ? 'bg-white' : 'hover:bg-gray-200'} p-2 cursor-pointer relative transition-colors rounded-t-md`}
                    onClick={() => handleTabSelect('regions')}
                >
                    <div className="tab-label text-base text-gray-800">Khu vực</div>
                    {activeTab === 'regions' && <div className="tab-indicator absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 transition-width"></div>}
                </div>
                <div
                    className={`tab ${activeTab === 'cities' ? 'bg-white' : 'hover:bg-gray-200'} p-2 cursor-pointer relative transition-colors rounded-t-md`}
                    onClick={() => handleTabSelect('cities')}
                >
                    <div className="tab-label text-base text-gray-800">Thành phố</div>
                    {activeTab === 'cities' && <div className="tab-indicator absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 transition-width"></div>}
                </div>
                <div
                    className={`tab ${activeTab === 'placesOfInterest' ? 'bg-white' : 'hover:bg-gray-200'} p-2 cursor-pointer relative transition-colors rounded-t-md`}
                    onClick={() => handleTabSelect('placesOfInterest')}
                >
                    <div className="tab-label text-base text-gray-800">Địa điểm nổi bật</div>
                    {activeTab === 'placesOfInterest' && <div className="tab-indicator absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 transition-width"></div>}
                </div>
            </div>
            <div className="tab-content border-t border-gray-300 rounded-b-md p-5 bg-white">
                {activeTab === 'regions' && (
                    <div id="regions-content">
                        <div className="flex flex-wrap">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="w-full md:w-1/5 p-2">
                                    {tabsData.regions
                                        .slice(i * numRows, i * numRows + numRows)
                                        .map((item, index) => (
                                            <div key={index} className="mb-4">
                                                <Link to="/signup" className="font-bold text-blue-600">{item.name}</Link>
                                                <div>{`${item.rooms} chỗ nghỉ`}</div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === 'cities' && (
                    <div id="cities-content">
                        <div className="flex flex-wrap">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="w-full md:w-1/5 p-2">
                                    {tabsData.cities
                                        .slice(i * numRows, i * numRows + numRows)
                                        .map((item, index) => (
                                            <div key={index} className="mb-4">
                                                <Link to="/signup" className="font-bold text-blue-600">{item.name}</Link>
                                                <div>{`${item.rooms} chỗ nghỉ`}</div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === 'placesOfInterest' && (
                    <div id="placesOfInterest-content">
                        <div className="flex flex-wrap">
                            {Array.from({ length: 5 }, (_, i) => (
                                <div key={i} className="w-full md:w-1/5 p-2">
                                    {tabsData.placesOfInterest
                                        .slice(i * numRows, i * numRows + numRows)
                                        .map((item, index) => (
                                            <div key={index} className="mb-4">
                                                <Link to="/signup" className="font-bold text-blue-600">{item.name}</Link>
                                                <div>{`${item.rooms} chỗ nghỉ`}</div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavoriteDestination;