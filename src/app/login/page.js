"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function LoginPage() {
    return (
        <div className="max-w-7xl mx-auto min-h-screen">
            <div className="flex items-center justify-center">
                <div className="p-6 bg-white rounded-xl shadow-md text-center">
                    <h1 className="text-3xl font-bold mb-4">Please Log In first!</h1>
                    <LoginLink className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-700">
                        Login
                    </LoginLink>
                </div>
            </div>
        </div>
    );
}
