"use client"

const { default: Link } = require("next/link")

const NotFound=()=>{
return(
    <>
<h1>off the page is not found please :   <Link href="../about">go about</Link></h1>
    </>
)
}

export default NotFound