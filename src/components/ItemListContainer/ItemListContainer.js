import React from "react";

export default class ItemListContainer extends React.Component{

    render(){
        console.log(this.props)
        return(
            <div>
                <p>Placeholder {this.props.placeholderN}</p>
            </div>
        )
    }
}