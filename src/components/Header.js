"use client";

import { LoginLink, LogoutLink, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const { isAuthenticated } = useKindeAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-purple-500 fixed w-full z-10 top-0 left-0">
            <nav className="container mx-auto text-white flex justify-between items-center p-4">
                {/* Mobile Toolbar and logo*/}
                <div className="flex items-center space-x-2">
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white text-xl focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                    <h2 className="text-3xl font-bold">Blog-Scope</h2>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex">
                    <ul className="flex space-x-4">
                        <li className="hover:underline">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>

                {/* Login/Logout Button */}
                <div className="hidden md:block">
                    {!isAuthenticated ? (
                        <LoginLink className="btn px-4 py-2 bg-black rounded-xl hover:bg-blue-700">
                            Login
                        </LoginLink>
                    ) : (
                        <LogoutLink className="px-4 py-2 bg-black rounded-xl hover:bg-red-700">
                            Logout
                        </LogoutLink>
                    )}
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="bg-purple-500 lg:hidden absolute p-2 rounded-lg">
                    <ul className="space-y-4 p-4">
                        <li>
                            <Link
                                href="/"
                                className="block text-white hover:bg-purple-700 p-2 rounded"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile"
                                className="block text-white hover:bg-purple-700 p-2 rounded"
                                onClick={() => setMenuOpen(false)}
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            {!isAuthenticated ? (
                                <LoginLink
                                    className="btn px-4 py-2 bg-black text-white rounded-xl hover:bg-blue-700"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Login
                                </LoginLink>
                            ) : (
                                <LogoutLink
                                    className="px-4 py-2 bg-black text-white rounded-xl hover:bg-red-700"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Logout
                                </LogoutLink>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
