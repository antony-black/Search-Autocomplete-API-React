export default function User({handleNameClick, users}) {
  // const [firstName, lastName, username, age, phone, email] = userData;
  
  return(
    <div className="user-container">
      <ul>
      {users?.length
        ? users.map((item, index) => (
            <li onClick={handleNameClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
    </div>
    // <div className="user-container">
    //   <p className="first-name">{`First name: ${firstName}`}</p>
    //   <p className="last-name">{`Last name: ${lastName}`}</p>
    //   <p className="username">{`Username: ${username}`}</p>
    //   <p className="age">{`Age: ${age}`}</p>
    //   <p className="phone">{`Phone: ${phone}`}</p>
    //   <p className="email">{`Email: ${email}`}</p>
    // </div>
  )
}