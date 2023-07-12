import LOGO from './assets/LOGO.png'
import CartWidget from "../cartWidget/cartWidget"
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="nav">
            <Link to='/'><img src={LOGO} alt="Logo" className="logo"></img></Link>
            <h1 className="brand">Mulita</h1>
            <div className="menu">
                <NavLink to={`/category/botanicas`} className={({ isActive }) => isActive ? 'linkCategoryActive' : 'linkCategory'}>Botánicas</NavLink>
                <NavLink to={`/category/geometricas`} className={({ isActive }) => isActive ? 'linkCategoryActive' : 'linkCategory'}>Geométricas</NavLink>
                <NavLink to={`/category/artistas`} className={({ isActive }) => isActive ? 'linkCategoryActive' : 'linkCategory'}>Artistas</NavLink>
            </div>
            <CartWidget />        
        </nav>
        
    )
}

export default NavBar

