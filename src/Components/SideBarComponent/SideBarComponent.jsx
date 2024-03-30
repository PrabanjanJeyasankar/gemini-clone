import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './SideBarComponent.css'

function SideBarComponent() {
  const [extendedSideBar, setExtendedSideBar] = useState(false)

  const handleExtended = () => {
    setExtendedSideBar(!extendedSideBar) 
  }
  return (
    <React.Fragment>
      <div className='side-bar'>
        <div className='top'>
          <img
            onClick={handleExtended}
            src={assets.menu_icon}
            alt='menu-icon'
            className='menu-icon'
          />
          <div className='new-chat'>
            <img
              src={assets.plus_icon}
              alt='plus-icon'
            />
            {extendedSideBar ? <p>New chat</p> : null}
          </div>
          {extendedSideBar ? (
            <div className='recent'>
              <p className='recent-title'>Recent</p>
              <div className='recent-entry'>
                <img
                  src={assets.message_icon}
                  alt='message-icon'
                  className='message-icon'
                />
                <p>What is react...</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className='bottom'>
          <div className='bottom-item recent-entry'>
            <img
              src={assets.question_icon}
              alt='question_icon'
            />
            {extendedSideBar ? <p>Help</p> : null}
          </div>
          <div className='bottom-item recent-entry'>
            <img
              src={assets.history_icon}
              alt='history_icon'
            />
            {extendedSideBar ? <p>Activity</p> : null}
          </div>
          <div className='bottom-item recent-entry'>
            <img
              src={assets.setting_icon}
              alt='setting_icon'
            />
            {extendedSideBar ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SideBarComponent
