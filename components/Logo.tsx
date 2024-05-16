import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from "../public/img/Icon.png"
import { AspectRatio } from './ui/aspect-ratio'
const Logo = () => {
  return (
    
    <Link prefetch={false} href="/" className='overflow-hidden '>
        <div className="flex items-center w-24 h-32">
            <AspectRatio
                ratio={16/9}
                className='flex items-center justify-center'
            >
                <Image
            priority
            src={Icon}
            alt=''
            className='dark:filter dark:invert'  />
            </AspectRatio>
            

        </div>
    </Link>
  )
}

export default Logo