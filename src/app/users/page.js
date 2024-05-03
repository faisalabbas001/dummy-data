import Link from "next/link";
import getUsers from "../../../service/getUser"
export default async function Page(){
const getuserList= getUsers();
const user=  await getuserList;

return(
    <>
        {
user.map((user)=>(
    <h1 key={user.id}>

        <Link href={`/users/${user.id}`}>{user.name}</Link>
    </h1>
))
        }
    </>
)
}