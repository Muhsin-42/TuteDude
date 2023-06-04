import {FC} from 'react'
import { BreadCrumb,  Dashboard2, EnrolledFriends, Footer, NavBar } from '../components'


export  const Enrolled : FC = ()=>{
    return(
        <>
            <div className="sticky-container">
                <NavBar/>
                <BreadCrumb linkTo='/' crumb='Refer & Earn > Friends Referred'/>
            </div>
                <Dashboard2/>
                <EnrolledFriends/>
                <Footer />
        </>
    )
} 