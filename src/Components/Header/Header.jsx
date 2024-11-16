import moment from 'moment';
import logo from '../../assets/images/logo.png'
import { useEffect, useState } from 'react';

const Header = () => {
      const [time , setTime]= useState(moment().format('MMMM Do YYYY, h:mm:ss a'))
      useEffect(() => {
            const intervalId = setInterval(() => {
              setTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
            }, 1000);
            return () => clearInterval(intervalId);
          }, []); 
        
      return (
            <div className=' container mx-auto '>
                   <div className=' w-11/12 md:w-full mx-auto text-center space-y-1'>
                        <img className=' w-1/2 md:w-auto mx-auto' src={logo} alt="" />
                        <p className=' text-gray-500 text-md md:text-xl'>Journalism Without Fear or Favour</p>
                        <p className=' font-semibold mt-5 text-gray-500 text-md md:text-xl'>{time}</p>
                   </div>
            </div>
      );
};

export default Header;