import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import Link from 'next/link'

const DeleteUser = () => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleDelete = (e) => {

        if (confirm("Are you sure?")) {

            // ignores default behavior of form when it is submitted
            e.preventDefault()

            // console.log(username, password, cPhone, cMessage)

            // form data object
            const data = { username, password };

            // if phone number contains only numbers

            // fetch data from api
            fetch('http://localhost:3000/api/foodies/users/deleteUser', {
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
        <div>

            <form onSubmit={handleDelete} id={styles.loginForm} action="">

                <div className={styles.formInput}>
                    <label htmlFor="username">username: </label>
                    <input value={username} onChange={handleChange} type="text" id='username' name='username' />
                </div>

                <div className={styles.formInput}>
                    <label htmlFor="password">password: </label>
                    <input value={password} onChange={handleChange} type="text" id='password' name='password' />
                </div>

                <button onClick={handleDelete} type='submit' id={styles.loginBtn}><Link href={'/login'}>Delete My Account</Link></button>

            </form>

        </div>
    )
}

export default DeleteUser
