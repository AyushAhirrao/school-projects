import React, { useState } from 'react'
import styles from '../styles/Signup.module.css'
import Link from 'next/link'
const Signup = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    const handleSignup = (e) => {
        // ignores default behavior of form when it is submitted
        e.preventDefault()

        // console.log(username, password, cPhone, cMessage)

        // form data object
        const data = { name, username, password, email, phone };

        // if phone number contains only numbers

        // fetch data from api
        fetch('http://localhost:3000/api/foodies/users/newUser', {
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
        setName('')
        setUsername('')
        setEmail('')
        setPhone('')
        setPassword('')

    }

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setName(e.target.value)
        }
        else if (e.target.name == 'username') {
            setUsername(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
        else if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'phone') {
            setPhone(e.target.value)
        }

    }

    return (
        <div className={styles.container}>

            <form onSubmit={handleSignup} id={styles.loginForm} action="">

                <div className={styles.formInput}>
                    <label htmlFor="name">Name: </label>
                    <input value={name} onChange={handleChange} type="text" id='name' name='name' />
                </div>

                <div className={styles.formInput}>
                    <label htmlFor="username">Username: </label>
                    <input value={username} onChange={handleChange} type="text" id='username' name='username' />
                </div>

                <div className={styles.formInput}>
                    <label htmlFor="email">Email: </label>
                    <input value={email} onChange={handleChange} type="email" id='email' name='email' />
                </div>

                <div className={styles.formInput}>
                    <label htmlFor="phone">Phone: </label>
                    <input value={phone} onChange={handleChange} type="text" id='phone' name='phone' />
                </div>

                <div className={styles.formInput}>
                    <label htmlFor="password">Password: </label>
                    <input value={password} onChange={handleChange} type="text" id='password' name='password' />
                </div>


                <div className={styles.formInput}>
                    <button onClick={handleSignup} type='submit'><Link href={'/login'}>
                        <div id={styles.submitBtn}>
                            Sign up
                        </div>
                    </Link>
                    </button>
                </div>



            </form>

        </div>
    )
}

export default Signup
