import React, { useState, useEffect } from 'react'
import styles from '../styles/Login.module.css'
import Router from 'next/router'
import Link from 'next/link'



const Login = () => {



    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    // for user table
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/foodies/users/allUsers`).then((a) => {
            return a.json()
        }).then((data) => {
            setUserData(data)
            console.log(data)
        })
    }, [])


    var isValidUser = false;


    const handleLogin = (e) => {
        // ignores default behavior of form when it is submitted
        e.preventDefault()

        // console.log(username, password, cPhone, cMessage)

        // form data object
        const data = { username, password };

        // if phone number contains only numbers

        // fetch data from api
        fetch('http://localhost:3000/api/foodies/users/currentUser', {
            // sending data to api
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // converting data to string
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(data => {
                console.log('success', data)

            })
            .catch((error) => {
                console.error("Error:", error)
            })
        setUsername('')
        setPassword('')


        userData.map((e) => {
            if (username === e.username && password === e.password) {
                localStorage.setItem('username',username);
                localStorage.setItem('password',password);
                isValidUser = true;
            }
        })
        if (!isValidUser) {
            alert("user not found");
        }
        else{
            Router.push('/foodiesCom')
        }




    }

    const handleChange = (e) => {
        if (e.target.name == 'username') {
            setUsername(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }

    }

    return (

        <div className={styles.container}>
            <div>

                <form onSubmit={handleLogin} id={styles.loginForm} action="">

                    <div className={styles.formInput}>
                        <label htmlFor="username">Username: </label>
                        <input value={username} onChange={handleChange} type="text" id='username' name='username' required />
                    </div>

                    <div className={styles.formInput}>
                        <label htmlFor="password">Password: </label>
                        <input value={password} onChange={handleChange} type="password" id='password' name='password' required />
                    </div>

                    <div className={styles.formInput}>
                        <button onClick={handleLogin} type='submit'>
                            <div id={styles.submitBtn}>
                                Login
                            </div>
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login
