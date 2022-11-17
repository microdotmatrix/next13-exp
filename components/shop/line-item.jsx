"use client"

import { useState } from 'react';
import { updateCart } from '@util/functions'

const LineItem=({item, setCart, handleRemoveProductClick})=>{
    const [productCount, setProductCount]=useState(item.qty)
    const handleQtyChange=(e)=>{
        if(process.browser){ //since info is coming from the server side, make sure it's loaded in the client
            // const newQty = e.target.value
            const newQty =( e.target.value ) ? parseInt( e.target.value ) : 1;
            setProductCount(newQty)
            console.log("newqty", e.target.value)

            let existingCart = localStorage.getItem('woo-next-cart')

            //its in JSON string format, so we need to parse it
            existingCart=JSON.parse(existingCart);
            //update the cart
            const updatedCart=updateCart(existingCart, item, false, newQty)
            setCart(updatedCart) //updated Global store
        }
        

    }

    return(
        <tr className="woo-next-cart-item" key={item.productId}>
            {/* cross icon image */}
            <th className="woo-next-cart-element woo-next-cart-el-close">
                <span className="woo-next-cart-close-icon" onClick={handleRemoveProductClick}>
                    <i className="fa fa-times-circle"></i>
                </span>
            </th>
            {/* image */}
            <td className="woo-next-cart-element">
                <img src={item.image.sourceUrl} srcSet={item.image.sourceUrl} width="64px" alt={item.image.title} />
            </td>

            {/* name */}
            <td className="woo-next-cart-element">{item.name}</td>

            {/* price */}
            <td className="woo-next-cart-element">{item.price.toFixed(2)}</td>

            {/* quantity */}
            <td className="woo-next-cart-element">
                <input 
 
                type="number"
                value={productCount}
                name=""
                min="1"
                className="woo-next-cart-qty-input"
                onChange={handleQtyChange}/>
            </td>

            {/* total */}
            <td className="woo-next-cart-element">{parseFloat(item.totalPrice).toFixed(2)}</td>
            {/* <td className="woo-next-cart-element">{item.totalPrice.toFixed(2)}</td> */}


        </tr>
    )
}

export default LineItem