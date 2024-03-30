import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './SideBarComponent.css'

function SideBarComponent() {
  const [extendSideBar, setExtendSideBar] = useState(true)

  const handleExtended = () => {
    setExtendSideBar(!extendSideBar)
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
            {extendSideBar ? <p>New chat</p> : null}
          </div>
          {extendSideBar ? (
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
            {extendSideBar ? <p>Help</p> : null}
          </div>
          <div className='bottom-item recent-entry'>
            <img
              src={assets.history_icon}
              alt='history_icon'
            />
            {extendSideBar ? <p>Activity</p> : null}
          </div>
          <div className='bottom-item recent-entry'>
            <img
              src={assets.setting_icon}
              alt='setting_icon'
            />
            {extendSideBar ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SideBarComponent
