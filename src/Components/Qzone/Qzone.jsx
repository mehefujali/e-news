import swminImage from '../../assets/images/swimming.png'
import classImage from '../../assets/images/class.png'
import playImage from '../../assets/images/playground.png'

const Qzone = () => {
      return (
            <div className=" bg-blue-100 w-full min-h-96 p-5"> 
            <h2 className=' text-2xl font-semibold mb-5'>Q-Zone</h2>
                   <div className=' '>
                        <img className=' w-full '  src={swminImage} alt="" />
                        <img className=' w-full ' src={classImage} alt="" />
                        <img className=' w-full ' src={playImage} alt="" />
                   </div>
            </div>
      );
};

export default Qzone;