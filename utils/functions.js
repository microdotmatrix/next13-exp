export const getFloatval =(string)=>{
  let floatValue = string.match( /[+-]?\d+(\.\d+)?/g )[0];
return (null !== floatValue)? parseFloat( parseFloat( floatValue ).toFixed(2) ) : '';
}

export const addFirstProduct=(product)=>{
  console.log('heey from inside the addproduct')
  let productPrice = getFloatval(product.price)
  //if no item in the cart, create an n empty array and pushe the item

  let newCart ={
      products:[],
      totalProductsCount:1, 
      totalProductsPrice:productPrice
  }

  const newProduct = createNewProduct(product, productPrice, 1); //qty is 1 b/c its the first time we're creating it
newCart.products.push(newProduct);
localStorage.setItem('woo-next-cart', JSON.stringify(newCart));
return newCart
}

//CREATE A NEW PRODUCT OBJECT


export const createNewProduct =(product, productPrice, qty)=>{
  console.log("create new prod", parseFloat((productPrice * qty).toFixed(2)))
  return{
      productId: product.productId,
      image:product.image,
      name:product.name,
      price:productPrice,
      qty: qty,
      totalPrice: parseFloat((productPrice * qty))
  }
}

export const updateCart= (existingCart, product, qtyToBeAdded, newQty=false)=>{
  const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty);
  const addPrice = (total, item)=>{
      console.log("ADDING PRICE", total.totalPrice)
      // console.log("adding ITEM price", item.totalPrice)
      total.totalPrice += item.totalPrice;
      total.qty+= item.qty

      return total
  }

  //loop thtrough the update produt array and add the totalPrice of each item to get the totalPrice.
  console.log("updated products before reduce",updatedProducts)

  let total = updatedProducts.reduce(addPrice, {totalPrice:0, qty:0})

  console.log("updated cart", total.totalPrice)
  console.log("total so far", total)
  //updated card
  const updatedCart ={
      products: updatedProducts,
      totalProductsCount: parseInt(total.qty),
      totalProductsPrice: parseFloat(total.totalPrice)

  }
  localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart))
  return updatedCart
}

//get updated products array
//updated the products if it exists
//and add the new product to existing cart

export const getUpdatedProducts =(existingProductsInCart, product, qtyToBeAdded, newQty=false)=>{
  //does product already exist in cart
  const productExistsIndex = isProductInCart(existingProductsInCart, product.productId)

  //if product exists (index of that product is found in the array), update the product qty and total price

  if(-1 <productExistsIndex){
      let updatedProducts = existingProductsInCart;
      let updatedProduct = updatedProducts[productExistsIndex];

      //if we have the new qty of the product available, set that else add tohe qtyTobeadded
updatedProduct.qty =(newQty)?parseInt(newQty):parseInt(updatedProduct.qty+qtyToBeAdded);
updatedProduct.totalPrice = parseFloat(updatedProduct.price * updatedProduct.qty)
 return updatedProducts
}else{
  //if it doesnt exist, it's a new product
  let productPrice = getFloatval(product.price);
  const newProduct = createNewProduct(product, productPrice, qtyToBeAdded);
  existingProductsInCart.push(newProduct)

  return existingProductsInCart;
}

}

//return indexs of the product if it exists

export const isProductInCart=(existingProductsInCart, productId)=>{
  const returnItemThatExists = (item, index)=>{
      if(productId === item.productId){
          return item;
      }

  }
  const newArray = existingProductsInCart.filter(returnItemThatExists);
  return existingProductsInCart.indexOf(newArray[0]); //will give me the position

}

export const removeItemFromCart = (productId)=>{
  //get the existing cart data.

  let existingCart = localStorage.getItem('woo-next-cart');
  existingCart = JSON.parse(existingCart)

  //if there is only 1 item in the cart. delete the cart. 
  if (1=== existingCart.products.length){
      localStorage.removeItem('woo-next-cart');
      return null;
  }
  //check if product already exists in the cart 
  const productExistsIndex = isProductInCart(existingCart.products, productId)

  //if  product to be removed exists
  if(-1 < productExistsIndex){
      const productToBeRemoved = existingCart.products[productExistsIndex];
      //quantity to be removed from the toal
      const qtyToBeRemovedFromTotal = productToBeRemoved.qty
      //price to be deducted from the total
      const priceToBeDeductedFromTotal = productToBeRemoved.totalPrice

      //remove that product from the array and update price and qty
      //1. first remove the qty and the total
      let updatedCart = existingCart;
      updatedCart.products.splice(productExistsIndex)
      updatedCart.totalProductsCount = updatedCart.totalProductsCount - qtyToBeRemovedFromTotal

      updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeDeductedFromTotal

      //update localstorage and store with new values
      localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart))
      return updatedCart
  } else {
      return existingCart
  }
}


//returns cart data in the required format. 
export const getFormattedCart = ( data ) => {

let formattedCart = null;

if ( undefined === data || ! data.cart.contents.nodes.length ) {
  return formattedCart;
}

const givenProducts = data.cart.contents.nodes;

// Create an empty object.
formattedCart = {};
formattedCart.products = [];
let totalProductsCount = 0;

for( let i = 0; i < givenProducts.length; i++  ) {
  const givenProduct = givenProducts[ i ].product;
  const product = {};
  const total = getFloatVal( givenProducts[ i ].total );

  product.productId = givenProduct.productId;
  product.cartKey = givenProducts[ i ].key;
  product.name = givenProduct.name;
  product.qty = givenProducts[ i ].quantity;
  product.price = total / product.qty;
  product.totalPrice = givenProducts[ i ].total;
  product.image = {
    sourceUrl: givenProduct.image.sourceUrl,
    srcSet: givenProduct.image.srcSet,
    title: givenProduct.image.title
  };

  totalProductsCount += givenProducts[ i ].quantity;

  // Push each item into the products array.
  formattedCart.products.push( product );
}

formattedCart.totalProductsCount = totalProductsCount;
formattedCart.totalProductsPrice = data.cart.total;

return formattedCart;

};