import getUsers from "../../../../service/getUser";

export default async function Page(props) {
    const userList = await getUsers(); // Corrected: Call the function to get the user list
    const currentId = props.params.userid;
    const userData = userList[currentId - 1];
    console.log(userData);

    return (
        <div>
            <h3>User detail page</h3>
            <h4>{userData.id}</h4>
            <h4>{userData.name}</h4>
            <h4>{userData.website}</h4>
        </div>
    );
}

export async function generateStaticParams() {
    const userList = await getUsers();
    return userList.map(user => ({
        userid: user.id.toString()
    }));
}
