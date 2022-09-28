import "./Navbar.css"

export default function Navbar(props) {
  return (
    <nav>
      <h2 className="nav-title">Youser</h2>
      <button className="nav-btn" onClick={props.handleClick} >
        Get Users
      </button>
    </nav>
  )
}
