import Image from 'next/image';
import {useMoralis} from "react-moralis";

export default function Login() {
    const {authenticate} = useMoralis();

    return (
        <div className="bg-black relative">
            <h1>I am Login Screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image className="object-contain rounded-full"
                       src="https://avatars.githubusercontent.com/u/54851701?s=400&u=53eb3ce3c5f77c8da8b01580c1811b532f4120ef&v=4"
                       height={200} width={200}/>
                <button onClick={authenticate}
                        className="text-white bg-violet-500 rounded-lg p-5 font-bold animate-pulse">Login To Metaverse
                </button>
            </div>
            <div className="w-full h-screen">
                <Image
                    src="https://images.hdqwalls.com/download/future-metropolis-pn-2880x1800.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}
