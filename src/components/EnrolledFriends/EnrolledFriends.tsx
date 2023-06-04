import {FC} from 'react'
import './enrolledFriends.scss'
import Card from './Card'

const EnrolledFriends: FC = ()=> {
  return (
    <div className='enrolledFriends w-3/4 m-auto my-16 '>
        <span className='font-20px color-main font-bold'>Friends who enrolled(3)</span>
        <div className="scroll-container flex rounded-3xl mt-5">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default EnrolledFriends


