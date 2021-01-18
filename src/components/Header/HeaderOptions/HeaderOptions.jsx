import React from 'react';
import "./HeaderOptions.css"
import Avatar from "@material-ui/core/Avatar";
import {useSelector} from "react-redux";
import {selectUser} from "../../../features/userSlice";

const HeaderOptions = ({avatar, title, Icon, onClick}) => {
    const user = useSelector(selectUser);
    return (
        <div className={"headerOptions"}>
            {Icon && <Icon className={"headerOptions__icon"}/>}
            {avatar && <Avatar src={user?.photoUrl} onClick={onClick} className={"headerOptions__icon"}>{user?.email[0]}</Avatar>}
            <h3 className={"headerOptions__title"}>{title}</h3>
        </div>
    );
};

export default HeaderOptions;