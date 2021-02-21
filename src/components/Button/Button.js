import React from 'react';

const Button = ({
    type = "button",
    value,
    name,
    id,
    icon,
    className,
    onClick
}) => {
    const buttonClassName = className;
    return (
        <div className={`button-Component ${buttonClassName}`} >
            <button id={id} 
                className={`button-${buttonClassName}`} 
                onClick={onClick} 
                type={type} 
                value={value} 
                name={name} >
                    {value}    
            </button>
        </div>
    )
}

export default Button;