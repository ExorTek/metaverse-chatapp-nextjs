import React from 'react';
import {useMoralis} from "react-moralis";

function ChangeUsername() {
    const {setUserData, isUserUpdating, userError, user, logout} = useMoralis();
    const setUsername = () => {
        const username = prompt(`Enter your new Username (Current: ${user.getUsername()})`);
        if (!username) return;
        setUserData({
            username,
        });
    }
    return (
        <div className="text-sm absolute top-5 right-5">
            <button disabled={isUserUpdating} onClick={setUsername}
                    className="hover:text-rose-500 mr-2">
                Change Username
            </button>
            <button onClick={logout}
                    className="hover:text-rose-500">
                Logout
            </button>
        </div>
    );
}

export default ChangeUsername;
