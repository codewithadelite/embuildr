import React from 'react'
import { BellIcon, PaintBrushIcon, GiftIcon, SparklesIcon, NewspaperIcon } from '@heroicons/react/24/outline'

const SideBarFilter = () => {
  return (
    <div className='w-52 mt-20 text-white'>
        <span className='font-bold text-gray-1'>Categories</span>
        <ul className='mt-4 ml-3'>
            <li className='mb-4 cursor-pointer text-gray-1 hover:text-white'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <BellIcon className='w-6 h-6' /> 
                        <span>
                            Notifications
                        </span>
                    </div>
                    <span>
                        25
                    </span>
                </div>
            </li>
            <li className='mb-4 cursor-pointer text-gray-1 hover:text-white'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <PaintBrushIcon className='w-6 h-6' /> 
                        <span>
                            Design
                        </span>
                    </div>
                    <span>
                        12
                    </span>
                </div>
            </li>
            <li className='mb-4 cursor-pointer text-gray-1 hover:text-white'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <GiftIcon className='w-6 h-6' /> 
                        <span>
                            Gift
                        </span>
                    </div>
                    <span>
                        25
                    </span>
                </div>
            </li>
            <li className='mb-4 cursor-pointer text-gray-1 hover:text-white'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <SparklesIcon className='w-6 h-6' /> 
                        <span>
                            Product
                        </span>
                    </div>
                    <span>
                        12
                    </span>
                </div>
            </li>
            <li className='mb-4 cursor-pointer text-gray-1 hover:text-white'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <NewspaperIcon className='w-6 h-6' /> 
                        <span>
                            News
                        </span>
                    </div>
                    <span>
                        25
                    </span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default SideBarFilter