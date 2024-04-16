"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext'; // Adjust the path as needed
import Image from 'next/image';
import Logo from '../../public/assets/logo.jpg';

export default function Navbar() {
    const { currentUser, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLogout = async () => {
        try {
            await logout();
            closeMenu();
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <nav className="bg-white border-gray-200 px-4 py-4 dark:bg-gray-900">
            <div className="container mx-auto flex justify-between items-center relative">
                <Link legacyBehavior href="/">
                    <a className="flex items-center">
                        <Image src={Logo} alt="GVU Past Questions Logo" width={70} height={70} className="rounded-full" />
                        <span className="ml-3 text-xl font-semibold whitespace-nowrap dark:text-white">GVU PastQuestions</span>
                    </a>
                </Link>
                <button onClick={toggleMenu} className="bg-white md:hidden inline-flex items-center p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                </button>

                <div ref={menuRef} className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center justify-center md:flex md:flex-row md:items-center md:space-x-8 absolute md:relative top-full inset-x-0 z-20 shadow md:shadow-none bg-white dark:bg-gray-900 md:bg-transparent p-4 md:p-0`}>
    <Link legacyBehavior href="/about">
        <a className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 px-4 py-2 block text-center w-1/2 mx-auto" onClick={closeMenu}>About</a>
    </Link>
    <Link legacyBehavior href="/questions">
        <a className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 px-4 py-2 block text-center w-1/2 mx-auto" onClick={closeMenu}>Past Questions</a>
    </Link>
    <Link legacyBehavior href="/cgpa-calculator">
        <a className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 px-4 py-2 block text-center w-1/2 mx-auto" onClick={closeMenu}>CGPA calculator</a>
    </Link>
    <Link legacyBehavior href="/contact">
        <a className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 px-4 py-2 block text-center w-1/2 mx-auto" onClick={closeMenu}>Contact</a>
    </Link>
    {currentUser ? (
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 w-1/2 mx-auto dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-600">Logout</button>
    ) : (
        <>
            <Link legacyBehavior href="/login">
                <a className="bg-blue-700 hover:bg-blue-800 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 w-1/2 mx-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-center mb-4" onClick={closeMenu}>Login</a>
            </Link>
            <Link legacyBehavior href="/register">
                <a className="bg-blue-700 hover:bg-blue-800 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 w-1/2 mx-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-center" onClick={closeMenu}>Sign Up</a>
            </Link>
        </>
    )}
</div>

            </div>
        </nav>
    );
}
