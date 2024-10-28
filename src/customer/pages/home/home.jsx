import React from 'react';
import PropertyType from './property-type/PropertyType';
import styled from 'styled-components';
import Trending from './trending/Trending';
import Explore from './explore/Explore';
import TripPlanner from './trip-planner/trip-planner';
import FeaturedHome from './feature-home/FeatureHome';
const HomeContainer = styled.div`
    width: 100%;
    max-width: 1100px; 
    margin: 0 auto;     
    padding: 16px;     

    @media (max-width: 740px) {
        max-width: 350px;  
    }
`;

const Title = styled.h1`
    margin: 64px 0 12px;   
    font-weight: 700;
    font-size: 24px;
    text-align: left;      
`;

const Description = styled.h3`
    margin-bottom: 16px;
    color: #474747;
    font-size: 16px;
    font-weight: 400;
    text-align: left;       
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 16px;              
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
            <ContentContainer>
                <Title className="home-title">Khám phá Việt Nam</Title>
                <Description className="home-describe">Các điểm đến phổ biến này có nhiều điều chờ đón bạn</Description>
                <Explore />
            </ContentContainer>
            <ContentContainer>
                <Title className="home-title">Lên kế hoạch dễ dàng và nhanh chóng</Title>
                <Description className="home-describe">Khám phá các điểm đến hàng đầu theo cách bạn thích ở Việt Nam</Description>
                <TripPlanner />
            </ContentContainer>
            <ContentContainer>
                <Title className="home-title">Nhà ở mà khách yêu thích</Title>
                <Description className="home-describe">Được lựa chọn bởi các khách hàng đã ghé qua</Description>
                <FeaturedHome />
            </ContentContainer>
        </HomeContainer>
    );
}

export default Homepage;
