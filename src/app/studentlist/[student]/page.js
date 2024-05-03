"use client"
import { redirect } from "next/navigation"
const Student = ({params}) => {
  redirect('/')
  return (
    <div>
    <h1>NAME:{params.student}</h1>
    </div>
  )
}

export default Student