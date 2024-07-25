import React from 'react'

interface IProps{
    children: React.ReactNode
    className?: string
}

const ContainerHeaderBar: React.FC<IProps> = (props) => {
  return (
    <header className={`w-full border-b h-[60px] ${props.className}`}>
        {props.children}
    </header>
  )
}

export default ContainerHeaderBar