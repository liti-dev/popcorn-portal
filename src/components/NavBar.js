import { useState } from "react"

import Search from "./Search"
import Logo from "./Logo"

export default function NavBar({ children }) {
  const [query, setQuery] = useState("")

  return <nav className="nav-bar">{children}</nav>
}
