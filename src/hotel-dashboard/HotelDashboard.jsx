import React from 'react'
import { Title } from '@mui/icons-material'
import Chart from './components/chart/Chart'
import Navbar from './components/navbar/Navbar'
import styled from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 16px;              
`;
export default function HotelDashboard() {
    return (
        <div>
            <ContentContainer>
                <Title>Chart Comp</Title>
                <Chart aspect={16 / 9} title="Total Revenue" />
            </ContentContainer>
            <ContentContainer>
                <Title>Navbar Comp</Title>
                <Navbar />
            </ContentContainer>
            <ContentContainer>
                <Title>Sidebar Comp</Title>
                <Sidebar />
            </ContentContainer>
        </div>
    )
}
