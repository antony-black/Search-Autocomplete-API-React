export default function UserInfo({user}) {
  return(
     <div className="user-container">
      <p className="first-name">{`First name: ${user.firstName}`}</p>
      <p className="last-name">{`Last name: ${user.lastName}`}</p>
      <p className="username">{`Username: ${user.username}`}</p>
      <p className="age">{`Age: ${user.age}`}</p>
      <p className="phone">{`Phone: ${user.phone}`}</p>
      <p className="email">{`Email: ${user.email}`}</p>
    </div>
  )
}