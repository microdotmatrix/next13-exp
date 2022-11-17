"use client"

import { useContext } from "react"
import { removeItemFromCart } from "@util/functions"
import { AppContext } from "@lib/cart/context"
import Link from 'next/link'
import LineItem from "./line-item"

const CartItems =()=>{
    const [cart, setCart]=useContext(AppContext)
    const handleRemoveProductClick=(e, productId)=>{
        console.log("clicky me")
        const updateCart = removeItemFromCart(productId)
        //update contex api
        setCart(updateCart)
    }

    console.log("cart", cart)
    return(
        <div>
            {cart ?(
                <div className="woo-next-cart-wrapper container">
                    <h1 className="woo-next-cart-heading mt-5">Cart</h1>
                    <table className="table table-hover">
                        <thead>
                            <tr className="woo-next-cart-header-container">
                                <th className="woo-next-cart-heading" scope="col"/>
                                <th className="woo-next-cart-heading" scope="col"/>
                                <th className="woo-next-cart-heading" scope="col">Product</th>
                                <th className="woo-next-cart-heading" scope="col">Price</th>
                                <th className="woo-next-cart-heading" scope="col">Quantity</th>
                                <th className="woo-next-cart-heading" scope="col">Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            {cart.products.length && (cart.products.map(item=>(
                                <CartItem
                                key={item.productId}
                                item={item}
                                setCart={setCart}
                                handleRemoveProductClick={(e)=>handleRemoveProductClick(e, item.productId)}
                                />
                            )))}
                        </tbody>
                    </table>
                    {/* Cart total */}

                    <div className="row woo-next-cart-total-container">
                        <div className="col-6">
                            <h2>Cart Total</h2>
                            <table className="table table-hover">
                                <tbody>
                                    <tr className="table-light">
                                        <td className="woo-next-cart-element-total">SubTotal</td>
                                        <td className="woo-next-cart-element-amt">{cart.totalProductsPrice}</td>
                                    </tr>
                                    <tr className="table-light">
                                        <td className="woo-next-cart-element-total">Total</td>
                                        <td className="woo-next-cart-element-amt">{cart.totalProductsPrice}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* proceed to checkout */}
                            <Link href="/checkout">
                                <button className="btn btn-secondary woo-next-large-black-btn">
                                    <span className="woo-next-cart-checkout-text">Proceed to Checkout</span>
                                </button>

                            </Link>

                        </div>
                    </div>
                </div>
            ):(<div className="m-5"><h2>No items in the cart</h2></div>)}
        </div>
    )
}

export default CartItems