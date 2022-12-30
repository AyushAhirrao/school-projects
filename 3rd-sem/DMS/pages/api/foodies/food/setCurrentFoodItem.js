import nc from "next-connect";
import {
    setCurrentFoodItem,

} from "../../../../controller/foodItems";

const handler = nc();

handler.post(setCurrentFoodItem)

export default handler