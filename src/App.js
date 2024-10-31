import logo from './logo.svg';
import './App.css';
import React from 'react';
import CreateUser from './components/CreateUser';

function App() {
    return (
        <div className="App">
            <h1>User Management</h1>
            <CreateUser />
        </div>
    );
}

export default App;
