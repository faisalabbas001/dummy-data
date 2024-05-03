"use client"
import Link from "next/link";
const  StudentList=()=>{
    return(
        <>
            <h1>student list </h1>

            <ul>
            <li>
            <Link href="/studentlist/faisal" >faisal</Link>
            </li>
            <li>
            <Link href="/studentlist/farooq" >farooq</Link>
            </li>
            <li>
            <Link href="/studentlist/sultan" >sultan</Link>
            </li>
            <li>
            <Link href="/studentlist/moazzam" >moazzam</Link>
            </li>
            
            </ul>
        </>
    )
}
export default  StudentList;