import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        role: 'CLIENT'  // Default role
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9090/api/v1/user/createUser', user);
            alert(response.data.message);
        } catch (error) {
            if (error.response) {
                alert(`Error: ${error.response.data.message || "Unable to create user."}`);
                console.error("Error response:", error.response.data);
            } else if (error.request) {
                alert("No response from server. Please check if your backend is running.");
                console.error("Error request:", error.request);
            } else {
                alert("Error creating user. Please ensure all fields are filled.");
                console.error("Error message:", error.message);
            }
        }
    };

    return (
        <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={user.email} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={user.password} onChange={handleChange} required />
                </label>
                <label>
                    Role:
                    <select name="role" value={user.role} onChange={handleChange}>
                        <option value="CLIENT">CLIENT</option>
                        <option value="SERVICE_PROVIDER">SERVICE_PROVIDER</option>
                    </select>
                </label>
                <button type="submit">Create User</button>
            </form>
        </div>
    );
};

export default CreateUser;
