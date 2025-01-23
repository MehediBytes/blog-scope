"use client"

import { LoginLink, LogoutLink, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function Header() {
    const { isAuthenticated } = useKindeAuth();

    return (
        <header className="bg-violet-500">
            <nav className="container mx-auto text-white flex justify-between items-center p-4">
                <div>
                    <h2 className="text-3xl font-bold">Blog-Scope</h2>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {!isAuthenticated ? (
                        <LoginLink
                            className="btn px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500"
                        >
                            Login
                        </LoginLink>
                    ) : (
                        <LogoutLink
                            className="px-4 py-2 bg-red-600 rounded hover:bg-red-500"
                        >
                            Logout
                        </LogoutLink>
                    )}
                </div>
            </nav>

        </header>
    );
}
