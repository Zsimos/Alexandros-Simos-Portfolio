import { Navlink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
          <Navlink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center
              flex font-bold shadow-md">
          <p className='blue-gradient_text'>AS</p>
      </Navlink>
      <nav className="flex text-lg gap-7 font-medium">
              <Navlink to="/about" className={({ isActive }) => isActive ?
                  'text-blue-500' : 'text-black'}>
                  About
              </Navlink>
              <Navlink to="/projects" className={({ isActive }) => isActive ?
                  'text-blue-500' : 'text-black'}>
                  Projects
              </Navlink>
          </nav>
        </header>

  )
}

export default Navbar
