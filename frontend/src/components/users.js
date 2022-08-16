import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CreateRoomPage from "./CreateRoomPage";
import HomePage from './HomePage';


export default function Users() {
    const [details, setDetails] = useState([]);

    const getData = async () => {
        console.log("Get data is called!");
        let resp = await axios.get("http://localhost:8000/api/room");
        let data = await resp.data;
        setDetails(data)
        console.log("details =>", data)
    }

    useEffect(() => {
        console.log("useEffect is called!");
        getData()
    }, [])
    return (
        <div>
            <HomePage/>
            <CreateRoomPage/>
            hi there! see the below list from the backend... {
            details.map((element) => {
                const {
                    id,
                    code,
                    host,
                    guest_can_pause,
                    votes_to_skip
                } = element;
                console.log(guest_can_pause);
                return (
                    <div key={id}>
                        <p>{"----------------->"}</p>
                        <p>{code}, {host}, {
                            `${guest_can_pause}`
                        }, {votes_to_skip}</p>
                    </div>
                )
            })
        } </div>
    )
}
