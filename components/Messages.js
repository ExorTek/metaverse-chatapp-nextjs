import {useRef} from 'react';
import {ByMoralis, useMoralis, useMoralisQuery} from 'react-moralis';
import SendMessage from "./SendMessage";
import Message from "./Message";

function Messages() {
    const MINS_DURATION = 15;
    const {user} = useMoralis();
    const endOfMessageRef = useRef(null);
    const {data, loading, error} = useMoralisQuery(
        'Messages',
        (query) =>
            query
                .ascending('createdAt')
                .greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION))
        , [],
        {live: true}
    );
    return (
        <div className="pb-56 shadow-2xl">
            <div className="space-y-10 p-4 ">
                {data.map(message => (
                    <Message key={message.id} message={message}/>
                ))}
            </div>
            <div className="flex justify-center">
                <SendMessage endOfMessageRef={endOfMessageRef}/>
                {/*<div className="my-5">*/}
                {/*    <ByMoralis variant={"dark"} style={{marginLeft: "auto", marginRight: "auto"}}/>*/}
                {/*</div>*/}
            </div>
            <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
                <p>
                    You're up to date {user.getUsername()}!
                </p>
            </div>

        </div>
    );
}

export default Messages;
