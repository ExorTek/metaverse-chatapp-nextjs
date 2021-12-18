import {useMoralis} from 'react-moralis';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import ChangeUsername from "../components/ChangeUsername";

function Header() {
    const {user} = useMoralis();
    return (
        <div className="sticky top-0 p-5 z-50 text-rose-400 shadow-2xl border-b-2 border-pink-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image className="object-cover rounded-full"
                           src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf2836cb-5893-4a6c-b156-5a89d94fc721/dcap8oj-42db6fc2-99a0-4934-bae0-54116dda7512.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmMjgzNmNiLTU4OTMtNGE2Yy1iMTU2LTVhODlkOTRmYzcyMVwvZGNhcDhvai00MmRiNmZjMi05OWEwLTQ5MzQtYmFlMC01NDExNmRkYTc1MTIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MenjECatJfuVUD3IfEpWVbwMKCV0w0rXZQMUEF_7BNU"
                           layout={"fill"}/>
                </div>

                <div className="col-span-4 text-left lg:text-center">

                    <div className="relative h-48 w-48 lg:mx-auto border-pink-400 border-4 rounded-full">
                        <Avatar logoutOnPress/>
                    </div>
                    <h1 className="text-2xl ">Welcome to the ExorTek Metaverse Chat!</h1>
                    <h2 className="text-5xl  font-bold truncate">{user.get('username')}</h2>
                    <ChangeUsername/>
                </div>
            </div>
        </div>
    );
}

export default Header;
