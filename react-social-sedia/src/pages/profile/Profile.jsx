import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
          <Topbar />
          <div className="profile">
              <Sidebar /> 
              <div className="profileRight">
                  <div className="profileRightTop">
                      <div className="profileCover">
                         <img src={`${PF}post/b.jpg`} alt="" className="profileCoverImg" />
                          <img src={`${PF}person/13.PNG`} alt="" className="profileUserImg" />  
                          <div className="profileInfo">
                              <h4 className="profileInfoName">Zeferu Hagos</h4>
                              <span className="profileInfoDesc">Hello my Friend's</span>
                          </div>
                      </div>
                     
                  </div>
                  <div className="profileRightBottom">
                      <Feed />
                     <Rightbar profile/>  
                  </div>
                
              </div>
              
          </div>
          
    </>
  )
  
}

export default Profile
