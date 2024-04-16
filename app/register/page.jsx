"use client"
import React, { useState } from 'react';
import { registerUser } from '../../firebase-config';  // Adjust the import path as necessary

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        matricNumber: '',
        email: '',
        fullName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.matricNumber) tempErrors.matricNumber = "Matric Number is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.fullName) tempErrors.fullName = "Full Name is required";
        if (!formData.phoneNumber) tempErrors.phoneNumber = "Phone Number is required";
        if (!formData.password) tempErrors.password = "Password is required";
        if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Submit button clicked');
        if (validateForm()) {
            try {
                const { confirmPassword, ...userData } = formData;  // Exclude confirmPassword from userData
                await registerUser(userData);
                window.location.href = "/login";
            } catch (error) {
                console.error('Registration Error:', error);
                setErrors(prevErrors => ({ ...prevErrors, form: error.message }));
            }
        } else {
            console.log('Form validation failed', errors);  // Output errors to see what went wrong
        }
    };
    
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl text-center font-bold mb-4">Create an Account!</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                {Object.keys(formData).map((key, index) => (
                        <div key={index}>
                            <label className="block text-sm font-bold text-gray-700" htmlFor={key}>
                                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                            </label>
                            <input
                                className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors[key] ? 'border-red-500' : 'border-gray-300'}`}
                                id={key}
                                name={key}
                                type={key.includes("password") ? "password" : "text"}
                                placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                                onChange={handleChange}
                                value={formData[key]}
                            />
                            {errors[key] && <p className="text-red-500 text-xs italic">{errors[key]}</p>}
                        </div>
                    ))}

                    {errors.form && <p className="text-red-500 text-xs italic">{errors.form}</p>}
                    <div className="text-center">
                    <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline font-bold">
                        Register Account
                    </button>
                    </div>
                </form>
                <hr className="my-6 border-t" />
                <div className="text-center">
                    <a
                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                        href="/login"
                    >
                        Already have an account? Login!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;

