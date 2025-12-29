import {  useState } from "react";

export default function Users() {
  const [usersList, setUsersList] = useState([]);
  const [pending ,setPending]=useState(false)

  async function fetchAllUsers() {
    try {
      setPending(true)
      const apiResponse = await fetch("https://dummyjson.com/users");
      const data = await apiResponse.json();

      if (data?.users) {
        setUsersList(data.users);
        setPending(false)
      } else {
        setUsersList([]);
        setPending(false)
      }
      // setUsersList(data);
    } catch (e) {
      console.log(e);
    }
  }

  // function handleFetchListOfUsers(){
  //   fetchAllUsers();
  // }

  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  console.log(usersList);

  if(pending){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>All users List</h1>
      <button onClick={fetchAllUsers}>Fetch Users List</button>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((userItem) => (
            <li key={userItem.id}>
              <p>
                {userItem?.firstName} {userItem?.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1>No users found! Please try again</h1>
        )}
      </ul>
    </div>
  );
}
