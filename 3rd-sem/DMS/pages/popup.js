import React, { useState, useEffect } from 'react'
import styles from '../styles/popup.module.css'
import { useSearchParams } from 'next/navigation'
import Router from 'next/router'

const popup = () => {

    const searchParams = useSearchParams()


    const [uName, setUName] = useState('')
    const [uPhone, setUPhone] = useState('')
    const [uEmail, setUEmail] = useState('')
    const [foodItem, setFoodItem] = useState('')
    const [deliveryInstruction, setDeliveryInstruction] = useState('')
    const [uAddress, setUAddress] = useState('')
    const [foodQuantity, setFoodQuantity] = useState(0)
    const [paymentOption, setPaymentOption] = useState('Cash On delivery')


    // const getUser = () => {

    //     const [username, setUsername] = useState('')
    //     const [password, setPassword] = useState('')

    //     setUsername(localStorage.getItem('username'))
    //     setPassword(localStorage.getItem('password'))
    //     // form data object
    //     const currentUserData = { username, password };
    //     console.log(currentUserData)

    //     // if phone number contains only numbers

    //     // fetch data from api
    //     fetch('http://localhost:3000/api/foodies/users/currentUser', {
    //         // sending data to api
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         // converting data to string
    //         body: JSON.stringify(currentUserData),
    //     })
    //         .then(response => response.text())
    //         .then(currentUserData => {
    //             console.log('success', currentUserData)

    //         })
    //         .catch((error) => {
    //             console.error("Error:", error)
    //         })

    // }

    // useEffect(() => {
    //     getUser
    // }, [])



    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/foodies/users/currentUser`).then((a) => {
            return a.json()
        }).then((data) => {
            setUserData(data)
            console.log(data)
        })
    }, [])


    const handleOrder = (e) => {
        // ignores default behavior of form when it is submitted
        e.preventDefault()

        const currentFoodItemData = [foodItem]

        // fetch data from api
        fetch('http://localhost:3000/api/foodies/food/setCurrentFoodItem', {
            // sending data to api
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // converting data to string
            body: JSON.stringify(currentFoodItemData),
        })
            .then(response => response.text())
            .then(currentFoodItemData => {
                console.log('success', currentFoodItemData)

            })
            .catch((error) => {
                console.error("Error:", error)
            })

        // console.log(username, password, cPhone, cMessage)

        // form data object
        const data = { uName, uPhone, uEmail, foodQuantity, foodItem, deliveryInstruction, uAddress, paymentOption, };

        // if phone number contains only numbers

        // fetch data from api
        fetch('http://localhost:3000/api/foodies/orders/newOrder', {
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
        setUName('')
        setUPhone('')
        setUEmail('')
        setFoodItem('')
        setDeliveryInstruction('')
        setUAddress('')
        setFoodQuantity('')

        alert("order successfully Placed")
        Router.push('/foodiesCom')




    }

    const handleChange = (e) => {

        userData.map((e) => {
            setUName(e.name);
            setUPhone(e.phone);
            setUEmail(e.email);
            console.log(uName);
        })

        if (e.target.name == 'uName') {
            setUName(e.target.value)
        }
        else if (e.target.name == 'uPhone') {
            setUPhone(e.target.value)
        }
        else if (e.target.name == 'uEmail') {
            setUEmail(e.target.value)
        }
        else if (e.target.name == 'foodQuantity') {
            setFoodQuantity(e.target.value)
        }
        else if (e.target.name == 'deliveryInstruction') {
            setDeliveryInstruction(e.target.value)
        }
        else if (e.target.name == 'uAddress') {
            setUAddress(e.target.value)
        }

        setFoodItem(searchParams.get('food'));
    }


    return (

        <div className={styles.popup}>
            

            <div>{searchParams.get('food')}</div>

            <form onSubmit={handleOrder} id={styles.loginForm} action="">

                <div className={styles.formInput}>
                    <label htmlFor="uName">Name: </label>
                    <input value={uName} onChange={handleChange} type="text" id='uName' name='uName' required />
                </div>

                <div className={styles.formInput}>
                    <label htmlFor="uPhone">Phone: </label>
                    <input value={uPhone} onChange={handleChange} type="text" id='uPhone' name='uPhone' required />
                </div>

                <div className={styles.formInput}>
                    <label htmlFor="uEmail">Email: </label>
                    <input value={uEmail} onChange={handleChange} type="email" id='uEmail' name='uEmail' required />
                </div>


                <div className={styles.formInput}>
                    <label htmlFor="foodQuantity">Quantity: </label>
                    <input value={foodQuantity} onChange={handleChange} type="number" id='foodQuantity' name='foodQuantity' required />
                </div>


                <div className={styles.formInput}>
                    <label htmlFor="deliveryInstruction">Delivery Instruction: </label>
                    <textarea value={deliveryInstruction} onChange={handleChange} name="deliveryInstruction" id="deliveryInstruction" required cols="30" rows="5"></textarea >
                </div>

                <div className={styles.formInput}>
                    <label htmlFor="uAddress">Address: </label>
                    <textarea value={uAddress} onChange={handleChange} name="uAddress" id="uAddress" required cols="30" rows="5"></textarea >
                </div>

                <div className={styles.formInput}>
                    <label htmlFor="radio">Payment Method: </label>

                    <div className={styles.radioBtn}>
                        <label htmlFor="cod">Cash on delivery</label>
                        <input id="cod" type="radio" name='radio' value={'Cash on delivery'} required />
                        <label htmlFor="online">Online</label>
                        <input disabled id="online" type="radio" name='radio' value={'Online'} required />
                    </div>
                </div>
                <div className={styles.formInput}>
                    <button type='submit'>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default popup



