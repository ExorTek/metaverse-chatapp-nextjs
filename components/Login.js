import Image from 'next/image';
import {useMoralis} from "react-moralis";

export default function Login() {
    const {authenticate} = useMoralis();

    return (
        <div className="bg-black relative">
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image className="object-contain rounded-full"
                       src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf2836cb-5893-4a6c-b156-5a89d94fc721/dcap8oj-42db6fc2-99a0-4934-bae0-54116dda7512.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmMjgzNmNiLTU4OTMtNGE2Yy1iMTU2LTVhODlkOTRmYzcyMVwvZGNhcDhvai00MmRiNmZjMi05OWEwLTQ5MzQtYmFlMC01NDExNmRkYTc1MTIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MenjECatJfuVUD3IfEpWVbwMKCV0w0rXZQMUEF_7BNU"
                       height={200} width={200}/>
                <button onClick={authenticate}
                        className="text-white bg-violet-500 rounded-lg p-5 font-bold animate-pulse">Login To MetaMask
                </button>
            </div>
            <div className="w-full h-screen">
                <Image
                    src="https://images.hdqwalls.com/download/futuristic-city-dark-evening-rain-4k-o8-3840x2400.jpg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
}
