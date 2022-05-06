import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer(props){
    return(
        <div>
            <p>Placeholder {props.num}</p>
            <ItemCount  stock="5"/>
        </div>
    )
}