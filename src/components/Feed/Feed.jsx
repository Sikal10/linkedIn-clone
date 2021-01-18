import React, {useEffect, useState} from 'react';
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./InputOption/InputOption";
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from "../Post/Post";
import {db} from "../../firebase";
import firebase from "firebase"
import {useSelector} from "react-redux";
import {selectUser} from "../../features/userSlice";
import FlipMove from 'react-flip-move';

const Feed = () => {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("")

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
        <div className={"feed"}>
            <div className={"feed__inputContainer"}>
                <div className={"feed__input"}>
                    <CreateIcon/>
                    <form>
                        <input onChange={handleChange} value={input} placeholder={"Start a post"}/>
                        <button disabled={!input} onClick={sendPost} type={"submit"}>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption title={"Photo"} Icon={PhotoIcon} color={"#70B5F9"}/>
                    <InputOption title={"Video"} Icon={YouTubeIcon} color={"#7FC15E"}/>
                    <InputOption title={"Goal"} Icon={EventNoteIcon} color={"#70B5F9"}/>
                    <InputOption title={"Write Article"} Icon={CalendarViewDayIcon} color={"#E7A33E"}/>
                </div>
            </div>

            <FlipMove>
                {posts.map(({id, data: {name, message, photoUrl, description}}) => (
                    <Post name={name} description={description} photoUrl={photoUrl} message={message} key={id} />
                ))}
            </FlipMove>

        </div>
    );
};

export default Feed;