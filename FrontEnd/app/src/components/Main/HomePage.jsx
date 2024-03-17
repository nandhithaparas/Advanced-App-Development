import React from 'react'
import Contents from './Contents'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Corousel from './Corousel'

const HomePage =()=>
{
const categories1=[{
  name : 'CAKES',
  onClick: () => handleCategoryClick('/cake'),
  imageSrc:'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/gourmet_igp_lenses_20230627.jpg'
},
{
  name:'FLOWERS',
  onClick: () => handleCategoryClick('/flower'),
  imageSrc:'https://assets.winni.in/groot/2022/07/22/homepage/desktop/icomflower.png'
},
{
  name: 'BALLOONS',
  onClick: () => handleCategoryClick('/balloons'),
  imageSrc: 'https://thegiftstudio.com/cdn/shop/files/Balloons.png?v=1687426395',
},
{
  name: 'CHOCOLATES',
  onClick: () => handleCategoryClick('/chocolate'),
  imageSrc: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/gourmet_igp_lenses_20230627.jpg',
},
{
  name: 'PERSONALISED',
  onClick: () => handleCategoryClick('/personalised'),
  imageSrc: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/festival_corporate_gifts_d_polaroid_5_20231221143302.jpg',
}
];
const categories2=[{
  name: 'GIFTS',
  onClick: () => handleCategoryClick('/gifts'),
  imageSrc: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/new_arrival_igp_lenses_20230627.jpg',
},
{
  name: 'PLANTS',
  onClick: () => handleCategoryClick('/plants'),
  imageSrc: 'https://assets.winni.in/groot/2022/12/14/home/plants.png',
},
{
  name: 'JEWELS',
  onClick: () => handleCategoryClick('/jewels'),
  imageSrc: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/jewellery_igp_lenses_20230627.jpg',
},
{
  name: 'PHOTO FRAMES',
  onClick: () => handleCategoryClick('/photos'),
  imageSrc: 'https://assets.winni.in/groot/2022/12/14/home/photoframe.png',
},
{
  name: 'LAMPS',
  onClick: () => handleCategoryClick('/lamps'),
  imageSrc: 'https://assets.winni.in/groot/2022/12/14/home/lamps.png',
},
];
 
  return (
    <div>
    <NavigationBar/>
    <Corousel/>
    <Contents/>
    <div className="text-center mb-4">
            <h2 className="fw-bold">Popular Categories</h2>
            <hr className="w-25 mx-auto" />
        </div>
    <div className="row catEventHome" style={{ padding: '25px 0px 45px', marginBottom:'50px',marginRight:'55px',marginLeft:'55px'}}>
    {categories1.map((category, index) => (
      <div className="adobeEventPos col s2 padding-f1" key={index}>
        <div style={{ aspectRatio: '1' , marginBottom:'5px',marginRight:'55px',marginLeft:'55px'}} onClick={category.onClick} >
          <img
          alt={category.name}
            widgettype="featured category"
            className="responsive-img"
            src={category.imageSrc}
            style={{ width: '100%', height: '100%' }}
          />
          </div>
          <div className="wrapped-f1" style={{marginBottom:'5px',marginRight:'55px',marginLeft:'55px'}}>{category.name}</div>
          </div>
          ))}
          </div>
           <div className="row catEventHome" style={{ padding: '25px 0px 45px', marginBottom:'50px',marginRight:'55px',marginLeft:'55px'}}>
    {categories2.map((category, index) => (
      <div className="adobeEventPos col s2 padding-f1" key={index}>
        <div style={{ aspectRatio: '1', marginBottom:'5px',marginRight:'55px',marginLeft:'55px' }} onClick={category.onClick}>
          <img
          alt={category.name}
            widgettype="featured category"
            className="responsive-img"
            src={category.imageSrc}
            style={{ width: '100%', height: '100%' }}
          />
          </div>
          <div className="wrapped-f1" style={{ marginBottom:'5px',marginRight:'55px',marginLeft:'55px'}}>{category.name}</div>
          </div>
          ))}
          </div>
          <Footer/>
          </div>
          )
        }
export default HomePage;
