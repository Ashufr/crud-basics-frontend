import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = "https://crud-basics-backend-q94de3zmv-harashishs-projects.vercel.app";

const User = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    
    const handleOnClick = () => navigate('/update');

    const handleDelete = async (id) => {
        console.log(id);
        await axios.delete(`/deleteUser/${id}`);
        fetchUsers();
    }

    const fetchUsers = async () => {
        const response = await axios.get('/');
        // console.log(response.data);
        // const data = await response.json();
        setUsers(response.data);
    }

    useEffect(() => {
        fetchUsers();
    },[users])
    // if(users.length == 0){return <h1>Loading</h1>}
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-slate-800">
            <div className="p-8 rounded-lg card bg-slate-200">
                <Link to="/create" className="p-2 rounded-md bg-slate-600 text-slate-100">Add User</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <Link to={`/update/${user._id}`} className="p-2 rounded-md bg-slate-600 text-slate-100">Edit</Link>
                                            <button className="p-2 rounded-md bg-slate-600 text-slate-100" onClick={(e) => handleDelete(user._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default User
