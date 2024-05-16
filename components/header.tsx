// "use client";
// import { signIn, signOut, useSession } from 'next-auth/react'
// import React from 'react'
// import { Button } from './ui/button';
// import { ModeToggle } from './themeToggle';
// import Logo from './Logo';
// import UserButton from './userButton';
// import { authConfig, getSession } from '@/lib/auth';
// import { getServerSession } from 'next-auth';

// const Header = () => {
//     const session = useSession();

//   return (
//     <header className=' bg-transparent dark:bg-transparent'>
//         <nav className='flex flex-col sm:flex-row items-center 
//         p-5 pl-2 dark:bg-transparent max-w-7xl mx-auto'>
//             <Logo/>
//             <div className="flex-1 flex items-center justify-end space-x-4">
//                 <ModeToggle/>
//                 <UserButton Session={session}/>
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Header

"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteIcon, LogInIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { ModeToggle } from "./themeToggle";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
// import { deleteAccountAction } from "./actions";

function AccountDropdown() {
  const session = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove your
              account and any data your have.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await deleteAccountAction();
                signOut({ callbackUrl: "/" });
              }}
            >
              Yes, delete my account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog> */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"link"}>
          <Avatar className={cn('bg-white text-black')}>
        {session.data?.user.image && (
            <Image
            src={session.data?.user.image||""}
            alt={session.data.user.name||""}
            width={40}
            height={40}

            className="rounded-full"
            />
        )}
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <AvatarFallback 
        delayMs={100}
        className="dark:bg-white dark:text-black text-lg">
            {session.data?.user.name?.split(" ").map((n)=>n[0]).join("")}
        </AvatarFallback>
    </Avatar>

            
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            {session?.data?.user.name}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            <LogOutIcon className="mr-2" /> Sign Out
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {
              setOpen(true);
            }}
          >
            <DeleteIcon className="mr-2" /> Delete Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export function Header() {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <header className="bg-gray-100 py-2 dark:bg-gray-900 z-10 relative">
      <div className="flex flex-col sm:flex-row items-center 
        p-5 pl-2 dark:bg-transparent max-w-7xl mx-auto">
        <div
          className="flex gap-2 items-center text-xl"
        >
          <Logo/>
          <h1 className="font-bold">CodeQuill</h1>
        </div>

        <nav className="flex-1 flex items-center justify-end space-x-4">
          {isLoggedIn && (
            <>
              <Link className="hover:bg-zinc-300" href="/browse">
                Browse
              </Link>

              <Link className="hover:bg-zinc-300" href="/your-rooms">
                Your Rooms
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {isLoggedIn && <AccountDropdown />}
          {!isLoggedIn && (
            <Button onClick={() => signIn()} variant="link">
              <LogInIcon className="mr-2" /> Sign In
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}