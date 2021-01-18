import React from 'react';
import "./Sidebar.css"
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from '@material-ui/icons/Group';
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";

const Sidebar = () => {
    const recentItem = (topic) => (
        <div className={"sidebar__recentItem"}>
            <span className={"sidebar__hash"}>{GroupIcon && <GroupIcon />}</span>
            <p>{topic}</p>
        </div>
    );

    const user = useSelector(selectUser);

    return (
        <div className={"sidebar"}>
            <div className="sidebar__top">
                <img src="https://static-exp1.licdn.com/sc/h/cpemy7gsm8bzfb5nnbbnswfdm" alt=""/>
                <Avatar src={user.photoUrl} className={"sidebar__avatar"}>{user?.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,234</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,567</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>recent</p>
                {recentItem("reactJs")}
                {recentItem("Programming")}
                {recentItem("developer")}
                {recentItem("javascript")}
                {recentItem("design")}
            </div>
        </div>
    );
}

export default Sidebar;