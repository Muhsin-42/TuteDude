import {FC} from 'react'

const Card:FC = () =>{
    return (
        <div className='card flex flex-col p-5 rounded-3xl'>
            <div className="set1 flex justify-between mb-3">
                <span className='font-16px font-bold'>Dhiraj Saxsena</span>
                <span>14 Sep, 2022</span>
            </div>
            <div className="set2">
                Courses Enrolled(6)
            </div>
            <div className="set3 flex flex-wrap">
                <Course course='UI/UX'/>
                <Course course='Photoshop'/>
                <Course course='Illustrator'/>
                <Course course='Python'/>
                <Course course='MERN'/>
                <Course course='Java'/>
                <Course course='Javascript'/>
                <Course course='React'/>
            </div>
            <div className="set4">
                <span className='font-18px'>Referral Amount </span>
                <span className='font-24px'>₹485</span>
            </div>
        </div>
    )
}

export default Card;



interface PropsCourse{
    course: string;
}

const Course:FC<PropsCourse> = ({course}) =>{
    return(
        <>
            <span className='course flex justify-center items-center m-1'>{course}</span>
        </>
    )
}