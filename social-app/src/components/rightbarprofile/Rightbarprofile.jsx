import "./rightbarprofile.css";
import {
  PhotoLibrary,
  VideoCameraBack,
  Tune,
  Settings,
  FormatListBulleted,
  GridView,
} from "@mui/icons-material";
import Postprofile from "../postProfile/Postprofile";
import { Posts } from "../../dummyData";

export default function Rightbarprofile() {
  return (
    <div className="rightbarprofile">
      <div className="box">
        <div className="boxSearch">
          <img
            src="./assets/person/1.jpeg"
            alt=""
            srcset=""
            className="imgProfile"
          />
          <input
            className="inputsearch"
            type="text"
            placeholder="Que voulez-vous dire ?"
          />
        </div>
        <hr className="dashbar" />
        <div className="boxoption">
          <div className="boxvideo">
            <VideoCameraBack className="icon" />
            <span className="placeholder"> Video en direct </span>
          </div>
          <div className="boxphotos">
            <PhotoLibrary className="icon" />
            <span className="placeholder">Photo / video </span>
          </div>
        </div>
      </div>
      <div>
        <div className="boxpublication">
          <div className="boxPub">
            <div>
              <span className="pub"> Publications</span>
            </div>

            <div className="rightbox">
              <div className="boxfilter BOXp">
                <Tune className="iconPub" />
                <span className="filterspan">Filtres</span>
              </div>
              <div className="boxGererPub  BOXp">
                <Settings className="iconPub" />
                <span className="Gerespan">Gérer les Publications</span>
              </div>
            </div>
          </div>
          <hr className="dashBar" />
          <div className="boxVue ">
            <div className="line">
              <div className="Vuelist  line">
                <FormatListBulleted />
                <span>Vue Liste</span>
              </div>
            </div>

            <div className="VueGrille">
              <GridView />
              <span> Vue Grille</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {Posts.map((p) => (
          <Postprofile key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
