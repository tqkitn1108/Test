import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlinedIcon
                        className="text-crimson bg-[rgba(255,0,0,0.2)] p-1 rounded"
                    />
                ),
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartOutlinedIcon
                        className="text-goldenrod bg-[rgba(218,165,32,0.2)] p-1 rounded"
                    />
                ),
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon
                        className="text-green bg-[rgba(0,128,0,0.2)] p-1 rounded"
                    />
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className="text-purple bg-[rgba(128,0,128,0.2)] p-1 rounded"
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className="flex justify-between flex-1 p-2 shadow-lg rounded-lg h-24">
            <div className="flex flex-col justify-between">
                <span className="font-bold text-gray-600 text-sm">{data.title}</span>
                <span className="text-2xl font-light">{data.isMoney && "$"} {amount}</span>
                <span className="text-xs border-b border-gray-400">{data.link}</span>
            </div>
            <div className="flex flex-col justify-between items-end">
                <div className={`flex items-center text-sm ${diff > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;