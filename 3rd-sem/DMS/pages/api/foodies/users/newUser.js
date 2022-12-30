import nc from "next-connect";
import {setNewUserData} from "../../../../controller/users";

const handler = nc();
handler.post(setNewUserData)
export default handler