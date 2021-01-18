import React from 'react';
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className={"widgets__article "}>
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className={"widgets"}>
            <div className="widgets__header">
                <h2>News</h2>
                <InfoIcon />
            </div>

            {newsArticle("#COVIDSecondwave", "Health news - 829 readers")}
            {newsArticle("Sikal is here", "Top news - 10000 readers")}
            {newsArticle("Tesla hits new heights", "Cars & auto - 10000 readers")}
            {newsArticle("Musk beats Jeff Bezos", "Top news - 2000 readers")}
            {newsArticle("NextJS", "DevCommunity- 800 readers")}
        </div>
    );
};

export default Widgets;