import nc from "next-connect";
import {
    newOrder
} from "../../../../controller/orders";

const handler = nc();
handler.post(newOrder)
export default handler