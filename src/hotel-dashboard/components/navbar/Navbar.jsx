import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import HeadlessTippy from '@tippyjs/react/headless';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [userFullName, setUserFullName] = useState(user?.userFullName);

    const getInitials = (name) => {
        if (!name) return '';
        const firstWord = name.split(' ')[0];
        return firstWord ? firstWord[0].toUpperCase() : '';
    };

    const getRandomColor = () => {
        const predefinedColors = ["#b16e4b", "#f24444", "#f39c12", "#1abc9c", "#f35ea3"];
        const randomColorIndex = Math.floor(Math.random() * predefinedColors.length);
        return predefinedColors[randomColorIndex];
    };

    const avatarBackgroundColor = getRandomColor();

    const renderAvatar = (name, backgroundColor) => (
        <div className="nav-user-img" style={{ backgroundColor, color: "#fff" }}>
            {getInitials(name)}
        </div>
    );

    return (
        <div className="business-navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <HeadlessTippy
                        interactive
                        render={attrs => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <button onClick={() => { /* handle logout */ }}>Logout</button>
                            </div>
                        )}
                    >
                        {renderAvatar(userFullName, avatarBackgroundColor)}
                    </HeadlessTippy>
                </div>
            </div>
        </div>
    );
};

export default Navbar;