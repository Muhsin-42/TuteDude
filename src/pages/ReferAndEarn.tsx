import  { FC } from 'react';
import { Footer, NavBar, Workings, BreadCrumb, Dashboard } from '../components';
import './referAndEarn.scss'

const ReferAndEarn: FC = () => {
  return (
    <>
      <div className="sticky-container">
        <NavBar />
        <BreadCrumb linkTo='/' crumb='Refer & Earn' />
      </div>
      <Dashboard />
      <Workings />
      <Footer />
    </>
  );
};

export default ReferAndEarn;
