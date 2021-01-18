import React from 'react';
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch} from "react-redux";
import {logout} from "../../features/userSlice";
import {auth} from "../../firebase";

const Header = () => {
    const dispatch = useDispatch();

    const logoutUser = async () => {
        dispatch(logout());
        await auth.signOut()
    }
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
                <HeaderOptions onClick={logoutUser} avatar title={"Me"} />
            </div>
        </div>
    );
};

export default Header;