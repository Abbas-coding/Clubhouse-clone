import React from "react";
import { Link } from "react-router-dom";
import style from '../style/welcome.module.css'


export default function Welcome(){
    return(
        <div className={style.WelcomeContainer}>
            <h1>Welcome</h1>
            <div className={style.WelcomeInfo}>
                <p>
                 Hey we are working hard to get clubhouse ready for everyone! While we wrap up the finishing touches, we're adding people gradually.   
                </p>
                <p>
                Anyone can join with an invite from an existing user - or reserve your username and we'll text you if you have a friend on the app who can let you in. We are also grateful you're here and can't wait to have you join!!
                </p>
                <p>Abbas & the clubhouse team</p>
            </div>
            <div className={style.actionBtn}>
                <Link exact="true" to='/get_username' className=" primaryBtn d-flex mb-3 align-items-center">
                    Get your username
                </Link>
                <Link to='/'>
                Have an invite text? Sign In
                </Link>
            </div>
        </div>
    );
}