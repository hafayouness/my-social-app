import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  Person2,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Users } from "../../dummyData";
import CloseFriend from "../../components/closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarlistItem">
            <Person2 className="sidebarItemIcon" />
            <Link to="/profile" className="sidebarLiatItemText">
              Profile
            </Link>
          </li>
          <li className="sidebarlistItem">
            <RssFeed className="sidebarItemIcon" />
            <span className="sidebarLiatItemText"> Feed</span>
          </li>
          <li className="sidebarlistItem">
            <Chat className="sidebarItemIcon" />
            <span className="sidebarLiatItemText"> Chat</span>
          </li>
          <li className="sidebarlistItem">
            <PlayCircle className="sidebarItemIcon" />
            <span className="sidebarLiatItemText">Videos</span>
          </li>
          <li className="sidebarlistItem">
            <Group className="sidebarItemIcon" />
            <span className="sidebarLiatItemText"> Groupes</span>
          </li>
          <li className="sidebarlistItem">
            <Bookmark className="sidebarItemIcon" />
            <span className="sidebarLiatItemText"> Bookmarks</span>
          </li>
          <li className="sidebarlistItem">
            <HelpOutline className="sidebarItemIcon" />
            <span className="sidebarLiatItemText">Questions</span>
          </li>
          <li className="sidebarlistItem">
            <WorkOutline className="sidebarItemIcon" />
            <span className="sidebarLiatItemText">Jobs</span>
          </li>
          <li className="sidebarlistItem">
            <Event className="sidebarItemIcon" />
            <span className="sidebarLiatItemText"> Event</span>
          </li>
          <li className="sidebarlistItem">
            <School className="sidebarItemIcon" />
            <span className="sidebarLiatItemText"> Courses</span>
          </li>
        </ul>

        <button className="sidebarButton"> Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
