import nc from "next-connect";
import { getAllFoodItems } from "../../../../controller/foodItems";

const handler = nc();
handler.get(getAllFoodItems)
export default handler