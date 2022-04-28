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
    }
    return(
        <header className="header">
            <div className="logo" style={{color: "white"}}>Logo</div>
            <ul className="links" style={headerStyles}>
                <li style={listStyle}>Inicio</li>
                <li style={listStyle}>Productos</li>
                <li style={listStyle}>Cobertura</li>
                <li style={listStyle}>Perfil</li>
            </ul>

        </header>
    );
}