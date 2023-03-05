import logo from '../assets/logo.svg'
import Svg from './Svg'
import { LanguageButton } from './LanguageButton'
import DropdownMenu from './DropdownMenu'

// Create a sticky header component that will be used in the App component.
const Header = () => {
  return (
    <div className="w-100 px-7 py-4 sticky top-0 z-50 bg-slate-100 border-b-2 shadow-sm mb-5 md:px-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Svg svgFile={logo} style="w-14" />
          {/* <p className="text-violet-500 mx-4 text-4xl font-bold">Au Pair</p> */}
        </div>
        <div className="flex items-center">
          <div>
            <LanguageButton />
          </div>
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}

export default Header