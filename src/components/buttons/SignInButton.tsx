'use client'
import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignInButton() {
    const { data: session } = useSession();
    
    return session ? (
        <button 
            onClick={() => signOut()} 
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
            Sign Out
        </button>
    ) : (
        <button 
            onClick={() => signIn()} 
            className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
            Sign In
        </button>
    );
}