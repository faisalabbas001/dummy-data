"use client"
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
const About=()=>{
    const router=useRouter()

    redirect('/')
const Data=(name)=>{
    router.push(name)
}
    return(
        <>
            <h1>about page </h1>
            <button onClick={()=>Data("./contact")}>go to the contact page </button>
        </>
    )
}

export default About;