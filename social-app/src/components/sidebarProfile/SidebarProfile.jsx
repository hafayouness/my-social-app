import "./sidebarProfile.css";
import { Users } from "../../dummyData";
import Lesamie from "../lesamies/Lesamie";

export default function SidebarProfile() {
  return (
    <div className="sidebarProfile">
      <div className="introbox">
        <span className="introtitre">Intro</span>
        <ul className="introBottum">
          <li className="introlist"> Ajouter une bio</li>
          <li className="introlist"> Modifier les infos</li>
          <li className="introlist"> Ajouter des loisirs</li>
          <li className="introlist">Ajouter du contenu à la une </li>
        </ul>
      </div>
      <div className="photosbox">
        <div className="photosProfile">
          <div className="headerPhotos">
            <h3 className="titreHeader">Photos</h3>
            <p className="paragrafHeader">Toutes les photos</p>
          </div>
          <div className="Pictures">
            <div className="photos ">
              <img
                className="photo  photo1"
                src="./assets/person/1.jpeg"
                alt=""
              />
              <img className="photo" src="./assets/person/1.jpeg" alt="" />
              <img
                className="photo photo3"
                src="./assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="photos ">
              <img className="photo" src="./assets/person/1.jpeg" alt="" />
              <img className="photo" src="./assets/person/1.jpeg" alt="" />
              <img className="photo" src="./assets/person/1.jpeg" alt="" />
            </div>
            <div className="photos ">
              <img
                className="photo photo4"
                src="./assets/person/1.jpeg"
                alt=""
              />
              <img className="photo" src="./assets/person/1.jpeg" alt="" />
              <img
                className="photo photo5"
                src="./assets/person/1.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="Amiebox">
            <div className="headerAmie">
              <div className="titreAmi">
                <h3 className="titreHeaderAmi"> Ami(e)s</h3>
                <p>692 ami(e)s</p>
              </div>
              <p className="paragraphAmi">Tou(te)s les ami(e)s</p>
            </div>
            <div className="lesAmie">
              {Users.map((u) => (
                <Lesamie key={u.id} user={u} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        Confidentialité · Conditions générales · Publicités · Choix
        publicitaires · Cookies · plus · Meta © 2023
      </footer>
    </div>
  );
}
