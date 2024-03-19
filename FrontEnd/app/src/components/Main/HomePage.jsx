import React from 'react'
import Contents from './Contents'
import Footer from './Footer'
import NavigationBar from './NavigationBar'
import Corousel from './Corousel'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import './swiper.css'

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

const swiperParams = {
  spaceBetween: 30,
  slidesPerView: 2,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const handleCategoryClick = (url) => {

  window.location.href = url;
};

const personalizedGiftsData = [
  {
    title: 'Mugs',
    price: '245',
    link: '/personalised-gifts',
    imageUrl:
      'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persomug.jpg?w=385',
  },
  {
    title: 'Cushion',
    price: '349',
    link: '/personalised-gifts',
    imageUrl:
      'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persocushion.jpg?w=385',
  },
  {
    title: 'Photo Frames',
    price: '349',
    link: '/personalised-gifts',
    imageUrl:
      'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persoframe.jpg?w=385',
  },
  {
    title: 'Lamps',
    price: '649',
    link: '/personalised-gifts',
    imageUrl:
      'https://assets.winni.in/groot/2022/07/22/homepage/desktop/perolamp.jpg?w=385',
  },
 
];

 
  return (
    <div>
    <NavigationBar/>
    <Corousel/>
    <Contents/>
    {/**/}
    <div className="text-center mb-4">
            <h2 className="fw-bold">Popular Categories</h2>
            <hr className="w-25 mx-auto" />
        </div>
    <div className="row catEventHome" style={{ padding: '25px 0px 45px', marginRight:'55px',marginLeft:'55px'}}>
    {categories1.map((category, index) => (
      <div className="adobeEventPos col s2 padding-f1" key={index}>
        <div style={{ aspectRatio: '1' , marginRight:'55px',marginLeft:'55px'}} onClick={category.onClick} >
          <img
          alt={category.name}
            widgettype="featured category"
            className="responsive-img"
            src={category.imageSrc}
            style={{ width: '100%', height: '100%' }}
          />
          </div>
          <div className="wrapped-f1" style={{marginRight:'55px',marginLeft:'55px'}}>{category.name}</div>
          </div>
          ))}
          </div>

          {/**/}
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

           {/**/}
           <section className="xbox" style={{  marginTop: '55px', width: '100%', height: '350px', marginBottom: '20px',
            background: 'url(https://img.freepik.com/premium-photo/creative-christmas-new-year-background-decorated-christmas-tree-lying-turquoise-background_756498-470.jpg) no-repeat center center/cover', marginLeft: '1px', marginRight: '10px' }}>
           <div className="content" style={{ width: '50%', padding: '50px 0 0 30px',color:'white' }}>
               <img src='https://thegiftstudio.com/cdn/shop/files/revised-logo.svg?v=1680978073&width=300' />
               <h3 style={{color:'white'}}>Join the club & Earn</h3><br/>
               <h6>EARN ♥ REDEEM ♥ REFER</h6>
               <br/>
               <a href="#" className="btn btn-light">
                   Join Now <i className="fas fa-chevron-right"></i>
               </a>
           </div>
       </section>
      {/*  <div className="swiper-container desk_banners-new adobeOfferSlider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden" style={{ margin: '0 auto', padding: '0 0 0', backgroundColor: '#F7F7F7', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
       <Swiper {...swiperParams}>
         <SwiperSlide>
           <a className="center-align" href="/offers/3/simpl">
             <img style={{ width: '90%' }} src="https://assets.winni.in/sf-img/live/visuals/home/desktop/2023/9/1693554884020.jpg" title="Simple Offer" />
           </a>
         </SwiperSlide>
         <SwiperSlide>
           <a className="center-align" href="/offers/1/mobikwik">
             <img style={{ width: '90%' }} src="https://assets.winni.in/sf-img/live/visuals/home/desktop/2023/8/1690867799824.jpg" title="Place Your Order On Cash On Delivery" />
           </a>
         </SwiperSlide>
         <SwiperSlide>
           <a className="center-align" href="">
             <img style={{ width: '90%' }} src="https://assets.winni.in/sf-img/live/visuals/home/desktop/2023/7/1689946922581.jpg" title="Use Coupon Code: TRYWINNI to get up to 20% off on your first order" />
           </a>
         </SwiperSlide>
       </Swiper>
     </div>*/}
          {/* */}
          <div className="text-center mb-4"  >
          <br/>
              <h1 className="fw-bold">Treasured Connections</h1>
              thoughtful gifts for every special person
              <hr className="w-25 mx-auto" />
          </div>
        <div className="row rowapd catEventHomeWithTitle" style={{ margin: 'auto',marginLeft:'15px',marginRight:'15px' }}>
          {personalizedGiftsData.map((gift) => (
            <div className="col-3" key={gift.title}>
              <div className="card" style={{ borderRadius: '5px', boxShadow: 'none', overflow: 'hidden', margin: '0', backgroundColor: '#FFFFFF!important',marginBottom:'20px',marginTop:'15px' }}>
                <a className="center-align" href={gift.link}>
                  <img alt={gift.title} widgettype="personalized category" className="card-img-top" src={gift.imageUrl} style={{ width: '100%', height: '100%' }} />
                  <div className="card-body" style={{ padding: '17px 5px 13px' }}>
                    <div className="col-10 truncate" style={{ paddingRight: '0', textAlign: 'left', color: '#404040', lineHeight: '19px' }}>
                      <h5 className="card-title " style={{ fontSize: '17px', fontWeight: 'bold' }}>{gift.title}</h5>
                      <p className="card-text" style={{ fontSize: '13px', margin: '0' }}>Starting From</p>
                      <p className="card-text" style={{ fontSize: '13px', margin: '0', fontWeight: 'bold' }}>
                        ₹ {gift.price}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
          </div>
          {/**/}
          <Footer/>
          </div>
          )
        }
export default HomePage;
