import React, { useState } from "react";
import axios from "axios"
axios.defaults.baseURL = "https://crud-basics-backend.vercel.app";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
        // console.log(name);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // console.log(name);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
        // console.log(name);
    }

    const Submit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post("/createUser", {name, email, age})
            console.log(response);
        }catch(err){
            console.log(err);
        }
        navigate("/");
        // console.log(name, email, age);
    }
    
    return (
        <div className="flex items-center justify-center w-full h-screen bg-slate-800">
            <div className="flex flex-col items-center gap-4 p-8 rounded-lg card bg-slate-200">
                <h2 className="font-bold">Create User</h2>
                <form method="POST" className="flex flex-col gap-4" onSubmit={Submit}>
                    <input className="p-2 rounded-md" type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
                    <input className="p-2 rounded-md" type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                    <input className="p-2 rounded-md" type="number" placeholder="Age" value={age} onChange={handleAgeChange}/>
                    <input className="p-2 rounded-md bg-slate-600 text-slate-100" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default Create;
