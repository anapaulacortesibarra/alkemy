import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { AuthContext } from "../../context/authContext";
import AuthModal from "../Auth";
import "./style.css";

function Profile() {
    const { user, logOut } = useContext(AuthContext);

    if (!user) {
        return <AuthModal />;
    }

    return (
        <div className="profile-container">
            <h1 className="user-name">{user}</h1>
            <Button variant="primary" onClick={logOut}>
                Sign Out
            </Button>
        </div>
    );
}

export default Profile;
