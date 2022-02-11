import React from 'react';
import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
      <div className="share">
          <div className="shareWrapper">
              <div className="shareTop">
                  <img  className="shareProfileImg" src="/assets/person/3.jpg" alt=""/>
                  <input placeholder="What's on your mind safak ?" className="shareInput"/>

              </div>
              <hr className="shareHr"/>
              <div className="shareBottom">
                  <div className="shareOptions">
                      <div className="shareOption">
                          <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                          <span className="shareOptionText">Photo/Video</span>
                      </div>
                      <div className="shareOption">
                          <LabelIcon  htmlColor="blue" className="shareIcon"/>
                          <span className="shareOptionText">Tag</span>
                      </div>
                      
                      <div className="shareOption">
                          <FamilyRestroomIcon  htmlColor="green" className="shareIcon"/>
                          <span className="shareOptionText">Location</span>
                      </div>
                      
                      <div className="shareOption">
                          <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                          <span className="shareOptionText">Feelings</span>
                      </div>
                      
                      

                  </div>
                  <button className="shareButton">Share</button>

              </div>

          </div>

      </div>
  )
}
