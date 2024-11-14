import React, { useState, useEffect } from "react";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useParams } from "react-router-dom";

const Sidebar = ({ hideSideBar }) => {
    const { hotelId } = useParams();
    const [hotelImg, setHotelImg] = useState("");
    const [hotelName, setHotelName] = useState("");

    const handleLogoutClick = () => {
        // Implement logout functionality here
    };

    useEffect(() => {
        async function loadData() {
            try {
                const response = await fetch(`https://booking-app-backend-2mxz.onrender.com/api/v1/hotels/${hotelId}`);
                setHotelImg(response.data.photos?.[0])
                setHotelName(response.data.name);
            } catch (error) {
                console.log(error);
            }
        }
        if (hotelId) {
            loadData();
        }
    }, []);
    return (
        <div className={`sidebar ${hideSideBar ? "hidden" : ""}`}>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <SettingsSystemDaydreamOutlinedIcon className="sidebarIcon" />
                            System Health
                        </li>
                        <li className="sidebarListItem">
                            <PsychologyOutlinedIcon className="sidebarIcon" />
                            Logs
                        </li>
                        <li className="sidebarListItem">
                            <AccountCircleOutlinedIcon className="sidebarIcon" />
                            Profile
                        </li>
                        <li className="sidebarListItem" onClick={handleLogoutClick}>
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;