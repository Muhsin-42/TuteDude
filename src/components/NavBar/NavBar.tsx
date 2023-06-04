import {FC} from 'react'
import logo from '/public/logo.svg';
import profileLogo from '/src/assets/profile-logo.svg'
import dropDown from '/src/assets/drop-down.svg'
import dropDownWhite from '/src/assets/drop-down-white.svg';
import '/src/index.scss'
import './navBar.scss'
export const NavBar:FC = () =>{
    return (
        <>
            <div className="navBar flex justify-between  font-semibold ">

                <div className="logo">
                    <img src={logo} alt="" />
                </div>


                <div className="right-side-desktop flex gap-x-10 items-center">
                    <span className='font-18px color-main-pale'>My Assignment</span>
                    <span className='font-18px color-main-pale'>Chat with Mentor</span>
                    <div className="profile flex gap-2 font-18px color-main">
                        <img src={profileLogo} alt="" />
                        ProfileName
                        <img src={dropDown} alt="" />
                    </div>
                </div>

                {/* Mobile View */}
                <div className="right-side-mobile">
                    <button className='profile-btn flex items-center gap-2'>ProfileName
                        <img src={dropDownWhite} alt="" />
                    </button>

                </div>
            </div>
        </>
    )
}