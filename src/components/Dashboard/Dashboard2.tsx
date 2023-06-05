import {FC} from 'react'
import './dashboard2.scss'

const Dashboard2: FC = () => {
  return (
    <>
        <div className="dashboard2 w-3/4 m-auto flex flex-wrap gap-10 justify-between bg" >
            <div className="left flex flex-col gap-y-2">
                <span className='block font-semibold color-main'>Your Referral Code</span>
                <span className='referral-code font-16px  flex justify-center items-center'>EDCH54</span>
            </div>
            <div className="right font-semibold font-16px drop-shadow-xl bg-white rounded-3xl p-5">
                <span className='block color-main  '>Wallet Balance</span>
                <span className='block '>₹ 500</span>
            </div>
        </div>
    </>
  )
}

export default Dashboard2