"use client";
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { Button } from './ui/button';
import { ModeToggle } from './themeToggle';

const Header = () => {
    const session = useSession();
  return (
    <header>
        <div className="">
            {session.data?(
                <Button onClick={()=>signOut()}>Sign Out</Button>

            ):(
                <Button onClick={()=>signIn("google")}>Sign In</Button>
            )}
        </div>
        <div className="">
            <ModeToggle/>
        </div>
    </header>
  )
}

export default Header