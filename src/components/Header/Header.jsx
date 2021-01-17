import React from 'react';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <div className={"header"}>
            <div className="header__left">
                <img src="https://lawyermeltdown.com/wp-content/uploads/2014/03/Official-LinkedIn-InBug-2CRev.png" alt=""/>

                <div className="header__search">
                    <SearchIcon/>
                    <input placeholder={"Search"} type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title={"Home"}/>
                <HeaderOptions Icon={SupervisorAccountIcon} title={"My Network"}/>
                <HeaderOptions Icon={BusinessCenterIcon} title={"Jobs"} />
                <HeaderOptions Icon={ChatIcon} title={"Messaging"} />
                <HeaderOptions Icon={NotificationsIcon} title={"Notifications"}/>
                <HeaderOptions avatar={"https://lh3.googleusercontent.com/-mBc4jtxCklg/YABQ0dlLcUI/AAAAAAAAAYI/2pn1wJb7WCAX7Frxc6BRVEOG6TlfZRmFgCEwYBhgLKtQDAL1Ocqz4yuF4MX8h7A4ncTdkVo8IBqkMixiqL6xmrPv65v23uqa_v1nG7OiGvisjN-MKkoHLLYVT9USDH94rxfPexzvJcDrNG7QBSpnBOKi9kYMuUmFs1ylWYJXS6BBRoKRkbnSgrdsQKQmQ0slHeQroiZxyQw6A9HRa_UOi_zSUFZ2RSYSTEkquf7J71M4EdgTdEjQ1BTr6lJJ-Z8-QpJCDvA88zNytO0bzirTeytQVIWLmTjZQTKZ0jmuUHQ7rtLwipo3EQzUu7vpfBwEiZw0xcFhz9FYG_9P40ocGluCOYJhcBVZywQe6VPPEgIU0_uxU4ju0jvbBdyeDDrRVMRmys0Xii4Js02LgUmtYGuFlKcfolow2DR05BgZdj4fNTEsWIORaTkomyf9ZwlywM-Ev-TYdKKkVVETHdMwsxX3MXxkKKSGJG5UB4kxu_87QHmsWIz8eQtfrFNJmyN93k17OsWKdPPgiuVt9hUqUcSRm9ZmouZ1G26OrzrAhk2AJDACRIdkvpm2iMbqfVWGO08Rh_2BJngcrS-D9VlgXojDgBb6KNgYExuFLHG9OSBdwW7K6CgI5KhBu0kTcVLbakkYer5-o7nstOBVde7flJIKWImHLMIe6i4AG/w139-h140-p/2020_11_22_12_51_IMG_9184.JPG"} title={"Me"} />
            </div>
        </div>
    );
};

export default Header;