import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './post.css'

export default function Post() {
  return (
      <div className="post">
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <img className="postProfileImg" src="/assets/person/1.jpg" alt=""/>
                      <span className="postUsername"> Safak kocaolu</span>
                      <span className="postDate"> 5 mins ago</span>
                  </div>
                  <div className="postTopRight">
                  <MoreVertIcon/>
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">Hey ! Its my first post:)</span>
                  <img   postImg="postImg"src="assets/person/4.jpg" alt=""/>
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img  className="likeIcon" src="assets/person/1.png" alt=""/>
                      <img  className="likeIcon" src="assets/person/2.png" alt=""/>
                      <span className="postLikeCounter"> 32 People Liked it</span>

                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">9 comments</span>

                  </div>
              </div>
            
          </div>
      </div>
  )
}
