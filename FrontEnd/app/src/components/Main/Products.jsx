import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/features/cartSlice';

const ProductPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Square Frame', category: 'Home Decor', color: 'Blue', price: 200, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIxxBU49zlYTcynKluV1AjvjkZfN-b0UsrtPO3HZ6LfAdmkRd_P9iPfD54yoQn23yTw425KoZW8GWXJXLX3tgFFcyW1TXWiDAmkM7bfN_u&usqp=CAc' },
    { id: 2, name: 'Wooden Frame', category: 'Home Decor', color: 'Red', price: 250, imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZ8qQ6dJhUypjkVRWI1WyAozKCwD87JrrYoW6mOUxVywFZFYZvOiHI7FC--o2H_FYS6N2iv22HMU_p_0hhQaNlhKLvu3svbwPeSrdmzVAw&usqp=CAc' },
    { id: 3, name: 'Lamps', category: 'Home Decor', color: 'Yellow', price: 300, imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRlpJRh7tcjtOPTEoKYwkBuQuTQ-AhHLAHpj4ONT68dahneskRdjssPucMc7GjZaRyXfFEY2Bug174QQa56u7JyJumefFbHSdeVQyVxvrE&usqp=CAc' },
    { id: 4, name: 'Moon Light', category: 'Home Decor', color: 'White', price: 350, imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSe80tMSPM0XEOjUezt1IhRrOF-h39f_N546fwfpX4NeBJGFetGJGFrkWGdDif1Kj6cwWpn8t_MUvLvnjsHNg1ZB1wR7-NyyCDuWohJ7Fg&usqp=CAc' },
    { id: 5, name: 'Couple Ring', category: 'Jewelry', color: 'Silver', price: 400, imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYoC116yrT5aU_QwbXTYKPpIWeKOgw_EBRtkESKjgq83Vrd6ZaES7r0HSWu4NWs8w7PgwKhOnb-RTKZANuONmlFPxak_RIFbEqRdiZ1uyY_9jZMr-Ib-IB&usqp=CAc' },
    { id: 6, name: 'Heart Rose ', category: 'Flowers', color: 'Pink', price: 450, imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0oOW3XUD7fnMdVnVvz6uZci-XveiqouUg00xyFQO9HLMn2OgdZCwE58dgg8jjWUbJDCL4RUdajf9RDiOo-PykIER5RsVAZomLJ3R_clQ&usqp=CAc' },
    { id: 7, name: 'Sweet Moments', category: 'Gifts', color: 'Multicolor', price: 500, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6FxZvGtFWMF1vQIyQfEuaFvF_cFs_5TDjw&usqp=CAU' },
    { id: 8, name: 'Customise Hoodies', category: 'Clothing', color: 'Black', price: 550, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRU_gII0EtfZPjxWDV0GsdMMoG_JKgSa7_g&usqp=CAU' },
    { id: 9, name: 'Bouquet', category: 'Flowers', color: 'Multicolor', price: 600, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQpdgPha_2xgRFfX8_biH9FWci0Gi-R8MwA&usqp=CAU' },
    { id: 10, name: 'Personalised Cushion', category: 'Home Decor', color: 'Blue', price: 650, imageUrl: 'https://www.fnp.com/images/pr/s/v20230321171858/personalised-photo-bff-cushion_2.jpg' },
    { id: 11, name: 'Custom Name Lamps', category: 'Home Decor', color: 'Yellow', price: 700, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSITr9qXZVCieFPJ3BtSjJOuQw2p_d-I3dXN44ieGHarGBCUo2CYahRPL4WZL9Izx9Qm3XK0KgaCo5QgeMtKXUZ5zVuoIqDs2r5W0ix0E8&usqp=CAc' },
    { id: 12, name: 'Personalised Diaries', category: 'Stationery', color: 'Brown', price: 750, imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9rV74F_5lxdLrepUUDm9Fi4hg1w6GdxmO2GMn-w99hxJyjzQiqzvA5l3lDeVWZUBtJRPsHeYRY1XuipAwraEvVXSet2RhqfEo5nJCE0QYbu9f6Pu_e4kX8TO0z5DWW3s10ZeLSAUDhg&usqp=CAc0' },
    { id: 13, name: 'Personalised Leather Purses', category: 'Accessories', color: 'Brown', price: 800, imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT2NG_5byGTB9M-CzSVyWLvwFsmzsxzQECm_HfrLIIgwEAhyrHajqzdMwKThfVRWUalz0XI3oJz1T1sEclSCxc-lqfQ_O9FAJY0fYU4ermH5zyOimCqBf-_&usqp=CAc' },
    { id: 14, name: 'Personalised Keychain', category: 'Accessories', color: 'Silver', price: 850, imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTEmJPKijz0GmdsD7aQopG_PRJ9Uwg0XQCVEufaaUnTrrmrTVCPAEF1dOpTpXAttEIrbOWhJsOzb7tMgMlZrnK-V38JbULUdmfeISVqX-R3' },
    { id: 15, name: 'Personalised Spotify Keychain', category: 'Accessories', color: 'Black', price: 900, imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNSHdHy5GEe-MgFn53KI2QyrMBFFTGRXx_l6GdmbWc2QJxT4DY4hbS3tCphV6WoIi5OOdW9fLOnhF_H7M_sw4cGmsS6N7yUsFI4isZ64o&usqp=CAc' },
    // Add more products here as needed
  ]);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedColor, setSelectedColor] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('PriceLowToHigh');
  const dispatch=useDispatch();
  const addtoCart = (product) => {
    //  setCart([...cart, product]);
    dispatch(addToCart({
      id:product.id,
      name:product.name,
      price:product.price,
      image:product.imageUrl
    }));
console.log(id);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const filterProducts = () => {
    let filteredProducts = [...products];

    if (selectedCategory !== 'All') {
      filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
    }

    if (selectedColor !== 'All') {
      filteredProducts = filteredProducts.filter((product) => product.color === selectedColor);
    }

    if (priceRange !== 'All') {
      const [min, max] = priceRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter((product) => product.price >= min && product.price <= max);
    }

    return filteredProducts;
  };

  const sortProducts = (filteredProducts) => {
    if (sortBy === 'PriceLowToHigh') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'PriceHighToLow') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    }
    return filteredProducts;
  };

  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div className="row">
        <div className="col" style={{ margin: 'auto', marginLeft: '-90px', marginTop: '40px' }}>

          <h2>Filters</h2>
          <div>
          
              <h4>Category</h4>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Home Decor">Home Decor</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Clothing">Cloting</option>
                <option value="Stationery">Stationery</option>
                <option value="Accessories">Accessories</option>
                {/* Add more categories here */}
              </select>
              </div>
            <div>
              <h4>Color</h4>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Silver">Silver</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Multicolor">Multicolor</option>
                {/* Add more colors here */}
              </select>
            </div>
            <div>
              <h4>Price Range</h4>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="All">All</option>
                <option value="0-100">$0 - $100</option>
                <option value="101-200">$101 - $200</option>
                <option value="201-300">$201 - $300</option>
                <option value="301-500">$301 - $500</option>
                <option value="501-1500">$501 - $1500</option>
                {/* Add more price ranges here */}
              </select>
            </div>
          </div>
          <div className="col-md-9" style={{ margin:'auto',marginRight:'200px',marginTop:'40px' }}>
            <h2>Products</h2>
            <div className="row row-cols-4" style={{width:'130%'}}>
              {sortProducts(filterProducts()).map((product) => (
                <div className="col" key={product.id}>
                  <div className="card mb-4">
                    <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">Category: {product.category}</p>
                      <p className="card-text">Color: {product.color}</p>
                      <p className="card-text">Price: ${product.price}</p>
                    
                      <button
                        className="btn btn-dark"
                        onClick={addtoCart}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-outline-danger ms-2"
                        onClick={() => addToWishlist(product)}
                      >
                        Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;