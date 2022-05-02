import CartIcon from "./CartIcon/CartIcon";
export default function Navbar(){

    
    const headerStyles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        listStyle: "none",
        color: "white",
    }

    const listStyle = {
        marginLeft: "5px",
        marginRight: "5px",
        color: "black",
    }
    return(
        <header className="header">
            <div className="logo" style={{color: "white"}}></div>
            <CartIcon count={1} />
            <ul className="links" style={headerStyles}>
                <li style={listStyle}>Inicio</li>
                <li style={listStyle}>Productos</li>
                <li style={listStyle}>Cobertura</li>
                <li style={listStyle}>Perfil</li>
            </ul>

        </header>
    );
}