import { productos } from "../../data/productos";
import Item from "../Item/Item";


export default function ItemList({items}){
    const task = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })

    task.then((result) =>{
        console.log(result)
    }, err =>{
        console.log(err)
    }).catch((err) => {
        console.log(err)
    })

    return (
        <div className="listItems">
            {productos.map((producto, index) => (
                <Item producto= {producto} key= {producto.id} />
            )
            )}
            </div>
    )
}