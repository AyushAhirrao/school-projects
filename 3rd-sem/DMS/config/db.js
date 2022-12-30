const { createPool } = require('mysql')
const { resolve } = require('styled-jsx/css')

const pool = createPool({
    host: process.env.NEXT_PUBLIC_HOST,
    user: process.env.NEXT_PUBLIC_USER,
    password: process.env.NEXT_PUBLIC_PASSWORD,
    port: process.env.NEXT_PUBLIC_PORT,
    database: process.env.NEXT_PUBLIC_DATABASE 
})

pool.getConnection((err) => {
    if (err) {
        console.log("Error connecting to db")
    }
    console.log("connected")
})

const executeQuery = (query, arraParms) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arraParms, (err, data) => {
                if (err) {
                    // console.log("error executing query")
                    reject(err)
                }
                resolve(data)
            });
        } catch (err) {
            reject(err)
        }
    });
};
module.exports = { executeQuery };