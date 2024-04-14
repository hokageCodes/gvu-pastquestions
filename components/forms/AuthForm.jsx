"use client";

import React, { useState } from 'react';
import RegisterForm from '../../app/register/page'
import LoginForm from '../../app/login/page'

const AuthFormsContainer = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="font-mono bg-gray-400">
            <div className="container mx-auto">
                <div className="flex justify-center items-center h-screen px-6">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{ backgroundImage: "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')" }}
                        ></div>
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            {showLogin ? <LoginForm /> : <RegisterForm />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthFormsContainer;
