import "./postprofile.css";
import { MoreHoriz } from "@mui/icons-material";

export default function Postprofile() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="./assets/post/1.jpeg"
              alt=""
              srcset=""
              className="postProfile"
            />
            <span className="postUserName"> youness ahfa</span>
            <span className="postData"> 11pm</span>
          </div>
          <div className="postTopRight">
            <MoreHoriz />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> zen </span>
          <img src="./assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postButton">
          <div className="postButtomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              alt=""
              // onClick={likeHandler}
              srcset=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              alt=""
              // onClick={likeHandler}
              srcset=""
            />
            <span className="postlikecounter">32 people like it </span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText"> 4 comment </span>
          </div>
        </div>
      </div>
    </div>
  );
}
