import { NavLink } from "react-router-dom"; 

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/'>Log In</NavLink>
        </li>
        <li>
        <NavLink to='/singup'>Sin Up</NavLink>
        </li>
        <li>
        <NavLink to='/home'>Home</NavLink>
        </li>
      </ul>
    </div> 
  )
}
