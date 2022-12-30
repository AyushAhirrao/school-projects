import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import styles from '../styles/foodiesCom.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Pop from './popup'


const foodiesCom = () => {

  const [userData, setUserData] = useState([])


  useEffect(() => {
    fetch(`http://localhost:3000/api/foodies/users/currentUser`).then((a) => {
      return a.json()
    }).then((data) => {
      setUserData(data)
      console.log(data)
    })

  }, [])

  const [foodItems, setFoodItems] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/foodies/food/foodItems`).then((a) => {
      return a.json()
    }).then((data) => {
      setFoodItems(data)
      console.log(data)
    })
  }, [])




  let imageNo = 0;
  let isLogin = false;

  return (
    <div>
      {userData.map((e) => {
        isLogin = true;
      })}
      <Navbar />
      <div className={styles.hero}>

        {foodItems.map((f) => {
          imageNo = imageNo + 1;
          return (
            <>
              <div key={f.foodName} className={styles.foodBox}>
                <div className={styles.foodTemplate}>

                  <div className={styles.leftImage}>
                    <Image
                      className={styles.foodImage}
                      src={`/../public/images/dishes/dish${imageNo}.png`}
                      alt="Picture of the author"
                      width={250}
                      height={250}
                    />
                  </div>

                  <div className={styles.rightContent}>
                    <div className={styles.contentHeading}>
                      <h1>{f.foodName}</h1>
                    </div>

                    <div className={styles.lorem1}>{f.foodDesc}</div>

                    <div className={styles.foodPrice}>
                      <h3>&#8377; {f.foodPrice}</h3>
                    </div>

                    <div className={styles.orderBtn}>
                      {isLogin
                        ? <div>
                          <Link href={{
                            pathname: '/popup',
                            query: {
                              food: f.foodName
                            }
                          }}>
                            <button>Order Now</button>
                          </Link>
                        </div>
                        : <Popup trigger={<button>Order Now</button>} position="bottom center"><div className={styles.loginRequired}><Link href={'/login'}><p>Login</p></Link></div></Popup>
                      }


                    </div>
                  </div>

                </div>
              </div>


            </>
          )
        })}

        {/* <Pop food={''} trigger={isPop}>
          <h2>hello broo this is popup</h2>
        </Pop> */}

      </div>
    </div >
  )
}

export default foodiesCom
