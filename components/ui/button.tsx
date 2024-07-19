import React from 'react'


interface IProps {
  type?: any;
  children?: any;
  icon?: any;
  size?: "xs" | "sm" | "md" | "lg";
  color: "green" | "rose" | "blue";
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const getButtonClassColor = (color: "green" | "rose" | "blue"): string => {
    let generatedColor = 
    color === "green" ? "bg-[#10b981]" :
    color === "rose" ? "bg-[#f43f5e]" : 
    color === "blue" ? "bg-[#3b82f6]" : ""


    return generatedColor;
}



const Button: React.FC<IProps> = (props) => {
  return (
    <button className={`${props.className} px-5 py-2.5 text-white ${getButtonClassColor(props.color)} `}>
        {props.children}
    </button>
  )
}

export default Button