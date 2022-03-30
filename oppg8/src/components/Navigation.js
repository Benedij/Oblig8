import { Routes } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul> 
          <li>
            <Routes to="Movies">Movies</Routes>
          </li>
          <li>
            <Routes to="Actor">Produkter</Routes>
          </li>
        </ul>
      </nav>
    </header>
  )
}