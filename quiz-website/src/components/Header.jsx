import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 

export default function Header() {
    const [pageState, setPageState] = useState("Sign in")
    const location = useLocation();
    const navigate = useNavigate();

    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if(user)
            {
                setPageState("Profile");
            }else
            {
                setPageState("Sign In");
            }
        })
    }, [auth])

    function pathMatchRoute(route)
    {
        if (route === location.pathname)
        {
            return true;
        }
    }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img src="https://raw.githubusercontent.com/moonbl3da/react-tailwindCSS-quiz-website/master/src/icon.png" alt="logo" className='h-12 cursor-pointer' onClick={() => navigate("/")}/>
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 border-b-[3px] border-b-transparent 
                    ${pathMatchRoute("/") && "text-black border-b-[#8c5000]"}`} 
                    onClick={() => navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 border-b-[3px] border-b-transparent 
                    ${pathMatchRoute("/quiz-themes") && "text-black border-b-[#8c5000]"}`} 
                    onClick={() => navigate("/quiz-themes")}>Quiz themes</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-600 border-b-[3px] border-b-transparent 
                    ${ (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && 
                    "text-black border-b-[#8c5000]"}`} 
                    onClick={() => navigate("/profile")}>{pageState}</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
