// import React, { useState } from "react";
// import "./Login.css";
// import axios from "axios";
// import Cookies from 'js-cookie';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     newPassword: "", // New password for change password feature
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Check if newPassword is present, if yes, perform change password
//       if (formData.newPassword) {
//         await axios.post("http://127.0.0.1:8000/changepassword/", formData);
//         console.log("Password changed successfully!");
//       } else {
//         // Perform login
//         const response = await axios.post("http://127.0.0.1:8000/login/", formData);

//         const { token } = response.data;

//         // Store the token in cookies
//         Cookies.set('token', token);

//         console.log('User logged in successfully!');
//       }
//     } catch (error) {
//       console.error("Error during login or change password:", error);
//       setError("An unexpected error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="page">
//       <h1>Login</h1>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         {/* New password field for change password feature */}
//         <label>
//           New Password (if changing):
//           <input
//             type="password"
//             name="newPassword"
//             value={formData.newPassword}
//             onChange={handleInputChange}
//           />
//         </label>
//         <button type="submit" disabled={loading}>
//           {loading ? "Processing..." : "Login/Change Password"}
//         </button>
//       </form>
//     </div>
//   );
// // };

// export default Login;


import React, { useContext, useState } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import myContext from "../../../context/data/myContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
//import { signInWithEmailAndPassword } from "";


export default function AdminLogin() {
    const context = useContext(myContext);
    const { mode } = context;

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //* Login Function
    const login = async () => {
        if(!email || !password) {
            return toast.error("Fill all required fields")
        }
        try {
            // const result = await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login Success')
            localStorage.setItem('admin', JSON.stringify(result));
            navigate('/dashboard');
        } catch (error) {
            toast.error('Login Failed')
            console.log(error)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">

            {/* Card  */}
            <Card
                className="w-full max-w-[24rem]"
                style={{
                    background: mode === 'dark'
                        ? 'rgb(30, 41, 59)'
                        : 'rgb(226, 232, 240)'
                }}
            >
                {/* CardHeader */}
                <CardHeader
                    color="blue"
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                    style={{
                        background: mode === 'dark'
                            ? 'rgb(226, 232, 240)'
                            : 'rgb(30, 41, 59)'
                    }}
                >
                    <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
                        <div className=" flex justify-center">
                            {/* Image  */}
                            <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" className="h-20 w-20"
                            />
                        </div>
                    </div>

                    {/* Top Haeding  */}
                    <Typography variant="h4" style={{
                        color: mode === 'dark'
                            ? 'rgb(30, 41, 59)'
                            : 'rgb(226, 232, 240)'
                    }}>
                        Admin Login
                    </Typography>
                </CardHeader>

                {/* CardBody */}
                <CardBody>
                    <form className=" flex flex-col gap-4">
                        {/* First Input  */}
                        <div>
                            <Input
                                type="email"
                                label="Email"
                                name="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        {/* Second Input  */}
                        <div>
                            <Input
                                type="password"
                                label="Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        {/* Login Button  */}
                        <Button
                        onClick={login}
                            style={{
                                background: mode === 'dark'
                                    ? 'rgb(226, 232, 240)'
                                    : 'rgb(30, 41, 59)',
                                color: mode === 'dark'
                                    ? 'rgb(30, 41, 59)'
                                    : 'rgb(226, 232, 240)'
                            }}>
                            Login
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>


    );
}