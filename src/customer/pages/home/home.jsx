import React from 'react';
import PropertyType from './property-type/PropertyType';
import styled from 'styled-components';
import Trending from './trending/Trending';
import Explore from './explore/Explore';
const HomeContainer = styled.div`
    width: 100%;
    max-width: 1100px;  /* Updated max width to 1100px */
    margin: 0 auto;    /* Center the container */
    padding: 16px;     /* Add some padding for spacing */

    @media (max-width: 46.1875em) {
        max-width: 350px;  /* Adjust max width for smaller screens */
    }
`;

const Title = styled.h1`
    margin: 64px 0 12px;
    font-weight: 700;
    font-size: 24px;
    text-align: left; /* Aligns the title to the left */
`;

const Description = styled.h3`
    margin-bottom: 16px;
    color: #474747;
    font-size: 16px;
    font-weight: 400;
    text-align: left; /* Aligns the description to the left */
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column; /* Stack items vertically */
`;

const Homepage = () => {
    return (
        <HomeContainer>
            <ContentContainer>
                <Title>Tìm theo loại chỗ nghỉ ở Hà Nội</Title>
                <PropertyType />
            </ContentContainer>
            <ContentContainer>
                <Title>Điểm đến đang thịnh hành</Title>
                <Description>Du khách tìm kiếm về Việt Nam cũng đặt chỗ ở những nơi này</Description>
                <Trending />
            </ContentContainer>
        </HomeContainer>
    );
}

export default Homepage;
