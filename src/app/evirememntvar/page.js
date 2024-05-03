import  API_BASE_URL from "@/config/constant"
export default function EnivermentVar(){

    console.log(process.env.SET)
    return(
       <main>
        {
            process.env.NODE_ENV=="development"?

            <h1>you are in development mode </h1>:
            <h1>you are in production mode </h1>
        }

            <h1>showed the enviremental variable </h1>


           <h1>{
                API_BASE_URL
            }</h1> 
            </main>
    )
}