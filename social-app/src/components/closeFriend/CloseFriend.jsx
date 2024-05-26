import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <div>
      <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src={user.profilePicture}
              alt=""
            />
            <span className="sidebarFriendName">{user.username}</span>
          </li>
      </ul>
      
    </div>
  )
}
