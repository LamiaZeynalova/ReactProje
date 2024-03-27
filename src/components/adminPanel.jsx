import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  './adminPanel.css'

const AdminPanel = () => {
    
        const [products, setProducts] = useState([]);
        const [currentProduct, setCurrentProduct] = useState({ id: '', name: '', info: '', price: '', image:''});
      
        
      
        const fetchProducts = () => {
          axios.get('http://localhost:3002/cards')
            .then(response => {
              setProducts(response.data);
            })
            .catch(error => console.log(error));
        };
        useEffect(() => {
          fetchProducts();
        }, []);
      
        const handleEdit = (product) => {
          setCurrentProduct(product);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const productToSubmit = { 
            name: currentProduct.name, 
            info: currentProduct.info, 
            price: currentProduct.price,
            image: currentProduct.image 
          };
      
          if (currentProduct.id) {
            axios.put(`http://localhost:3002/cards/${currentProduct.id}`, productToSubmit)
              .then(() => {
                fetchProducts();
                setCurrentProduct({ id: '', name: '', info: '', price: '',image: '' });
              });
          } else {
            axios.post('http://localhost:3002/cards', productToSubmit)
              .then(() => {
                fetchProducts();
                setCurrentProduct({ id: '', name: '', info: '', price: '',image: '' });
              });
          }
        };
      
        const handleDelete = (id) => {
          axios.delete(`http://localhost:3002/cards/${id}`)
            .then(() => {
              fetchProducts();
            });
        };
      
        return (
          <div>
            <div className='cart' style={{marginBottom:"40px"}}>
        <div>
            <h1>Admin Panel</h1>
            <p className='head_text'>
                <a href='./'>Home</a>
                /
                <strong>Panel</strong>
                </p>
        </div>
    </div>
            <form onSubmit={handleSubmit} className='form'>
              <input
                type="text"
                placeholder="product name"
                value={currentProduct.name}
                onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
              />
              {/* <input
                type="text"
                placeholder="product info"
                value={currentProduct.info}
                onChange={(e) => setCurrentProduct({ ...currentProduct, info: e.target.value })}
              /> */}
              <input
                type="text"
                placeholder="price"
                value={currentProduct.price}
                onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
              />
               <input
                   type="text"
                     placeholder="Image URL"
                   value={currentProduct.image || ''} 
                   onChange={(e) => setCurrentProduct({ ...currentProduct, image: e.target.value })}
  />
              <button type="submit">Əlavə Et / Yenilə</button>
            </form>
      
            <table style={{border:"1px solid #ddd", width: "100%"}}>
  <thead>
    <tr>
      <th>ID</th>
      <th>Image</th> 
      <th>Name</th>
      {/* <th>Info</th> */}
      <th>Price</th>
      {/* <th>Count</th>  */}
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td><img src={product.image} alt={product.name} style={{width: "50px", height: "auto"}} /></td> {/* Ürün Görseli */}
        <td>{product.name}</td>
        {/* <td>{product.info}</td> */}
        <td>£{product.price}</td>
        {/* <td>{product.count}</td>  */}
        <td className='buttons'>
          <button onClick={() => handleEdit(product)} className="edit-button">Edit</button>
          <button onClick={() => handleDelete(product.id)} className="delete-button">Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

          </div>
        );
      }


 

export default AdminPanel;
