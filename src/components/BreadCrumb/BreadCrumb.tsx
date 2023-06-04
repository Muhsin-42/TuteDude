import {FC} from 'react'
import './breadCrumb.scss'
import {Link} from 'react-router-dom'

interface PropsBreadCrumb{
    linkTo: string;
    crumb: string;
}

export const BreadCrumb :FC<PropsBreadCrumb> = ({linkTo,crumb}) =>{
    return(
        <>
        <div className="breadCrumb w-3/4 m-auto  flex items-center">
            <span className=' font-semibold  '>
                <Link to={linkTo}>UI/UX {`> ${crumb} `}</Link>
                </span>
        </div>
        </>
    )
}