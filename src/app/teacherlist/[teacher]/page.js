"use client"
const Teacher=({params})=>{
    console.log(params)
    return(
        <>
            <h1> Name:{params.teacher}</h1>
        </>
    )
}
export default Teacher