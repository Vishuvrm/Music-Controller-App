import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import axios from "axios";


function App() {
  const [details, setDetails] = useState([]);

  const getData = async ()=>{
      let resp = await axios.get("http://localhost:8000/api/room");
      let data = await resp.data;
      setDetails(data)
      console.log("details =>",data)
  }

  useEffect(()=>{getData()}, [])

  

  return (
    <>
      <div>
          hi there! see the below list from the backend...
          {
            details.map((id, code, host, guest_can_pause, votes_to_skip)=>{
              <div key={id}>
                <p>-----------------></p>
                <p>{code}, {host}, {guest_can_pause}, {votes_to_skip}</p>
              </div>
            })
          }
      </div>
    </>
  );
}

export default App;
