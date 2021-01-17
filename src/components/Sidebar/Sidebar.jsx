import React from 'react';
import "./Sidebar.css"
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from '@material-ui/icons/Group';

const Sidebar = () => {
    const recentItem = (topic) => (
        <div className={"sidebar__recentItem"}>
            <span className={"sidebar__hash"}>{GroupIcon && <GroupIcon />}</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className={"sidebar"}>
            <div className="sidebar__top">
                <img src="https://static-exp1.licdn.com/sc/h/cpemy7gsm8bzfb5nnbbnswfdm" alt=""/>
                <Avatar className={"sidebar__avatar"}/>
                <h2>Sikal Sikal</h2>
                <h4>Sikal@gmail.com</h4>
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