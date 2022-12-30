import nc from "next-connect";
import { getCurrentUser, setUserData, setNewUserData, deleteUser } from "../../../../controller/users";

const handler = nc();
handler.get(getCurrentUser)
handler.post(setUserData)
handler.post(deleteUser)
export default handler
