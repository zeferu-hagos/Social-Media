import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
const Rightbar = ({ profile }) => {

  const HomeRightBar = () => {
    
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="brithdayText"><b>Zeferu hagos</b> and 3 <b>other friends</b> have a birth day today.</span>
        </div>
        <img src="/assets/family.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarinfoKey">City:</span>
            <span className="rightbarinfoValue">Mekelle</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarinfoKey">From:</span>
            <span className="rightbarinfoValue">Tigray</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarinfoKey">Relationship</span>
            <span className="rightbarinfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.PNG`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Negassi Haile</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.PNG`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Negassi Haile</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.PNG`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Negassi Haile</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.PNG`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Negassi Haile</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.PNG`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Negassi Haile</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.PNG`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Negassi Haile</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className='rightbar'>
      <div className="rightbarWraper">
        {profile ? <ProfileRightbar/> : <HomeRightBar/> }
      </div>
    </div>
  )
}

export default Rightbar
