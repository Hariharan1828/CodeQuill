'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Session } from "next-auth"
import { Button } from "@/components/ui/button"
import { signIn, signOut } from "next-auth/react"
import { StarIcon } from "lucide-react";
import UserAvatar from "./UserAvatar";
  
const UserButton = ({Session}:{Session:Session}) => {
  if(!Session) return(
    <Button variant={"outline"} onClick={()=>signIn()}>
      SignIn
    </Button>
  )

  return (
    Session && (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar name={Session.user?.name} image={Session.user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>{Session.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>signOut()}>SignOut</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    )

  )
}

export default UserButton