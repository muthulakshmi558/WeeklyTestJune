import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      <Link className="navbar-brand fs-3 fw-bold" to="/">🍽️ RecipeApp</Link>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">🏠 Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/recipes" className="nav-link">📋 Recipes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add" className="nav-link">➕ Add</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
