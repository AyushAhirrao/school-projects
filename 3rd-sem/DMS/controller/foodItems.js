import pool, {
    executeQuery
} from "../config/db";

const getAllFoodItems = async (req, res) => {

    const table_name = 'foodItems';
    let userData = await executeQuery("select * from foodItems", [])
    res.send(userData)
};


// pending
const currentFoodItem = async (req, res) => {

    const table_name = 'foodItems';

    let userData = await executeQuery(`${currentFoodItemQuery}`, [])
    res.send(userData)

};

var currentFoodItemQuery;
const setCurrentFoodItem = async (req, res) => {


    if (req.method == 'POST') {

        const table_name = 'foodItems';
        currentFoodItemQuery = `select * from ${table_name} where foodName = '${req.body.foodItem}'`;

        let userData = await executeQuery(`${currentFoodItemQuery}`, [])
        res.send(userData)



        console.log(userData);


    } else {
        res.status(200).json(["waiting..."])
    }

};

export {
    getAllFoodItems,
    setCurrentFoodItem,
    currentFoodItem
}