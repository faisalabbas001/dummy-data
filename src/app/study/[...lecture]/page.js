"use client"
const Lecture=({params})=>{
    return(
        <>
        <h1>  name:{params.lecture[0]}</h1>
        <h1> day:{params.lecture[1]}</h1>

        </>
    )
}

export default Lecture;