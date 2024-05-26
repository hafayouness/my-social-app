import "./online.css"

export default function online({user}) {
  return (
    <div  >
      <ul className="rightbarFriendLIst">
              <li className="contact">
                <div className="rightbarContainer">
                  <img
                    className="contactImg"
                    src={user.profilePicture}
                    alt=""
                    srcset=""
                  />
                  <span className="onlineCircle"> </span>
                </div>
                <span className="contactName"> {user.username}</span>
              </li> 
      </ul>
     
    </div>
  )
}
