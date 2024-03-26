import React, {  useState } from 'react'
import "./navbar.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {  IoMdMenu } from "react-icons/io"
import { FaSearch , FaRegUser ,FaShoppingCart ,FaTimes ,FaCaretDown  } from "react-icons/fa";
import { removeBasket } from '../../cart/CartSlice';

// Basket,burgermenu sidebarlarin open &&close////
const Navbar = () => {

    const [DropdownOpen, setDropdownOpen] = useState(false);


    const [SidebarOpen,setSidebarOpen]=useState(false)
    const [CartOpen,setCartOpen]=useState(false)
    const cart=useSelector(state=>state.basket.items)

    const dispatch=useDispatch()
    const removeProduct=(id)=>{
        dispatch(removeBasket(id))
    }


    // go to checkoutPage ///
    const navigate=useNavigate()
    const goCheckout=()=>{
    setCartOpen(false); 
    navigate('/checkout')
  }

  return (
    <>
        <nav>
            <h2>Product<span className='end'>.</span></h2>
            <ul className='NavLinks'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>NEW</NavLink></li>
            <li onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}>
            <NavLink to="/men" className={({ isActive }) => isActive ? 'active' : undefined}>
              MEN <FaCaretDown/> 
            </NavLink>
            {DropdownOpen && (
              <ul className="dropdown">
                <li><NavLink to="/men/elements">Elements</NavLink></li>
                <li><NavLink to="/men/tshirt">T-shirt</NavLink></li>
                <li><NavLink to="/men/underware">Underware</NavLink></li>
                <li><NavLink to="/men/clothing">Clothing</NavLink></li>
                <li><NavLink to="/men/accessories">Accessories</NavLink></li>
                <li><NavLink to="/men/shoes">Shoes</NavLink></li>
                <li><NavLink to="/men/briefs">Briefs</NavLink></li>
                <li><NavLink to="/men/menutwo">Menu TWO <FaCaretDown/></NavLink></li>
                <li><NavLink to="/men/three">Menu Three</NavLink></li>
              </ul>
            )}
            </li>
            <li><NavLink to="/women" className={({ isActive }) => isActive ? 'active' : undefined}>WOMEN</NavLink></li>
            <li><NavLink to="/accessories" className={({ isActive }) => isActive ? 'active' : undefined}>AcCESSORIES</NavLink></li>
            <li><NavLink to="/jewelry" className={({ isActive }) => isActive ? 'active' : undefined}>JEWELRY</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>ABOUT</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>CONTACT</NavLink></li>
            </ul>
            <div className='icons'>
             <FaSearch />
             <FaRegUser />
            <div className="cartIcon">
             <FaShoppingCart style={{cursor:"pointer"}} onClick={()=>setCartOpen(true)}></FaShoppingCart>
            <span>{cart ? cart.length : 0}</span>
            </div>
            <div className='burger'>
                <IoMdMenu className='burgerMenu' onClick={()=>setSidebarOpen(true)} ></IoMdMenu>
            </div>
            </div>
        
        </nav>
        <div className={`sidebar ${SidebarOpen ? 'open': ''}`} >
                <FaTimes className='close' onClick={()=>setSidebarOpen(false)}></FaTimes>
                <ul className='NavLinks-sidebar'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>NEW</NavLink></li>
            <li onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}>
            <NavLink to="/men" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>
              MEN <FaCaretDown/> 
            </NavLink>
            {DropdownOpen && (
              <ul className="dropdown">
                <li><NavLink to="/men/elements">Elements</NavLink></li>
                <li><NavLink to="/men/tshirt">T-shirt</NavLink></li>
                <li><NavLink to="/men/underware">Underware</NavLink></li>
                <li><NavLink to="/men/clothing">Clothing</NavLink></li>
                <li><NavLink to="/men/accessories">Accessories</NavLink></li>
                <li><NavLink to="/men/shoes">Shoes</NavLink></li>
                <li><NavLink to="/men/briefs">Briefs</NavLink></li>
                <li><NavLink to="/men/menutwo">Menu TWO <FaCaretDown/></NavLink></li>
                <li><NavLink to="/men/three">Menu Three</NavLink></li>
              </ul>
            )}
            </li>
            <li><NavLink to="/women" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>WOMEN</NavLink></li>
            <li><NavLink to="/accessories" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>ACCESSORIES</NavLink></li>
            <li><NavLink to="/jewelry" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>JEWELRY</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>ABOUT</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active-sidebar' : undefined}>CONTACT</NavLink></li>
            </ul>
        </div>
        <div className={`cart-sidebar ${CartOpen? 'open': ''}`}>
             <FaTimes className='close' onClick={()=>setCartOpen(false)}></FaTimes>
             <h3>Products</h3>
             <div className='cart-items1'>
                {cart ? cart.map((item)=>(
                  <div className='product-info'>
                    <div className='product-img'>
                   <img src={item.image} alt="" className='basket-img'/>
                    <FaTimes className='delete-icon' onClick={()=>removeProduct(item.id)}></FaTimes>
                   </div>
                    <div>
                    <p>{item.name}</p>
                    <p>Price:{item.count}x{item.price}={item.count*item.price}</p>
                    </div>
                  </div>  
                )):
                (<p>Basket is Empty</p>)}
             </div>
             <div className="btns">
                <button onClick={goCheckout} >Go to CheckOut</button>
             </div>
        </div>
    </>
  )
}

export default Navbar