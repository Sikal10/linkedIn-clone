import React, {forwardRef} from 'react';
import "./Post.css"
import Avatar from "@material-ui/core/Avatar";
import InputOption from "../Feed/InputOption/InputOption";
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(({ name, description, photoUrl, message}, ref) => {
    return (
        <div ref={ref} className={"post"}>
            <div className="post__header">
                <Avatar src={photoUrl}/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpOutlinedIcon} title={"like"} color={"gray"} />
                <InputOption Icon={ChatOutlinedIcon} title={"comment"} color={"gray"} />
                <InputOption Icon={ShareOutlinedIcon} title={"share"} color={"gray"} />
                <InputOption Icon={SendOutlinedIcon} title={"send"} color={"gray"} />
            </div>
        </div>
    );
});

export default Post;