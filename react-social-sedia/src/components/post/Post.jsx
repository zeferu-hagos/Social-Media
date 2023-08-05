import { useState,useEffect } from "react";
//import { Users } from "../../dummyData";
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";

const Post = ({ post1}) => {
    const [like, setLike] = useState(post1.like);
    const [isliked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    useEffect((e) => {
        const  getUsers = async () => {
          const res = await axios.get(`users/${post1.userId}`);
          setUser(res.data.like);
        }
    console.log("Base URL:", BASE_URL)
        if(!!BASE_URL) getUsers()
    }, []);
    

    const likeHandler = () => {
        setLike(isliked ? like - 1 : like + 1);
        setIsLiked(!isliked)
    }
  return (
    <div className="post">
          <div className="postWraper">
              <div className="postTop">
                  <div className="postTopLeft">
                
                      {/* src={Users.filter((u)=>u.id === post1?.userId)[0]?.profilePicture}
                      {Users.filter((u) => u.id === post1.userId)[0].username}
                      */}
                      <img
                          alt=""
                          className="postProfileImg"
                          src={user.profilePicture}
                        />
                      <span className="postUsername">
                          {user.username}
                      </span>
                      <span className="postDate">{post1.date}</span>
                  </div>
                  <div className="postTopRight">
                      <MoreVertIcon/>
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">{post1?.desc }</span>
                  <img src={PF+post1.photo} alt="" className="posting" />
              </div>
              <div className="postBottom">
                  <div className="postBootomLeft">
                      <img src={`${PF}like.png`} onClick={likeHandler} alt="" className="likeIcon" />
                      <img src={`${PF}heart.jpg`} onClick={likeHandler} alt="" className="likeIcon" />
                      <span className="postLikeCounter">{like} people like it</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">{post1.comment} comments</span>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Post
