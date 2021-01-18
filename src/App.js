import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import {useSelector, useDispatch} from "react-redux";
import {selectUser} from "./features/userSlice";
import Login from "./components/Login/Login";
import {auth} from "./firebase";
import {logout, login} from "./features/userSlice";
import Widgets from "./components/Widgets/Widgets";

function App() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                //user is logged in
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: userAuth.displayName,
                    photoUrl: userAuth.photoURL
                }))
            } else {
                //user is logged out
                dispatch(logout());
            }
        })
    }, [dispatch])
    return (
            <div className="app">
                <Header/>

                {!user ? <Login/>  : <div className="app__body">
                    <Sidebar/>
                    <Feed/>
                    <Widgets/>
                </div>
                }
            </div>
    );
}

export default App;
