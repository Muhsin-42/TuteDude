import {FC} from 'react'
import { Card } from './Card'
import './workings.scss'
import { Rules } from '../../utils/constants'
import { Link } from 'react-router-dom'

export const Workings: FC = () =>{
    return (
        <>
            <div className="Workings w-3/4 m-auto mt-10" >
                <span className='title color-main font-24px font-bold '> How does it work?</span>

                <div className="cards flex flex-wrap mb-5">
                    {
                        Rules.map((rule,index)=>{
                            return (
                                <Card key={index} icon={rule.icon} title={rule.title} description={rule.description}></Card>
                            )
                        })
                    }
                </div>


                <span className='color-main font-18px font-semibold '><Link to={'/enrolled-friends'}>Friends who Enrolled</Link></span>
            </div>
        </>
    )
}
