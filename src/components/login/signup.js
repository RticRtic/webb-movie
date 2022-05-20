import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../models/firebaseModel";
import "../../styles/login.css";

const SignUp = () => {

    let user = useSelector(state => state.user);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    useEffect(() => {
        if(user.signedIn && user.username != undefined) {
            navigate("/user/" + (user.username));
        }
    },[user])

    if(user.signedIn && user.username != "") {
        
        return (
            <div>

            </div>
        )
        
    } else {
        return (
            <div className="login_wrapper">
                <h3>Create Account</h3>
                <form className="login_form">
                    
                    <section>
                        <p>Username</p>
                        <input type={"text"} ref={usernameRef}></input>
                    </section>

                    <section>
                        <p>E-mail</p>
                        <input type={"text"} ref={emailRef}></input>
                    </section>

                    <section>
                        <p>Password</p>
                        <input type={"password"} ref={passwordRef}></input>
                    </section>

                    <button className="login_button" onClick={() => signUp(dispatch, usernameRef.current.value, emailRef.current.value, passwordRef.current.value,)}>Create Account</button>
                </form>

                <div>
                    <span className="divider_text">
                        <span>Already have an account?</span>
                    </span>
                    <button className="login_button" onClick={() => navigate("/login")}>Sign In</button>
                </div>
            </div>
        )
    }
}

export default SignUp;