import React from 'react'

const Image = ({
    src, 
    className,
    height,
    width,
    alt
}) => {
    const ImageClassName = className;
    return (
        <div className={`Image-Component ${ImageClassName}`} >
            <img className={`Image-${ImageClassName}`} 
                src={`${src}`}
                height={`${height}`}
                width={`${width}`}
            />
        </div>
    )
}

export default Image;