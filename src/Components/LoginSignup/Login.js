import React, {Component} from 'react'
import '../custom.scss';
import './Login.css';

import user_icon from '../Assets/user_icon.png'
import password_icon from '../Assets/password_icon.png'

export default class Nav extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="text">Sign In</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt=""/>
                        <input type="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="forgot-password">Lost Password?</div>
                <div className="submit-container">
                    <div className="submit">Login</div>
                </div>
            </div>
        )
    }
}
