import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

const Login=({setIsAuth})=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        if(email === "admin@gmail.com" && password === "admin123"){
            setIsAuth(true);
            navigate("/dashboard");
        }
        else{
            alert("Invalid crendentials");
        }
    };
    return (
        <div sytle={{padding:"40px"}}>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <br /><br />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                <br /><br />
            </form>
        </div>
    );
}
