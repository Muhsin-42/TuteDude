import {FC} from 'react'
import './dashboard.scss'
export const Dashboard: FC = ()=>{
    return (
        <>
            <div className="main-dashboard w-3/4 m-auto px-2 flex justify-start gap-x-16 flex-wrap">
                <div className="left-card drop-shadow-2xl mt-10  flex-col  bg-white w-max   rounded-2xl">
                    <div className="top flex gap-10 pt-5 px-5">
                        <div className="point1 flex-col font-semibold">
                            <span className='block color-main'>Referral Earning</span>
                            <span className='block font-32px'>₹ 2,500</span>
                        </div>
                        <div className="point2 flex-col font-semibold">
                            <span  className='block color-main'>Total Referral</span>
                            <span  className='block font-32px'>7</span>
                        </div>
                        <div className="point3 flex-col font-semibold">
                            <span className='block color-main'>Wallet Balance</span>
                            <span className='block font-32px'>₹ 500</span>
                        </div>
                    </div>
                    <div className="bottom flex justify-center items-center pt-4">
                        <button className='text-white '>Withdraw Balance</button>
                    </div>
                </div>

                <div className="left-card-mobile drop-shadow-2xl mt-10  flex  bg-white w-max justify-center items-center  rounded-2xl gap-10 p-10">
                    <div className="left flex flex-col gap-10">
                        <div className="point1 flex-col font-semibold">
                            <span className='block color-main'>Referral Earning</span>
                            <span className='block font-32px'>₹ 2,500</span>
                        </div>
                        <div className="point3 flex-col font-semibold">
                            <span className='block color-main'>Wallet Balance</span>
                            <span className='block font-32px'>₹ 500</span>
                        </div>
                    </div>
                    <div className="right gap-10 flex flex-col">
                        <div className="point2 flex-col font-semibold">
                            <span  className='block color-main'>Total Referral</span>
                            <span  className='block font-32px'>7</span>
                        </div>
                    <div className="bottom flex justify-center items-center pt-4">
                        <button className='text-white '>Withdraw Balance</button>
                    </div>
                    </div>


            
                </div>

                <div className="right-card mt-10 flex-col">
                    <span className='color-main title font-bold'>Your Referral Code</span>
                    <div id='grad' className='mt-5'>
                        <input type="text" value={'EDCH54'}  />
                    </div>
                </div>
            </div>
        </>
    )
}