import React from 'react';
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import SchoolIcon from '@mui/icons-material/School';



export default function Sidebar() {
  return (
      <div className="sidebar">
          <div className="sidabarWrapper">
          <ul className="sidebarList">
              <li className="sidebarListItem">
                  <RssFeedIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">
                      feed

                  </span>
              </li>
              <li className="sidebarListItem">
                  <ChatIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">
                      chat

                  </span>
              </li>
              <li className="sidebarListItem">
                  <SwitchVideoIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">
                    Video

                  </span>
              </li>
              <li className="sidebarListItem">
                  <GroupsIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">
                      Gropups

                  </span>
              </li>
              <li className="sidebarListItem">
                  <BookmarksIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">
                  BookmarksIcon

                  </span>
              </li>
              <li className="sidebarListItem">
                  <HelpOutlineIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">
                      Quetions

                  </span>
              </li>
              <li className="sidebarListItem">
                  <WorkIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">
                      job

                  </span>
              </li>
              <li className="sidebarListItem">
                  <InsertInvitationIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">
                      Events

                  </span>
              </li>
              <li className="sidebarListItem">
                  <SchoolIcon className="sidebarIcon"/>
                  <span className="sidebarListItemText">
                      Courses

                  </span>
              </li>

          </ul>
          <button className="sidebarButton"> Show more</button>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
              <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="assets/person/2.jpg" alt=""/>
                  <span className="sidebarFriendName"> jon doe</span>
              </li>
              <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="assets/person/2.jpg" alt=""/>
                  <span className="sidebarFriendName"> jon doe</span>
              </li>
              <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="assets/person/2.jpg" alt=""/>
                  <span className="sidebarFriendName"> jon doe</span>
              </li>
              <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="assets/person/2.jpg" alt=""/>
                  <span className="sidebarFriendName"> jon doe</span>
              </li>
              <li className="sidebarFriend">
                  <img className="sidebarFriendImg" src="assets/person/2.jpg" alt=""/>
                  <span className="sidebarFriendName"> jon doe</span>
              </li>
          </ul>
          </div>
         
      </div>
  )
}
