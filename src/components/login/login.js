import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../models/firebaseModel";
import '../../styles/login.css';


const Login = () => {

    let user = useSelector(state => state.user);
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        if(user.signedIn && user.username != undefined) {
            navigate("/user/" + (user.username));
        }
    },[user])

    if(user.signedIn) {
        return (
            <div>

            </div>
        )
    } else {
        return (
            <div className="login_wrapper">
                <h3>Sign In</h3>
                <form className="login_form">
                    <section>
                        <p>E-mail</p>
                        <input type={"text"} ref={emailRef}></input>
                    </section>

                    <section>
                        <p>Password</p>
                        <input type={"password"} ref={passwordRef}></input>
                    </section>

                    <button className="login_button" onClick={() => signIn(dispatch, emailRef.current.value, passwordRef.current.value)}>Sign In</button>
                </form>

                <div>
                    <span className="divider_text">
                        <span>Don't have an account?</span>
                    </span>
                    <button className="login_button" onClick={() => navigate("/register")}>Create Account</button>
                </div>
            </div>
        )

}
}

export default Login;