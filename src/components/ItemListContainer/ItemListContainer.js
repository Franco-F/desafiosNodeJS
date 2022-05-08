import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


export default function ItemListContainer(props){
    return(
        <div>
            <p>Placeholder {props.num}</p>
            <ItemCount  stock="5"/>

            <ItemList />
        </div>
    )
}