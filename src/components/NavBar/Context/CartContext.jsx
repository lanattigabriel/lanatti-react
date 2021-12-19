import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext(); 
const useCartContext = () => useContext(CartContext);


export const CartContextProvider = ({children}) => {

   const [itemsCart, setItemsCart] = useState([]);

   const isInCart = (id) => {
    return itemsCart.some( (item) => {
        return item.id === id;
    })
}

   const addItem = (item, qty) => {
       if( isInCart(item.id) ) {
           let itemToAdd = itemsCart.find( (itemInCart) => {
               return itemInCart.id === item.id;
           })
           
           itemToAdd.qty += qty;

           let filteredCart = itemsCart.filter( (itemInCart) => {
               return itemInCart.id !== item.id;
           })

           setItemsCart([...filteredCart, itemToAdd]);

       } else setItemsCart([...itemsCart, {...item, qty}]);

   }
   
   const getQtyCart = () => {
       let totalItems = itemsCart.reduce((total, item) => {
           return (total + item.qty);
       }, 0)

       return totalItems;
   }

   // Remove Item
   const removeItem = (item) => {
       let filteredCart = itemsCart.filter( (itemInCart) => {
        return itemInCart.id !== item.id;
        })
        console.log(filteredCart)

        itemsCart
            ? setItemsCart([...filteredCart])
            : setItemsCart();
   }

   const clearCart = () => {
       setItemsCart([])
   }


   return <CartContext.Provider value={ { itemsCart, addItem, getQtyCart, isInCart, removeItem, clearCart } }>
       {children}
   </CartContext.Provider>
} 

export default useCartContext;



