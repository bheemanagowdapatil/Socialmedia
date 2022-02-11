import React from 'react';
import './rightbar.css'
;


export default function rightbar() {
  return (
      <div className="rightbar" >
          <div className="rightbarWrapper">
            <div className="birthdayContainer">
              <img  className="birthdayImg" src="assets/person/1.jpg" alt=""/>
              <span className="birthdayText"> 
          

              <b>Pola Foster</b> and <b> 3 other friends</b> have a birthday today
              </span>
            </div>
            <img className="rightbarAD" src="assets/person/6.jpg" alt="" />
            <h4 className="rightbarTitle"> Online Friends</h4>
            <ui className="rightbarFriendList">
              <li className="rightBarFriend">
                <div className="rightbarProfileImgContainer">
                  <img  className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                  <span className="rightbarOnline" ></span>
                </div>
                <span className="rightbarUsername"> John Carter</span>

              </li>
              <li className="rightBarFriend">
                <div className="rightbarProfileImgContainer">
                  <img  className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                  <span className="rightbarOnline" ></span>
                </div>
                <span className="rightbarUsername"> John Carter</span>

              </li>
              <li className="rightBarFriend">
                <div className="rightbarProfileImgContainer">
                  <img  className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                  <span className="rightbarOnline" ></span>
                </div>
                <span className="rightbarUsername"> John Carter</span>

              </li>
              <li className="rightBarFriend">
                <div className="rightbarProfileImgContainer">
                  <img  className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                  <span className="rightbarOnline" ></span>
                </div>
                <span className="rightbarUsername"> John Carter</span>

              </li>
              <li className="rightBarFriend">
                <div className="rightbarProfileImgContainer">
                  <img  className="rightbarProfileImg" src="assets/person/1.jpeg" alt="" />
                  <span className="rightbarOnline" ></span>
                </div>
                <span className="rightbarUsername"> John Carter</span>

              </li>
            </ui>
          </div>
      </div>
  )
}
