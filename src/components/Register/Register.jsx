import React, {useState} from 'react';
import "./Register.css";
import {auth} from "../../firebase";
import {useDispatch} from "react-redux";
import {login} from "../../features/userSlice";

const url = "https://www.multiplicalia.com/wp-content/uploads/2019/02/LinkedIn-Logo.png"

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const dispatch = useDispatch();

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const response = await auth.createUserWithEmailAndPassword(email, password);
            const userAuth = await response;
            await userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            });
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))

        } catch (err) {
            alert(err)
        }

    }

    return (
        <div className={"register"}>
            <img src={url} alt=""/>
            <form>
                <input placeholder={"Full name is required"} value={name} onChange={e => setName(e.target.value)}/>
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder={"Profile pic URL (optional)"}/>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder={"Email"} type="email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder={"password"} type="password"/>

                <button onClick={registerUser}>Register</button>
            </form>

        </div>
    );
};

export default Register;