import nc from "next-connect";
import { getAllUsers } from "../../../../controller/users";

const handler = nc();
handler.get(getAllUsers)
export default handler