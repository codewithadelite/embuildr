import React from 'react'
import Navbar from '@/components/ui/navbar'
import SearchBar from './search-bar'
import SideBarFilter from './side-bar-filter'
import TemplatesList from './templates-list'

const Templates = () => {
  return (
    <main className="background-black">
      <div className="relative flex flex-col  mx-auto background-black  min-h-screen max-w-7xl  px-4">
        <Navbar />
        <div className="flex-1 p-2">
          <div className="w-full flex justify-center mt-20">
                <SearchBar />
          </div>
          <div className='flex gap-8 w-full'>
            <SideBarFilter />
            <TemplatesList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Templates