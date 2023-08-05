import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css';
import axios from "axios"
//import { Posts } from '../../dummyData' ;

const Feed = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [posts, setPosts] = useState([]);
  

  useEffect((e) => {
    const  getPosts = async () => {
      const res = await axios.get(`${BASE_URL}posts/`);
      setPosts(res.data.likes)
    }
console.log("Base URL:", BASE_URL)
    if(!!BASE_URL) getPosts()
  }, [BASE_URL]);
  return (
   
    <div className='feed'>
      <div className="feedWraper">
        <Share />
       {posts.map((p) => (
          <Post key={p.id} post1={p} />
      ))}
        
        
      </div>
      </div>
   
  )
}

export default Feed
