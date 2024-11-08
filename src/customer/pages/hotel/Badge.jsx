import * as React from 'react';

export default function Badges({ hotelFacilites }) {
    return (
        <div className="badge">
            {hotelFacilites?.map((facility, index) => (
                <div className="facility" key={index}>
                    <span>{facility.label}</span>
                </div>))}
        </div>
    );
}