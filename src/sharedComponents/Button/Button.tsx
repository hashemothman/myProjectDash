import React from 'react'
import "./Button.css"

type TButton = {
    icon : any,
    title : string,
    onclick:any,
}
const Button:React.FC<TButton> = ({title,icon,onclick}) => {
    return (
        <button className='button-Ay' onClick={onclick}>
            <h3>{title}</h3>
            <div className="icon">
                {icon}
            </div>
        </button>
    )
}

export default Button
