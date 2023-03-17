import logo from '../assets/logo.svg'
import Svg from './Svg'
import { LanguageButton } from './LanguageButton'
import DropdownMenu from './DropdownMenu'

// Create a sticky header component that will be used in the App component.
const Header = () => {
  return (
    <div className="w-100 py-4 sticky top-0 z-50 bg-slate-100 border-b-2 shadow-sm mb-5">
      <div className="flex justify-between items-center max-w-screen-2xl m-auto">
        <div className="flex items-center mx-20 max-sm:mx-3">
          <a href='/#root'>
            <Svg svgFile={logo} style="w-14" />
          </a>
        </div>
        {/* <div className="flex items-center w-fit md:mr-12 lg:mr-12 xl:mr-12"> */}
        <div className="flex items-center w-fit mx-20 max-sm:mx-3">
          <LanguageButton />
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}

export default Header