"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center relative">
                {/* Logo and title */}
                <Link legacyBehavior href="/">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GVU PastQuestions</span>
                    </a>
                </Link>
                
                {/* Mobile menu button */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="md:hidden inline-flex items-center p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? <FiX className="text-white text-2xl" /> : <FiMenu className="text-white text-2xl" />}
                </button>

                {/* Conditional rendering for mobile menu */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center md:space-x-8 bg-white dark:bg-gray-900 md:bg-transparent absolute md:relative top-full inset-x-0 z-20 shadow md:shadow-none`}>
                    {/* Navigation links */}
                    <Link legacyBehavior href="/about"><a className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 px-4 py-2 block text-center">About</a></Link>
                    <Link legacyBehavior href="/questions"><a className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 px-4 py-2 block text-center">Past Questions</a></Link>
                    <Link legacyBehavior href="/questions"><a className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 px-4 py-2 block text-center">Learning Materials</a></Link>
                    <Link legacyBehavior href="/contact"><a className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 px-4 py-2 block text-center">Contact</a></Link>

                    {/* CTAs for Login and Signup */}
                    <div className="px-4 py-2 flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
                        <Link legacyBehavior href="/login"><a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</a></Link>
                        <Link legacyBehavior href="/register"><a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</a></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
