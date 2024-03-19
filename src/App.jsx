import React from "react";
import { useState, useEffect } from "react";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import Refresh from "./components/Refresh";
import "./index.scss";

export default function App() {
  const [isLoadig, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  const fetchUsersData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();

      if (data?.users?.length > 0) {
        setUserData(data.users);
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
          ? userData.filter(user => user.firstName.toLowerCase().includes(value))
          : [];

      setFilteredUsers(users);
    } else {
        setFilteredUsers('');
    }
  }

  const handleNameClick = (e, user) => {
    setFilteredUsers([]);
    setSearchValue(e.target.innerText)
    setShowUserInfo(true);
    setSelectedUser(user);
  }

  const handleRefresh = () => {
    setFilteredUsers([]);
    setSearchValue('')
    setShowUserInfo(false);
    setSelectedUser(null);
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
     <Refresh handleRefresh={handleRefresh}/>
    </div>
    <div className="user">
      {
        showUserInfo 
            ? <UserInfo user={selectedUser}/>
            : <User users={filteredUsers} handleNameClick={handleNameClick}/>
      }
    </div>
  </div>;
}