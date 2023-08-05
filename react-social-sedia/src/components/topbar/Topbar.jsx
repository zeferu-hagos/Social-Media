import "./topbar.css"
import SearchIcon  from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <>
    <div className="topbarContainer">

        <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="Logo">Zeferu-Media</span>
          </Link>
        
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon"/>
          <input placeholder="Search for Friend, Post or Video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          </div>
          <img src="/assets/person/4.PNG" alt="" className="topbarImg" />
      </div>
      </div>
      </>
  )
}

export default Topbar
