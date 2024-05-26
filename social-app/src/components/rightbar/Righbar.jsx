import "./rightbar.css";
import {
  Videocam,
  Search,
  MoreHoriz,
  Groups,
  ControlPoint,
} from "@mui/icons-material";
import Online from "../../components/online/Online"
import { Users } from "../../dummyData";

export default function Rightbar() {
  return (
    <div className="right">
      <div className="rightbarWrapper">
        <div className="addbirthday">
          <h3 className="headerAnnif">Anniversaires</h3>
          <div className="birthday">
            <img
              className="birthdayimg"
              src="./assets/gift.png"
              alt=""
              srcset=""
            />
            <span className="birthdayText">
              <b>zakaria sobahi</b> and <b>3 other friends </b> have a birthday
              today.
            </span>
          </div>
        </div>
        <hr className="sidebarHr" />
        <div>
          <h3 className="headerspons">Sponsorisé</h3>

          <div className="packsponsor">
            <img
              className="rightBarAd"
              src="./assets/ad.png"
              alt=""
              srcset=""
            />
            <span className="sponsorText">Subscribe to our Instagram!</span>
          </div>
        </div>

        <hr className="sidebarHr" />
        <div className="contactes">
          <div className="packContact">
            <h3 className="headerspons">Contacts</h3>
            <div className="iconContact">
              <Videocam className="videocam circle" />
              <Search className="search circle" />
              <MoreHoriz className="moreHoriz circle" />
            </div>
          </div>
          <div>
            <ul className="rightbarFriendLIst">
             {Users.map(u => (
              <Online key={u.id} user = {u}/>

             ))}
            </ul>
          </div>

          <hr className="sidebarHr" />

          <div className="groups">
            <h3 className="headercover">Conversations de groupe</h3>
            <div className="groupe">
              <Groups className="icongroups" />
              <span className="nameGroups">الأساطيير 👌</span>
            </div>
            <div className="groupe">
              <Groups className="icongroups" />
              <span className="nameGroups">lizandianes 🔥</span>
            </div>
            <div className="groupe">
              <ControlPoint className="icongroups" />
              <span className="nameGroups"> Créer un nouveau groupe </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
