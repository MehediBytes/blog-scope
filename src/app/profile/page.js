"use client";

import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function ProfilePage() {
  const { isAuthenticated, user } = useKindeAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 text-center space-y-5">
        <h1 className="text-3xl font-bold">Welcome to your profile!</h1>
        <p>Email: <span className='text-blue-500 underline'>{user.email}</span></p>
      </main>
    </div>
  );
}
