import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Room } from '@/db/schema'
import Link from 'next/link'
import { GitBranchIcon, GithubIcon } from 'lucide-react'
import { Button } from './ui/button'

  

const RoomCards = ({room}:{room:Room}) => {
  return (
    <Card>
    <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
    </CardHeader>
    <CardContent>
        {room.githubRepo &&(
            <Link href={room.githubRepo} className='flex items-center gap-2' target="_blank" rel="noopener noreferrer">
                <GitBranchIcon/>
                Github Project
            </Link>
        )}
    </CardContent>
    <CardFooter>
        <Button asChild>
            <Link href={`/room/${room.id}`}>Join Room</Link>
        </Button>
    </CardFooter>
    </Card>

  )
}

export default RoomCards