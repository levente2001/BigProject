import { getAuth } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Navigate, useAsyncError, useNavigate } from 'react-router-dom';


export default function Profile()
{
    const auth = getAuth();
    const  navigate = useNavigate();
    const[changeDetail, setChangeDetail] = useState(false);
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,

    });

    const {name,email} = formData
    function onLogout()
    {
        auth.signOut()
        navigate("/");
    }
    return (
        <>
            <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
                <h1 className='text-3xl text-center mt-8 font-bold'>My Profile</h1>
                <div className='w-full md:w-[50%] mt-6 px-3'>
                    <form>
                        {/*Name Input*/}
                        <input type="text" id="name" value={name} disabled className='w-full px-4 py-2 mb-6 text-xl text-gray-600 
                        bg-white border border-gray-300 rounded transition ease-in-out'/>
                         {/*Email Input*/}
                         <input type="email" id="email" value={email} disabled className='w-full px-4 py-2 mb-6 text-xl text-gray-600 
                        bg-white border border-gray-300 rounded transition ease-in-out'/>   

                        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'> 
                            <p className='flex  items-center text-[#4F311C] '>Do you want to change your name?
                                <span 
                                    onClick={() => setChangeDetail((prevState) => !prevState )} 
                                        className='text-red-500 hover:text-red-800 transition ease-in-out duration-200 ml-2 
                                        cursor-pointer'>
                                    {changeDetail ? "Apply changes" : "Edit"}
                                </span>
                            </p>
                            <p onClick={onLogout    } className='text-[#087CA7] hover:text-blue-900 transi ease-in-out duration-200 cursor-pointer'>
                                Sign out
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}