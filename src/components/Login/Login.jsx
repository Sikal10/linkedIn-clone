import React, {useState} from 'react';
import "./Login.css"
import {auth} from "../../firebase";
import {useDispatch} from "react-redux";
import {login} from "../../features/userSlice";

const url = "https://www.multiplicalia.com/wp-content/uploads/2019/02/LinkedIn-Logo.png"

const Login = ({history}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const loginToApp = async (e) => {
        console.log("log in")
        e.preventDefault();
        try {
            const response = await auth.signInWithEmailAndPassword(email, password);
            const authUser = await response;
            console.log(authUser)
            dispatch(login({
                email: authUser.user.email,
                uid: authUser.user.uid,
                displayName: authUser.user.displayName,
                profileUrl: authUser.user.photoURL
            }))
        } catch (err) {
            alert(err)
        }
    }

    // const registerUser = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await auth.createUserWithEmailAndPassword(email, password);
    //         const userAuth = await response;
    //         console.log(userAuth)
    //         await userAuth.user.updateProfile({
    //             displayName: name,
    //             photoURL: profilePic
    //         });
    //         dispatch(login({
    //             email: userAuth.user.email,
    //             uid: userAuth.user.uid,
    //             displayName: userAuth.user.displayName,
    //             profileUrl: userAuth.user.photoURL
    //         }))
    //
    //
    //     } catch (err) {
    //         alert(err)
    //     }
    //     // if (!name) {
    //     //     return alert("Please enter a full name")
    //     // }
    //     // console.log("register")
    //     // auth.createUserWithEmailAndPassword(email, password).then(
    //     //     (userAuth) => {
    //     //         userAuth.user.updateProfile({
    //     //             displayName: name,
    //     //             photoURL: profilePic
    //     //         }).then(() => {
    //     //             dispatch(
    //     //                 login({
    //     //                     email: userAuth.user.email,
    //     //                     uid: userAuth.user.uid,
    //     //                     displayName: name,
    //     //                     photoUrl: profilePic
    //     //                 })
    //     //             )
    //     //         })
    //     //     }
    //     // ).catch(error => alert(error))
    // }

    const register = () => {
        history.push("/register")
    }
    return (
        <div className={"login"}>

            <img src={url} alt=""/>
            <form>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder={"Email"} type="email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder={"password"}
                       type="password"/>

                <button onClick={loginToApp}>Sign in</button>
            </form>

            <p>Not a member?
                <span className={"login__register"} onClick={register}>{" "} Register now</span>
            </p>
        </div>
    );
};

export default Login;