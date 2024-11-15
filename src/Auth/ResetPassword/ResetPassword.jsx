import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Nav from "../../Components/Nav/Nav";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const { updateUserPass } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdatePassword = (e) => {
        e.preventDefault();
        const pass = e.target.password.value;
        const conformpassword = e.target.conformpassword.value;

        if (pass === conformpassword) {
            updateUserPass(pass)
                .then(() => {
                    toast.success('Password updated');
                    navigate('/login');
                })
                .catch(err => {
                    console.log(err);
                    toast.error("Error updating password");
                });
        } else {
            toast.error("Passwords do not match");
        }
    };

    return (
        <div className="bg-blue-100">
            <Nav />
            <div className="container mx-auto h-[calc(100vh-68px)] flex justify-center items-center">
                <div className="max-w-lg mx-auto p-10 bg-white rounded shadow-md">
                    <h1 className="text-2xl md:text-4xl font-bold">Update Password</h1>
                    <div className="divider"></div>
                    <form onSubmit={handleUpdatePassword} className="w-full flex flex-col gap-3">
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
                                name="conformpassword"
                                placeholder="Confirm password"
                                type="password"
                                className="input w-full border-2 border-blue-500 focus:outline-none focus:border-blue-400 rounded"
                                required
                            />
                        </label>
                        <button className="btn mt-5 bg-blue-600 hover:text-blue-600 text-white w-full rounded">
                            Update Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
