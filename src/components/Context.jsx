import { createContext, useState } from "react";
import { TbContrastOff } from "react-icons/tb";

export const GlobalProduct = createContext();

export const GlobalProductProvider = ({children}) => {
  const [allProducts, setAllProducts] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  function productsGetter(){
    fetch("https://fakestoreapi.com/products")
    .then((response)=> response.json())
    .then((data) => {
      // console.log(data)
      setAllProducts(data)
    })
    .catch((error) => {
      console.log("An error occur", error)
    })
  }

  function addProductToCart(product){
    setCartItems([...cartItems, product])
  }

  function deleteProductFromCart(product){
    const newCartItem = cartItems.filter(item => item.id !== product.id);
    setCartItems(newCartItem);
    console.log(newCartItem);
  }
  
  let objectState = {
    allProducts, productsGetter, addProductToCart, cartItems, deleteProductFromCart
  }
  
  return(
    <GlobalProduct.Provider value={objectState}>
      {children}
    </GlobalProduct.Provider>
  )
}
