import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Rightbarprofile from "../../components/rightbarprofile/Rightbarprofile";
import SidebarProfile from "../../components/sidebarProfile/SidebarProfile";
import {
  CameraAlt,
  ExpandMore,
  Add,
  ModeEdit,
  MoreHoriz,
} from "@mui/icons-material";

export default function profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="containerProfileHeader">
          <div className="containerheader">
            <img className="imgprofile" src="./assets/post/3.jpeg" alt="" />
            <div className="headerProfile">
              <div className="profileBarCover">
                <img
                  src="./assets/person/1.jpeg"
                  className="imgProfileUser"
                  alt=""
                />
                <CameraAlt className="imgIcon" />
              </div>
              <div className="profileInfo">
                <ul className="information">
                  <li className="profileName"> Safak Kocaloglu</li>
                  <li className="profileAmie"> 682 ami(e)s</li>
                </ul>
              </div>
              <div className="profileBotton">
                <div className="ajoutBotton">
                  <Add />
                  <span>Ajouter à story</span>
                </div>

                <div className="modifieBotton">
                  <ModeEdit />
                  <span> Modifier le profil </span>
                </div>
                <div className="iconBottom">
                  <ExpandMore className="iconProfile" />
                </div>
              </div>
            </div>
            <div className="containerbody">
              <hr className="sidebarHr" />
              <div className="infoBody">
                <div className="headerinfo">
                  <div className="Headerinfo">
                    <ul className="listInfo">
                      <li className="infoPub">Publication</li>
                      <li className="info"> À propos</li>
                      <li className="info"> Ami(e)s </li>
                      <li className="info"> Photos</li>
                      <li className="info"> Vidèos</li>
                      <li className="info"> Reels</li>
                      <li className="infoPlus">
                        Plus <ExpandMore className="iconPlus" />
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="inconInfobody">
                  <MoreHoriz />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="containerBody containerbody">
          <SidebarProfile />
          <Rightbarprofile />
        </div>
      </div>
    </>
  );
}
