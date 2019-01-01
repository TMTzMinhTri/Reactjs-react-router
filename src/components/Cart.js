import React, { Component } from 'react';

export const cartContext = React.createContext();

export class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartItem : []
        };
    }
    addToCart = (product) => {
        //console.log(product);
        
        this.setState({
            cartItem : this.state.cartItem.concat(product)
        });
        
    }

    render(){
        return(
            <cartContext.Provider value = {{
                cartItem: this.state.cartItem,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </cartContext.Provider>
        )
    }
}