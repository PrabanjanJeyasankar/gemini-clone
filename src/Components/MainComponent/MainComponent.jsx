import React, { useContext } from 'react'
import './MainComponent.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

function MainComponent() {
  const {
    onSent,
    input,
    setInput,
    showResult,
    recentPrompt,
    resultData,
    loading,
  } = useContext(Context)

  return (
    <React.Fragment>
      <div className='main'>
        <div className='nav-bar'>
          <p className='gemini-title'>Gemini</p>
          <img
            src={assets.user_icon}
            alt='user-profile'
            className='user-profile'
          />
        </div>
        <div className='main-container'>
          {!showResult ? (
            <>
              <div className='greet'>
                <p>
                  <span>Hello, Prabanjan</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className='cards'>
                <div className='card'>
                  <p>Compare the differences between pickleball and tennis</p>
                  <img
                    src={assets.bulb_icon}
                    alt='bulb_icon'
                  />
                </div>
                <div className='card'>
                  <p>Generate unit tests for the following C# function</p>
                  <img
                    src={assets.code_icon}
                    alt='code_icon'
                  />
                </div>
                <div className='card'>
                  <p>Settle a debate: how should you store bread?</p>
                  <img
                    src={assets.bulb_icon}
                    alt='bulb_icon'
                  />
                </div>
                <div className='card'>
                  <p>Give me tips to help care for a tricky plant</p>
                  <img
                    src={assets.compass_icon}
                    alt='compass_icon'
                  />
                </div>
              </div>
            </>
          ) : (
            <div className='result'>
              <div className='result-title'>
                <img
                  src={assets.user_icon}
                  alt='user_icon'
                />
                <p>{recentPrompt}</p>
              </div>
              <div className='result-data'>
                <img
                  src={assets.gemini_icon}
                  alt='gemini_icon'
                />
                {loading ? (
                  <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                )}
              </div>
            </div>
          )}

          <div className='main-bottom'>
            <div className='prompt-box'>
              <input
                onChange={(event) => setInput(event.target.value)}
                value={input}
                type='text'
                placeholder='Enter a prompt here'
              />
              <div>
                <img
                  src={assets.gallery_icon}
                  alt='gallery_icon'
                />
                <img
                  src={assets.mic_icon}
                  alt='mic_icon'
                />
                <img
                  src={assets.send_icon}
                  onClick={() => onSent()}
                  alt='send_icon'
                />
              </div>
            </div>
            <p className='bottom-info'>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy & Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainComponent
