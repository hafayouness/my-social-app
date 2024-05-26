import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar() {
  // const [homePage, sethomePage] = useState(false);
  // const [profilepage, setProfilePage] = useState(false);
  // const homePageHandler = () => {
  //   sethomePage(true);
  // };
  // const profileHandler = () => {
  //   setProfilePage(true);
  // };

  return (
    <div className="topcontainer">
      <div className="topleft">
        <span className="logo">SocialApp</span>
      </div>
      <div className="topcenter ">
        <div className="searchbar">
          <Search className="topbarSearch" />
          <input
            placeholder="Search for friends,post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topRight">
        <Link className="topbarlinks">
          <Link to="/" className="topbarlink">
            Home
          </Link>
          <Link to="/profile" className="topbarlink">
            Profile
          </Link>
        </Link>

        <div className="topbarIcons">
          <div className="topbarIconitem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconitem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconitem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
