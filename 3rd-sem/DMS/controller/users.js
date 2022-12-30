import pool, {
    executeQuery
} from "../config/db";

const getAllUsers = async (req, res) => {

    const table_name = 'users';
    let userData = await executeQuery("select * from users", [])
    res.send(userData)
};

const getCurrentUser = async (req, res) => {

    const table_name = 'users';
    let userData = await executeQuery(que, [])
    res.send(userData)
};


var que;
const setUserData = async (req, res) => {

    if (req.method == 'POST') {

        const table_name = 'users';
        const query = `select * from ${table_name} where username = '${req.body.username}' and password = '${req.body.password}';`;
        que = `select * from ${table_name} where username = '${req.body.username}' and password = '${req.body.password}';`;
        // const query = `INSERT INTO users VALUES(1,'shriram','${req.body.username}','${req.body.password}','shriram@shriram','22222222');;`;

        let userData = executeQuery(`${query}`, [])

        // console.log(query)


        console.log(userData);

        // console.log(req.body.)

    } else {
        res.status(200).json(["contact data"])
    }

};


const setNewUserData = async (req, res) => {

    if (req.method == 'POST') {

        const table_name = 'users';
        const query = `INSERT INTO ${table_name} VALUES(uId,'${req.body.name}','${req.body.username}','${req.body.password}','${req.body.email}','${req.body.phone}');        `;
        // const query = `INSERT INTO users VALUES(1,'shriram','${req.body.username}','${req.body.password}','shriram@shriram','22222222');;`;

        let userData = executeQuery(`${query}`, [])

        // console.log(query)


        console.log(userData);

        // console.log(req.body.)

    } else {
        res.status(200).json(["data"])
    }

};

const deleteUser = async (req, res) => {

    if (req.method == 'POST') {

        const table_name = 'users';
        const query = `DELETE from ${table_name} where username='${req.body.username}' and password='${req.body.password}';        `;
        // const query = `INSERT INTO users VALUES(1,'shriram','${req.body.username}','${req.body.password}','shriram@shriram','22222222');;`;

        let userData = executeQuery(`${query}`, [])

        // console.log(query)


        console.log(userData);

        // console.log(req.body.)

    } else {
        res.status(200).json(["data"])
    }

};
export {
    getAllUsers,
    getCurrentUser,
    setNewUserData,
    setUserData,
    deleteUser
}