import React from 'react'
import "./checkout.css"
import { useDispatch, useSelector } from 'react-redux'
import { FaTimes} from "react-icons/fa";
import { addBasket, changeCount, removeBasket } from '../../cart/CartSlice';
const Checkout = () => {
    const dispatch=useDispatch()

    const basket=useSelector(state=>state.basket.items)
    
    const remove=(id)=>{ dispatch(removeBasket(id))}
    
    const decrease=(item)=>{ dispatch(changeCount(item))}
    
    const increase=(item)=>{dispatch(addBasket(item))}



  return (
   <>
    <div className='cart'>
        <div>
            <h1>Cart</h1>
            <p className='head_text'>
                <a href='./'>Home</a>
                /
                <strong>Cart</strong>
                </p>
        </div>
    </div>
    <div className='table'>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket && basket.map((item)=>(
                         <tr>
                            <td><img src={item.image} alt="" className='item-images'/></td>
                             <td>{item.name}</td>
                            <td>{item.price}</td>
                                <td><button onClick={()=>decrease(item)}>-</button><button>{item.count}</button><button onClick={()=>increase(item)}>+</button></td>
                                <td>{item.price*item.count}</td>
                                <td className='removeicon'><FaTimes onClick={()=>remove(item.id)}></FaTimes></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            
     </div>
      
   </>
  )
}

export default Checkout