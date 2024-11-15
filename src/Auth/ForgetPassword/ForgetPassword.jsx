import { useContext } from "react";
import Nav from "../../Components/Nav/Nav";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";


const ForgetPassword = () => {
      const {forgetPassword} = useContext(AuthContext)
      const handleForgetPassword = (e) => {
          e.preventDefault()
          const email = e.target.email.value
           
          forgetPassword(email)
          .then(()=>{
            toast.success('Email sent')
            e.target.email.value = ''
            
          })
          .catch(()=>{
            toast.error('Invalid email')
            
            
          })
      }
      return (
            <div className="bg-blue-100" >
            <Nav></Nav>
            <div className=" container mx-auto h-[calc(100vh-68px)]  flex justify-center items-center">
                 <div className=" max-w-lg mx-auto p-10 bg-white rounded shadow-md">
                       <h1 className=" text-2xl md:text-4xl font-bold">Update password</h1>
                       <div className=" divider"></div>
                       <form onSubmit={handleForgetPassword} action="" className=" w-full flex flex-col gap-3">
                             
                        
                             <label htmlFor="">
                                   <p className=" font-semibold">Email</p>
                                   <input 
                                   name="email"
                                   placeholder="Enter your email"  type="email" className="input w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded" />
                             </label>
                             
                             <button  className="btn mt-5 bg-blue-600 hover:text-blue-600 text-white w-full   rounded">Sent email</button>
                       </form>
                       
                       
                 </div>
            </div>
     </div>
      );
};

export default ForgetPassword;