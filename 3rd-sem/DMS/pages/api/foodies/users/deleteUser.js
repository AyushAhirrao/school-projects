import nc from "next-connect";
import {deleteUser} from "../../../../controller/users";

const handler = nc();
handler.post(deleteUser)
export default handler