import { useContext } from 'react'
import { LanguageContext } from '../context/multilingual'

export const LanguageButton = () => {
  const { language, toggleLanguage } = useContext(LanguageContext)

  return (
    <button
      onClick={toggleLanguage}
      className="bg-cyan-500 text-slate-200 border-2 border-cyan-400 px-4 py-1 mx-2 rounded-md"
    >
      {language}
    </button>
  )
}