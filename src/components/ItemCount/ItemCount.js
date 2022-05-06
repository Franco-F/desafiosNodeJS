import React from "react";

export default function ItemCount({stock}){
    const [count, setCount] = React.useState(1);
    const handleCount = () => {
        if (count > 1){
            setCount (count - 1)
        }
    };

    return(
        <div>
            <button value="+" onClick={() => {
                if (count < stock){
                    setCount (count + 1)
                }
            }}>
                +
                </button>

            {count}
            <button value="-" onClick={handleCount}>-</button>
        </div>
    )
}