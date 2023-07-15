import { NavLink } from 'react-router-dom';

const MenuHeader = () => (
    <div className='Link'>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
            <NavLink className="nav-link text-white" activeClassName="active" exact to="/">~Makeup Dreams~</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                        <NavLink className="nav-link text-white" activeClassName="active" exact to="/">Home</NavLink>
                        <NavLink className="nav-link text-white" activeClassName="active" exact to="/Maquillaje">Maquillaje</NavLink>
                        <NavLink className="nav-link text-white" activeClassName="active" exact to="/Ropa">Ropa</NavLink>
                        <NavLink className="nav-link text-white" activeClassName="active" exact to="/Accesorios">Accesorios</NavLink>
                        <NavLink className="nav-link text-white" activeClassName="active" exact to="/Users">Users</NavLink>
                        <NavLink className="nav-link text-white" activeClassName="active" exact to="/Blog">Instagram</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
)

export default MenuHeader;