import React, { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { AuthContext } from "../../context/authContext";
import AuthModal from "../../view/auth";

function Profile() {
    const { user, logOut } = useContext(AuthContext);

    if (!user) {
        return <AuthModal />;
    }

    return (
        <div>
            <h1>{user}</h1>
            <Button variant="primary" onClick={logOut}>
                Sign Out
            </Button>
        </div>
    );
}

export default Profile;
