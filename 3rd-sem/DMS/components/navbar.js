import React, { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {

  // for user table
  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/foodies/users/currentUser`).then((a) => {
      return a.json()
    }).then((data) => {
      setUserData(data)
      console.log(data)
    })
  }, [], userData)

  const handleLogout = () => {
    localStorage.clear();
  }

  let isUser = false;
  return (
    <div>
      <nav id={styles.navbar}>
        <div id={styles.leftNav}>
          <ul>
            {userData.map((e) => {
              isUser = true;
              return (
                <>
                  <div className={styles.user}>{e.username}</div>

                </>
              )
            })}
            <li><Link href={'/home'}>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>

          </ul>
        </div>
        <div className={styles.searchBar}><input type="text" /></div>
        <div id={styles.rightNav}>
          <ul>
            {isUser
              ? <div className={styles.userLoggedIn}>
                <li><Link onClick={handleLogout} href={'/'}>Logout</Link></li>
                <li><Link href={'/deleteUser'}>Delete My account</Link></li>
              </div>

              : <li><Link href={'/login'}>Login</Link></li>}

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
