import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TemplatesList = () => {
  const path = "templates/notification/token_verification.json"
  return (
    <div className='mt-20 w-full'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href={`/editor?t=${encodeURIComponent(path)}`}>
          <article className=" bg-gray-900 hover:bg-gray-800 rounded-md cursor-pointer text-white">
            <Image 
              src="https://react.email/_next/image?url=%2Fstatic%2Fexamples%2Faws-verify-email.png&w=640&q=75" 
              alt="Notification email"
              className="rounded-t-md"
              width={600}
              height={700}
              layout="responsive"
            />
            <div className="mt-2 p-4">
              <span className='text-white text-md font-semibold'>Email verification</span>
            </div>
          </article>
        </Link>
        <article className=" bg-gray-900 hover:bg-gray-800 rounded-md cursor-pointer">
          <Image 
            src="https://react.email/_next/image?url=%2Fstatic%2Fexamples%2Fgithub-access-token.png&w=640&q=75" 
            alt="Notification email"
            className="rounded-t-md"
            width={600}
            height={700}
            layout="responsive"
          />
          <div className="mt-2 p-4">
            <span className='text-white text-md font-semibold'>Team registration</span>
          </div>
        </article>
        <article className=" bg-gray-900 hover:bg-gray-800  rounded-md cursor-pointer">
          <Image 
            src="https://react.email/_next/image?url=%2Fstatic%2Fexamples%2Fapple-receipt.png&w=640&q=75" 
            alt="Notification email"
            className="rounded-t-md"
            width={600}
            height={700}
            layout="responsive"
          />
          <div className="mt-2 p-4">
            <span className='text-white text-md font-semibold'>Discount advertisement</span>
          </div>
        </article>
        <article className=" bg-gray-900 hover:bg-gray-800  rounded-md cursor-pointer">
          <Image 
            src="https://react.email/_next/image?url=%2Fstatic%2Fexamples%2Fnike-receipt.png&w=640&q=75" 
            alt="Notification email"
            className="rounded-t-md"
            width={600}
            height={700}
            layout="responsive"
          />
          <div className="mt-2 p-4">
            <span className='text-white text-md font-semibold'>Order notification</span>
          </div>
        </article>
        <article className=" bg-gray-900 hover:bg-gray-800  rounded-md cursor-pointer">
          <Image 
            src="https://react.email/_next/image?url=%2Fstatic%2Fexamples%2Fgoogle-play-policy-update.png&w=640&q=75" 
            alt="Notification email"
            className="rounded-t-md"
            width={600}
            height={700}
            layout="responsive"
          />
          <div className="mt-2 p-4">
            <span className='text-white text-md font-semibold'>Newsletter update</span>
          </div>
        </article>
        <article className=" bg-gray-900 hover:bg-gray-800 rounded-md cursor-pointer">
          <Image 
            src="https://react.email/_next/image?url=%2Fstatic%2Fexamples%2Fkoala-welcome.png&w=640&q=75" 
            alt="Notification email"
            className="rounded-t-md"
            width={600}
            height={700}
            layout="responsive"
          />
          <div className="mt-2 p-4">
            <span className='text-white text-md font-semibold'>Welcome email</span>
          </div>
        </article>
      </div>
    </div>
  )
}

export default TemplatesList