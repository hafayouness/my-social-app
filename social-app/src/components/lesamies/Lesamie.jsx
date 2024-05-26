import "./lesamie.css";

export default function Lesamie({ user }) {
  return (
    <div className="boxlesamis">
      <img className="photoAmieProfile" src={user.profilePicture} alt="" />
      <p className="username">{user.username} </p>
    </div>
  );
}
