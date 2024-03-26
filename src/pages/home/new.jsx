import React, { useEffect, useState } from 'react'
import './new.css'
import { FaCircle ,FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsShieldLock } from "react-icons/bs";
import { IoReload } from "react-icons/io5";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../../cart/CartSlice';


const sliderProducts = [
  {
    url: 'https://preview.colorlib.com/theme/product/images/cloth_1.jpg.webp',
    title: 'Sleeve Dress, White',
    price: '99'
  },
  {
    url: 'https://preview.colorlib.com/theme/product/images/cloth_2.jpg.webp',
    title: 'Kiko Linen Slip Dress, Brown',
    price: '69'
  },
  {
    url: 'https://preview.colorlib.com/theme/product/images/watch_1.jpg.webp',
    title: 'Hodina Watch',
    price: '29'
  },
  {
    url: 'https://preview.colorlib.com/theme/product/images/shoe_2.jpg.webp',
    title: 'Triangle Low White-Black',
    price: '29'
  },
  {
    url: 'https://preview.colorlib.com/theme/product/images/cloth_3.jpg.webp',
    title: 'Kid Dress, White',
    price: '69'
  },
  {
    url: 'https://preview.colorlib.com/theme/product/images/shoe_1.jpg.webp',
    title: 'Lady Shoes, Brown',
    price: '15.99'
  },
  
];

const images=
['https://preview.colorlib.com/theme/product/images/hero_bg_5.jpg.webp',

'https://preview.colorlib.com/theme/product/images/hero_bg_6.jpg.webp']

const New = () => {
 /////////////////////////first slide////////////////////////////////////////
  const [currentIndex,setCurrentIndex]=useState(0)

  const PrevSlide=()=>{
    setCurrentIndex((curIndex)=>curIndex===0 ? images.length-1 : curIndex-1)
  }
  const NextSlide=()=>{
    setCurrentIndex((curIndex)=>curIndex===images.length-1 ? 0: curIndex+1)
  }
  const slideStyle = {
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',
  };
  useEffect(() => {
    const slideInterval = setInterval(NextSlide, 3000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);
//////////////////////////////////////////////////////////////////////////////////
   const [data,setData]=useState([])
   useEffect(()=>{
    axios("http://localhost:3002/cards").then(data=>setData(data.data))
   },[data])

  const dispatch=useDispatch()
  const cart=useSelector(state=>state.basket.items)

  const addedBasket=(product)=>{
    dispatch(addBasket(product))
  }


  // //////////////second slider/////////////////
  
  const [sliderIndex,setSliderIndex] = useState(0);
  

  const Next = () => {
    setSliderIndex(currentIndex => (currentIndex + 1) % sliderProducts.length); // Bir sonraki resme geç
  };
  
  const Back = () => {
    setSliderIndex(currentIndex => (currentIndex - 1 + sliderProducts.length) % sliderProducts.length); // Bir önceki resme dön
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      Next();
    }, 3000); 

    return () => clearInterval(timer); 
  }, []);
  

   return (
    <>
      <div className="slider" style={{backgroundImage:`url${images[currentIndex]}`}}>
        <div className='slide' style={slideStyle}>
          <h1>The New Way To Display <br /> Product by  
           <a href="https://colorlib.com" target="_blank" 
          style={{ color: '#0fb78d', textDecoration:"none"}}> Colorlib</a></h1>
          <button>EXPLORE NOW</button>
        </div>
        <div className='dot'>
        {images.map((_, index) => (
          <FaCircle
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            style={currentIndex === index ? { color: '#0fb78d' } : {}}
          />
        ))}
        </div>
      </div>
      <div className='info'>
        <div className='info-context'>
           <CiDeliveryTruck />
           <h3>WORLDWIDE DELIVERY</h3>
           <p>Far far away, behind the word mountains,</p>
           <p>far from the countries</p>
        </div>
        <div className='info-context'>
            <BsShieldLock/>
            <h3>SECURE PAYMENTS</h3>
            <p>Far far away, behind the word mountains,</p>
            <p>far from the countries</p>
        </div>
        <div className='info-context'>
            <IoReload/>
            <h3>SIMPLE RETURNS</h3>
            <p>Far far away, behind the word mountains,</p>
            <p>far from the countries</p>
        </div>
      </div>
       {/*/////////////////////cards////////////////////*/}
      <div className='cards'>
          {data && data.map(product=>(
            <div key={product.id} className='card'>
            <img src={product.image} alt="" />
            <h4>{product.name}</h4>
             <div className='price'>
              <p>£{product.price}</p>
             <button onClick={()=>addedBasket(product)}>Add</button>
              </div>
            </div>
          ))}
      </div>
      {/* .................men section ......................*/}
      <section className='men-section'>
        <div className='men'>
            <div className='men-info'>
              <p>Limited Offers 20% OFF</p>
              <h1>Week Deal</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum <br /> fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis <br /> neque nulla earum.</p>
              <button>SHOP NOW</button>
            </div>
        </div>
      </section>
      {/* .......................second slıde.................. */}
      <section className='slider-section'>
        <div className='headSlider'>
          <h3>Popular Items</h3>
          <div className='sliderArrow'>
            <FaArrowLeft onClick={Back}></FaArrowLeft>
            <FaArrowRight onClick={Next}></FaArrowRight>
          </div>
        </div>
        <div className="sliderForma">
    {[0, 1, 2].map(offset => {
      const itemIndex = (sliderIndex + offset) % sliderProducts.length;
      return (
        <div className='slider-items'>
        <div key={offset} className="slider-item" style={{ backgroundImage: `url(${sliderProducts[itemIndex].url})` }}>
        </div>
         <div className="slider-info">
         <h5>{sliderProducts[itemIndex].title}</h5>
         <p>£{sliderProducts[itemIndex].price}</p>
       </div>
       </div>
        
      );
    })}
  </div>
        <div className='dot2'>
        {images.map((_, index) => (
          <FaCircle
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            style={currentIndex === index ? { color: '#0fb78d' } : {}}
          />
        ))}
        </div>
      </section>

    </>
  )}

export default New