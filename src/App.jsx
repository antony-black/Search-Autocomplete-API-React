import React from "react";
import { useState, useEffect } from "react";
import User from "./components/User";
import "./index.scss";

export default function App() {
  const [isLoadig, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);


  const fetchUsersData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();

      console.log(data.users.map(user => user.firstName));

      if (data?.users?.length > 0) {
        setUserData(data.users.map(user => user.firstName));
        setLoading(false);
      }
    } catch(e){
      console.log('Error !!!!', e);
      setLoading(false);
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);

    if (value !== '') {
      const users = userData.length 
          ? userData.filter(name => name.toLowerCase().includes(value))
          : [];

      setFilteredUsers(users);
    } else {
        setFilteredUsers('');
    }
  }

  const handleNameClick = (e) => {
    setFilteredUsers([]);
    setSearchValue(e.target.innerText)
  }

  useEffect(() => {
    fetchUsersData();
  },[])


  if (isLoadig) {
    return <div>...loading</div>;
  }
  
  return <div className="main-container">
    <div className="input-container">
     <input 
     name="search-name" 
     type="text" 
     placeholder="Start to enter a name..."
     value={searchValue}
     onChange={handleInputChange}
     />
    </div>
    <div className="user">
      {userData && <User users={filteredUsers} handleNameClick={handleNameClick}/>}
    </div>
  </div>;
}