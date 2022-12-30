import nc from "next-connect";
import {
    currentFoodItem,
    
} from "../../../../controller/foodItems";

const handler = nc();

handler.get(currentFoodItem)

export default handler