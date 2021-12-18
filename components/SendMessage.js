import {ByMoralis, useMoralis} from "react-moralis";
import {useState} from "react";

function SendMessage({endOfMessageRef}) {
    const {user, Moralis} = useMoralis();
    const [message, setMessage] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();


        if (!message) return;
        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();
        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress'),

        }).then((message) => {

            }, (error) => {
                console.log(error);
            }
        );
        endOfMessageRef.current.scrollIntoView({behavior: 'smooth'});
        setMessage("");
    };
    return (
        <form className="flex fixed bottom-10 bg-pink-800  w-11/12 px-6 py-4 max-w-2xl shadow-2xl rounded-full">
            <input className="flex-grow outline-none bg-transparent text-white placeholder-gray-300 pr-5"
                   placeholder={`You're up to date ${user.getUsername()}!`} type="text" value={message}
                   onChange={(e) => setMessage(e.target.value)}/>
            <button type="submit" onClick={sendMessage} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
            </button>

        </form>

    );
}

export default SendMessage;
