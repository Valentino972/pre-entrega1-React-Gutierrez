import CartWidget from "./CartWidget";



const NavBar = () => {
    return (
        <header>
            <div className="container-logo">
            <p className="logo">Dynasty .Ind</p>
            </div>
            <div className="navbar-container">
                <nav>
                    <ul>
                        <li>Buzos</li>
                        <li>Camperas</li>
                        <li>Remeras</li>
                        <li>Pantalones</li>
                        <li> {CartWidget} </li>
                    </ul>
                </nav>
            </div>
            
        </header>
                
    );
}
export default NavBar;
