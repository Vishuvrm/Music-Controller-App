import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {useState, useEffect, Component} from 'react';
import axios from "axios";
import RoomJoinPage from './components/RoomJoinPage';
import CreateRoomPage from './components/CreateRoomPage';
import Users from './components/users';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect
} from "react-router-dom";


function App() {
    return (
      <div>
            <div>
                hi there! see the below list from the backend... 
                <Users/>
                <Routes>
                    <Route path='/'
                        element={
                            <h1>Welcome!</h1>
                        }/>
                    <Route path='/join'
                        element={<RoomJoinPage/>}/>
                    <Route path='/create'
                        element={<CreateRoomPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
