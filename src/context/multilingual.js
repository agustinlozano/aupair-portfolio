import { createContext } from 'react'
import { welcomeCnt } from './translation.js'

export const LanguageContext = createContext(welcomeCnt.english)