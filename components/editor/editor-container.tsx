'use client';

import React , {useState} from 'react'
import ContainerHeaderBar from './container-header-bar'
import Button from '../ui/button'
import { ComputerDesktopIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

type TView = "desktop" | "mobile";
enum DeviceView {
    Desktop = "desktop",
    Mobile = "mobile"
}

const EditorContainer = () => {
    const [view, setView] = useState<TView>(DeviceView.Desktop);

    const changeViewDevice = (device: TView) => {
        setView(device);
    }

  return (
    <div className='w-[70%] h-full border-r flex flex-col'>
        <ContainerHeaderBar className='flex items-center justify-center'>
            <div className='flex'>
                <Button 
                    color='blue' 
                    className={`rounded-l-md px-3 flex items-center font-medium ${view === DeviceView.Desktop ? "bg-slate-500" : "bg-slate-200"}`}
                    onClick={() => changeViewDevice(DeviceView.Desktop)}
                    >
                    <ComputerDesktopIcon className={`h-5 ${view === DeviceView.Desktop ? "text-white" : "text-black"}`}/>
                </Button>
                <Button 
                    color='blue' 
                    className={`rounded-r-md px-3 flex items-center font-medium ${view === DeviceView.Mobile ? 'bg-slate-500' : 'bg-slate-200'}`}
                    onClick={() => changeViewDevice(DeviceView.Mobile)}
                >
                    <DevicePhoneMobileIcon className={`h-5 ${view === DeviceView.Mobile ? 'text-white' : 'text-black'}`}/>
                </Button>
            </div>
        </ContainerHeaderBar>
        <div className='flex-1 p-4'>
            <div className='flex justify-center w-full h-full'>
                <div className={`${view === DeviceView.Desktop ? "w-full" : "w-[50%]"}  h-full bg-slate-100`}>

                </div>
            </div>
        </div>
    </div>
  )
}

export default EditorContainer