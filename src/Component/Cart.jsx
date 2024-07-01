// // src/Cart.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Cart = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://flipkartbackenddata.onrender.com/data');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching the data', error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div >
//       <h1>My Cart</h1>
//       {products.map(product => (
//         <div key={product._id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
//           <h2>{product.product_name}</h2>
//           <p>Category: {product.product_category_tree}</p>
//           <p>Retail Price: {product.retail_price}</p>
//           <p>Discounted Price: {product.discounted_price}</p>
//           <div>
//             {JSON.parse(product.image).map((imgSrc, index) => (
//               <img key={index} src={imgSrc} alt={product.product_name} style={{ width: '100px', height: '100px', margin: '5px' }} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
