import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Nav from "../../Components/Nav/Nav";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const PassResetLink = () => {
    const { passResetLink } = useContext(AuthContext);
    const navigate = useNavigate();
    const [resetCode, setResetCode] = useState(null);
    

    


    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const code = queryParams.get('oobCode');
        setResetCode(code);
    }, []);

    const handleResetPass =(e) => {
        e.preventDefault();
        const password = e.target.password.value
        const confirmPassword = e.target.confirmpassword.value
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        passResetLink(resetCode,password)
        .then(()=>{
            toast.success('Password cnaged')
            navigate('/')
        })
        .catch(()=>{
            toast.error('Faild ')
        })

        
      
    };

    return (
        <div className="bg-blue-100">
            <Nav />
            <div className="container mx-auto h-[calc(100vh-68px)] flex justify-center items-center">
                <div className="max-w-lg mx-auto p-10 bg-white rounded shadow-md">
                    <h1 className="text-2xl md:text-4xl font-bold">Update Password</h1>
                    <div className="divider"></div>
                    <form onSubmit={handleResetPass} className="w-full flex flex-col gap-3">
                       
                        <label>
                            <p className="font-semibold">Password</p>
                            <input
                                name="password"
                                
                                placeholder="Enter new password"
                                type="password"
                                className="input w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded"
                                required
                            />
                        </label>
                        <label>
                            <p className="font-semibold">Confirm Password</p>
                            <input
                                name="confirmpassword"
                                
                                placeholder="Confirm password"
                                type="password"
                                className="input w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className={`btn mt-5 bg-blue-600 hover:text-blue-600 text-white w-full `}
                            
                        > Update password
                            
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PassResetLink;
