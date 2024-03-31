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
  
  const onSent = async (prompt) => {
    setResultData('')
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    const response = await runChat(input)
    setResultData(response)
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
  }

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}

export default ContextProvider
