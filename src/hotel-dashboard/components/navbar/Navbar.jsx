import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import HeadlessTippy from '@tippyjs/react/headless';
// AuthContext and DarkModeContext are not used in this component, but they are used in other components, i'll update soon
// Connect API to server to get user data: update sô
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
        <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{ backgroundColor, color: "#fff" }}>
            {getInitials(name)}
        </div>
    );

    return (
        <div className="h-16 border-b border-gray-300 flex items-center text-sm text-gray-700">
            <div className="w-full px-5 flex items-center justify-between">
                <div className="flex items-center border border-gray-300 p-1">
                    <input type="text" placeholder="Search..." className="border-none outline-none bg-transparent text-xs" />
                    <SearchOutlinedIcon />
                </div>
                <div className="flex items-center">
                    <div className="flex items-center mr-5">
                        <LanguageOutlinedIcon className="text-lg" />
                        <span className="ml-2">English</span>
                    </div>
                    <div className="flex items-center mr-5">
                        <DarkModeOutlinedIcon className="text-lg cursor-pointer" />
                    </div>
                    <div className="flex items-center mr-5">
                        <FullscreenExitOutlinedIcon className="text-lg cursor-pointer" />
                    </div>
                    <div className="flex items-center mr-5">
                        <NotificationsNoneOutlinedIcon className="text-lg cursor-pointer" />
                    </div>
                    <div className="flex items-center mr-5">
                        <ChatBubbleOutlineOutlinedIcon className="text-lg cursor-pointer" />
                    </div>
                    <div className="flex items-center mr-5">
                        <ListOutlinedIcon className="text-lg cursor-pointer" />
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