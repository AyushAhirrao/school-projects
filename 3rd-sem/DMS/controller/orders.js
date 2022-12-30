import pool, {
    executeQuery
} from "../config/db";


const newOrder = async (req, res) => {

    if (req.method == 'POST') {

        const table_name = 'orders';
        const query = `INSERT INTO ${table_name} VALUES (uId,'${req.body.uName}', '${req.body.uPhone}', '${req.body.uEmail}', '${req.body.foodItem}', '${req.body.foodQuantity}', '${req.body.deliveryInstruction}', '${req.body.uAddress}', '${req.body.paymentOption}');`;

        let userData = executeQuery(`${query}`, [])

        // console.log(req.body.)

    } else {
        res.status(200).json(["data"])
    }

};




export {
    newOrder,
}