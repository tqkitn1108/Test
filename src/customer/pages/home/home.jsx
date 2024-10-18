import React from 'react';
import PropertyType from './property-type/PropertyType';
import styled from 'styled-components';

const HomeContainer = styled.div`
    width: 100%;
    
    @media (min-width: 46.1875em) and (max-width: 68.74em) {
        max-width: 700px;
    }

    @media (max-width: 46.1875em) {
        max-width: 350px;
    }
`;
const Homepage = () => {
    return (
        <div>
            <HomeContainer>
                <h1 className="home-title left">Tìm theo loại chỗ nghỉ ở Hà Nội</h1>
                <PropertyType />
            </HomeContainer>
        </div>
    );
}

export default Homepage;