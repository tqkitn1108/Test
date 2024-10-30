import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function FavoriteDestination() {
    const tabsData = {
        regions: [
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


};

export default FavoriteDestination;