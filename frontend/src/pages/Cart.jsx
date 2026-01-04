import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

  const {products, currency, cartItems} = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for(const items in cartItems) {
      for (const item in cartItems[items]){
        if(cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
            //size was defined as item from there we can get 
            // the count for the specific total count for the specific size

          })
        }
      }
    }
  }, [cartItems]);
  return (
    <div>
      
    </div>
  )
}

export default Cart
