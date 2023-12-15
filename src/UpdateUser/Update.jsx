import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "https://crud-basics-backend-q94de3zmv-harashishs-projects.vercel.app";
import { useNavigate } from "react-router-dom";


const Update = () => {
    const navigate = useNavigate();

    const {id} = useParams();
    // console.log(id);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

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

    const fetchUser = async () => {
        const response = await axios.get(`/getUser/${id}`);
        console.log(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setAge(response.data.age);
    }

    const Submit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.put("/updateUser/" + id, {name, email, age})
            console.log(response);
        }catch(err){
            console.log(err);
        }
        navigate("/");
        // console.log(name, email, age);
    }

    useEffect(() => {
        fetchUser();
    },[])
    return (
        <div className="flex items-center justify-center w-full h-screen bg-slate-800">
            <div className="flex flex-col items-center gap-4 p-8 rounded-lg card bg-slate-200">
                <h2 className="font-bold">Update User</h2>
                <form onSubmit={Submit} action="" className="flex flex-col gap-4">
                    <input value={name} onChange={handleNameChange} className="p-2 rounded-md" type="text" placeholder="Name" />
                    <input value={email} onChange={handleEmailChange} className="p-2 rounded-md" type="email" placeholder="Email" />
                    <input value={age} onChange={handleAgeChange} className="p-2 rounded-md" type="number" placeholder="Age" />
                    <input className="p-2 rounded-md bg-slate-600 text-slate-100" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
};

export default Update;
