import { useState, useEffect } from "react"
import React from 'react'
import Navbar from '../components/navbar'


const Dashboard = () => {
    // for user table
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/foodies/users/currentUser`).then((a) => {
            return a.json()
        }).then((data) => {
            setUserData(data)
            console.log(data)
        })
    }, [])
    return (
        <>
            <Navbar />
            {userData.map((e) => {
                return (
                    <div key={e.username}>
                        <br /><br /><br />
                        <p>{e.name}</p><br />
                        <p>{e.username}</p><br />
                        <p>{e.email}</p><br />
                        <p>{e.phone}</p><br />
                    </div>
                )
            })}
        </>
    )
}

export default Dashboard
