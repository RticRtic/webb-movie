
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {

    let user = useSelector(state => state.user);
    let navigate = useNavigate();


    useEffect(() => {
        if(user.signedIn && user.username != undefined) {
            navigate("/user/" + (user.username));
        } else {
            navigate("/login")
        }
    },[user])

    if(user.signedIn) {
        return (
            <Fragment>
                <div className="profile_header">
                    <div>
                        <i className="profile_user_icon">
                            {user.username[0].toUpperCase()}
                        </i>
                        <h3>
                            {user.username}
                        </h3>
                    </div>
                </div>
                <div className="profile_info">

                </div>
            </Fragment>
            
        )
    } 
    
}

export default UserProfile;