import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const Share = () => {
  return (
    <div className="share">
          <div className="shareWraper">
              <div className="shareTop">
                  <img className="shareProfileImg" src="/assets/person/5.png" alt="" />
                  <input placeholder="What's in your mind Zeferu" className="shareInput"/>
              </div>
              <hr className="shareHr"/>
              <div className="shareBottom">
                  <div className="shareOpitions">
                      <div className="shareOpition">
                          <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                          <span className="shareOpitionText">Photo or Video</span>
                      </div>
                      <div className="shareOpition">
                          <LabelIcon htmlColor="blue" className="shareIcon"/>
                          <span className="shareOpitionText">Tag</span>
                      </div>
                      <div className="shareOpition">
                          <RoomIcon htmlColor="green" className="shareIcon"/>
                          <span className="shareOpitionText">Location</span>
                      </div>
                      <div className="shareOpition">
                          <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                          <span className="shareOpitionText">Feelings</span>
                      </div>
                      <button className="shareButton">Share</button>
                  </div>
                  
              </div>
      </div>
    </div>
  )
}

export default Share
