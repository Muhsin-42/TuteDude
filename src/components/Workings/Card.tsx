import {FC} from 'react'

interface CardProps{
    icon : string;
    title: string;
    description: string;
}

export const Card :FC<CardProps> = ({icon,title,description}) =>{
    return(
        <>
            <div className="card flex gap-5 py-5 px-2">
                <div className="left">
                    <div className="circle flex justify-center items-center">
                        <img src={icon} alt="" />
                    </div>
                </div>
                <div className="right flex-col">
                    <span className='block font-16px font-semibold'>{title}</span>
                    <span className='block break-words'>{description}</span>
                </div>
            </div>
        </>
    )
}


