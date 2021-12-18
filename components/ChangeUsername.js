import React from 'react';
import {useMoralis} from "react-moralis";

function ChangeUsername() {
    const {setUserData, isUserUpdating, userError, user} = useMoralis();
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
                    className="hover:text-rose-500 hover:border-2  p-2 border-rose-500 rounded-md">
                Change Username
            </button>
        </div>
    );
}

export default ChangeUsername;
