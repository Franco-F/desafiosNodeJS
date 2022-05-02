export default function CartIcon({count}) {
    return(
        <div className="cartLogo">
            <img src="img/cart.png" alt="Imagen de un carrito de compras"/>
            {count}
        </div>
    )
}