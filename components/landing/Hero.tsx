import React from 'react'
import Image from 'next/image'
import Button from '../ui/button'
import Link from 'next/link'
import {
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className="relative mx-auto flex max-w-3xl flex-col justify-center">
          <div className="max-w-[725px] text-center">
            <div className="flex items-center justify-center mb-8">
              <Image
                alt="Embuildr Email Logo"
                height="120"
                src="/images/embuildr2.png"
                width="120"
              />
            </div>
            <h1
              className="relative mb-8 !text-white/80 text-[38px] leading-[46px] md:text-[70px] md:leading-[85px] tracking-[-1.024px;]"
            >
              Drag&Drop email builder.
            </h1>
            <div className="sm:px-20">
              <p className="text-17px md:text-xl tracking-[-0.16px] text-white font-thin">
              Open-source Drag & Drop Email Builder with ready-made Templates. 
              Perfect for developers and marketers alike.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 ">
            <Link href='editor/'>
                <Button color='blue' className='px-14 py-3 rounded-md font-medium'>
                    Start design
                </Button>
            </Link>
            <Link href='templates/'>
                <Button color='blue' className='px-14 py-3 rounded-md flex items-center font-medium border border-gray-400 bg-black'>
                  <Squares2X2Icon className='h-6 text-white mr-2'/>
                  Templates
                </Button>
            </Link>
            
          </div>
        </div>
  )
}

export default Hero