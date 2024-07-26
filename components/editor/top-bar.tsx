import React from 'react'
import Link from 'next/link'
import Button from '../ui/button'
import { ArrowDownTrayIcon, BookmarkSquareIcon } from '@heroicons/react/24/outline'

interface IProps {
    projectName: string
    editProjectName: (newName: string) => void
    exportHtml: () => void
    exportJson: () => void
}

const TopBar: React.FC<IProps> = (props) => {
  return (
    <header>
        <div className='border-b flex h-[60px] items-center justify-between md:h-[80px] px-6'>
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <span className='text-black dark:text-white text-xl font-semibold'>
                            embuildr
                        </span>
                    </Link>
                </div>
                <input 
                    type="text" 
                    value={props.projectName} 
                    className='text-gray-800 bg-white text-2xl font-bold focus:outline-none'
                    spellCheck="false"
                    onChange={(e) => props.editProjectName(e.target.value)}
                />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 ">
                <Button color='blue' className='rounded-md flex items-center font-medium bg-black' onClick={() => props.exportJson()}>
                    <BookmarkSquareIcon className='h-6 text-white mr-2'/>
                    Save
                </Button>
                <Button color='blue' className='rounded-md flex items-center font-medium' onClick={() => props.exportHtml()}>
                    <ArrowDownTrayIcon className='h-6 text-white mr-2'/>
                    Export
                </Button>
          </div>
            
        </div>
    </header>
  )
}

export default TopBar