import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

function Display() {
    const [response, Setresponse] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const responses = await axios.get("https://jsonplaceholder.typicode.com/users")
                Setresponse(responses.data);
                console.log(responses.data)
;            }
            catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, [])
    return (
        <>
            <h1>Users List:-</h1>
            {
                response.map((user) => (
                    <h3 key={user.id}> {user.name}</h3>

                ))
            }
        </>

    )
}

export default Display