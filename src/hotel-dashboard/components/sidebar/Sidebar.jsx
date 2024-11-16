import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useAuth } from "../../../context/AuthContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import api from "../../../api/AxiosConfig";

const Sidebar = ({ hideSideBar }) => {
    const { hotelId } = useParams();
    const [hotelImg, setHotelImg] = useState("");
    const [hotelName, setHotelName] = useState("");
    const authContext = useAuth();

    const handleLogoutClick = () => {
        authContext.handleLogout();
    };

    useEffect(() => {
        async function loadData() {
            try {
                // const response = await api.get(`/business/hotels/${hotelId}`);
                // setHotelImg(response.data.photos?.[0]);
                // setHotelName(response.data.name);
            } catch (error) {
                console.error("Error loading hotel data", error);
            }
        }
        loadData();
    }, [hotelId]);

    return (
        <div className={`sidebar ${hideSideBar ? "hidden" : ""}`}>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <DashboardIcon className="sidebarIcon" />
                            Dashboard
                        </li>
                        <li className="sidebarListItem">
                            <PersonOutlineIcon className="sidebarIcon" />
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <LocalShippingIcon className="sidebarIcon" />
                            Delivery
                        </li>
                        <li className="sidebarListItem">
                            <CreditCardIcon className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <StoreIcon className="sidebarIcon" />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <InsertChartIcon className="sidebarIcon" />
                            Reports
                        </li>
                        <li className="sidebarListItem">
                            <SettingsApplicationsIcon className="sidebarIcon" />
                            Settings
                        </li>
                        <li className="sidebarListItem">
                            <NotificationsNoneIcon className="sidebarIcon" />
                            Notifications
                        </li>
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
                            <ExitToAppIcon className="sidebarIcon" />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;