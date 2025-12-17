import { useState } from "react";
import { Link, useNavigate } from "react-router";
const LoginForm=()=>{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username==='admin'&& password==='admin')
        {
            console.log("Logined successfully");
            sessionStorage.setItem('LogIn','true');
            sessionStorage.setItem('Role','admin');
            navigate('/admin');
        }
        else if(username==='user' && password==='user')
        {
            console.log("logined successfully");
            sessionStorage.setItem('LogIn','true');
            sessionStorage.setItem('Role','user');
            navigate('/orders');
        }
        else{
            console.log("you is not user / admin of webiste");
            navigate('/');
        }
    }
    return(
        <div className="flex justify-center items-center min-h-screen">
        <div className="bg-pink-200 p-4 w-[500px] text-center m-3 rounded-xl m-auto">
            <h1 className="text-3xl font-semibold mb-5">Login</h1>
            <input type="text" id="uname" placeholder="Username" className="border-2 border-gray-500 p-3 mb-5 rounded-xl px-10" value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>
            <input type="password" id="pass" placeholder="password" className="border-2 border-gray-500 p-3 mb-5 rounded-xl px-10" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <button className="text-white bg-indigo-400 p-3 rounded-lg mr-2" onClick={handleSubmit}>Login</button>
            <button className="text-white bg-indigo-400 p-3 rounded-lg"><Link to='/'>Exit</Link></button>
            
        </div>
        </div>
    )
}

export default LoginForm;