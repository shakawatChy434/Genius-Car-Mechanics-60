import React from 'react';
import './Login.css'
import { FaRegSmileWink } from "react-icons/fa";
import googleIcon from '../../../Images/icon/google.png'
import facebookIcon from '../../../Images/icon/facebook.png'
import githubIcon from '../../../Images/icon/github.png'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { singInUsingGoogle } = useAuth()
    return (
        <div>
            <h2>Log-In </h2>
            <small className="icon-heading"><FaRegSmileWink></FaRegSmileWink> Make Your Login Esaier With Us.<FaRegSmileWink></FaRegSmileWink> </small>
            <div className="login-details ">
                <div className="icon me-5 ">
                    <img onClick={singInUsingGoogle} src={googleIcon} alt="" />
                </div>
                <div className="icon me-5 ">
                    <img src={facebookIcon} alt="" />
                </div>
                <div className="icon me-5 ">
                    <img src={githubIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;