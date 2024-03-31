import React, { createContext, useState } from 'react'
import runChat from '../config/gemini'

export const Context = createContext()

const ContextProvider = (props) => {
  const [input, setInput] = useState('')
  const [recentPrompt, setRecentPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [resultData, setResultData] = useState('')
  const [previousPrompts, setPreviousPrompts] = useState([])

  const delayedPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord)
    }, 75 * index)
  }

  const newChat = ()=>{
    setLoading(false)
    setShowResult(false)
  }
  const onSent = async (prompt) => {
    setResultData('')
    setLoading(true)
    setShowResult(true)
    let response
    if (prompt !== undefined) {
      response = await runChat(prompt)                        
      setRecentPrompt(prompt)
    } else {
      setPreviousPrompts(prev=> [...prev, input])
      setRecentPrompt(input)
      response = await runChat(input)
    }
    // const response = await runChat(input)

    let responseArray = response.split('**')
    let newResponse = ''
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0) {
        newResponse += responseArray[i]
      } else {
        newResponse += '<b>' + responseArray[i] + '</b>'
      }
    }
    let newResponse2 = newResponse.split('*').join('<br/>')

    let typingEffectResponse = newResponse2.split(' ')
    for (let i = 0; i < typingEffectResponse.length; i++) {
      const nextWord = typingEffectResponse[i]
      delayedPara(i, nextWord + ' ')
    }

    setLoading(false)
    setInput('')
  }

  //   onSent('Do you think you can replace Humans?')

  const contextValue = {
    input,
    setInput,
    onSent,
    recentPrompt,
    setRecentPrompt,
    previousPrompts,
    setPreviousPrompts,
    showResult,
    loading,
    resultData,
    newChat
  }

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}

export default ContextProvider
