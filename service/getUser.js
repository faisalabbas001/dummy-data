export default async function UserData(){
    const data=await fetch("https://jsonplaceholder.typicode.com/users");
    return data.json();
}