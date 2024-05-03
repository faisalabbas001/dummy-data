"use client"
import Link from "next/link";
const TeacherList=()=>{
    return(
        <>
     <h1>teacher list page </h1>

     <ul>
        <li>
            <Link href="/teacherlist/abdullah">abdullah </Link>
        </li>
        <li>
            <Link href="/teacherlist/ahsan">ahsan </Link>
        </li>
        <li>
            <Link href="/teacherlist/afnan">afnana </Link>
        </li>

     </ul>
        </>
    )
}
export default TeacherList;