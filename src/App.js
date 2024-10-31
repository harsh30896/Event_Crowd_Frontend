import logo from './logo.svg';
import './App.css';

import React from 'react';
import CreateUser from './components/CreateUser';

function App() {
    return (
        <div className="App">
            <h2>Event Crowd Management</h2>
            <CreateUser />
        </div>
    );
}

export default App;
