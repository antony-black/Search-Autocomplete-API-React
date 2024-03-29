export default function User({handleNameClick, users}) {
  return(
    <div className="user-container">
      <ul className="users-name">
      {users?.length
        ? users.map((user, index) => (
            <li onClick={(e) => handleNameClick(e,user)} key={index}>
              {user.firstName} {user.lastName}
            </li>
          ))
        : null}
    </ul>
    </div>
  )
}