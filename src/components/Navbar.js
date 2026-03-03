import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import './style.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <h2>TravelZone</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tours">Tours</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar