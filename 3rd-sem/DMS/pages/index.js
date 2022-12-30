import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'

export default function Home() {



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



  const [loaded, setLoaded] = useState(false)
 
  useEffect(() => {
    const { pathname } = Router

    userData.map((e) => {

      let lusername = localStorage.getItem('username');
      let lpassword = localStorage.getItem('password');

      if (lusername === e.username && lpassword === e.password) {

        let username = localStorage.getItem('username');
        let password = localStorage.getItem('password');

        // form data object
        const data = { username, password };


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
        // setUsername('')
        // setPassword('')


        Router.push('/foodiesCom')
      }
      else {
        setLoaded(true)
      }

    }, []);
  })

  if (!loaded) {
    return <div></div> //show nothing or a loader
  }
  return (

    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.option}>
            <Link href={'/login'}>Login</Link>
          </div>

          <div className={styles.option}>
            <Link href={'/signup'}>Sigh Up</Link>
          </div>
        </div>
      </div>
    </>
  )
}

