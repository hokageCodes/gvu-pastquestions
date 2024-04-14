"use client"

import React, { useState } from 'react';

const LoginForm = ({ changeView }) => {
    const [loginData, setLoginData] = useState({
        identifier: '',  // This can be email or matric number
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!loginData.identifier) tempErrors.identifier = "Email or Matric Number is required";
        if (!loginData.password) tempErrors.password = "Password is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('Login Data', loginData);
            // Typically handle the server submission here
            changeView();  // Simulate successful login, change view or redirect as necessary
        } else {
            console.log('Errors', errors);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl text-center font-bold mb-4">Welcome Back!</h3>
                <p className="text-center text-gray-600 mb-6">Log in to access your account and continue your learning journey.</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="identifier">
                            Email or Matric Number
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="identifier"
                            name="identifier"
                            type="text"
                            placeholder="Email or Matric Number"
                            onChange={handleChange}
                            value={loginData.identifier}
                        />
                        {errors.identifier && <p className="text-red-500 text-xs italic">{errors.identifier}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={loginData.password}
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                    </div>
                    <div className="text-center">
                        <button
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline font-bold"
                            type="submit"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                <hr className="my-6 border-t" />
                <div className="text-center">
                    <a
                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                        href="/register"
                        onClick={() => changeView()}  // Change this to actually navigate or trigger view change
                    >
                        Don&#39;t have an account? Register!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
