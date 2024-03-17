import React from 'react'

const Products=()=>{
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
        {
          title: 'Lamps',
          price: '649',
          link: '/personalised-gifts',
          imageUrl:
            'https://assets.winni.in/groot/2022/07/22/homepage/desktop/perolamp.jpg?w=385',
        },
        {
          title: 'Lamps',
          price: '649',
          link: '/personalised-gifts',
          imageUrl:
            'https://assets.winni.in/groot/2022/07/22/homepage/desktop/perolamp.jpg?w=385',
        },
      ];

      
    return(
        <div>
        <div className="text-center mb-4" >
        <br/>
            <h1 className="fw-bold">Treasured Connections</h1>
            thoughtful gifts for every special person
            <hr className="w-25 mx-auto" />
        </div>
      <div className="row rowapd catEventHomeWithTitle" style={{ margin: 'auto',marginLeft:'15px',marginRight:'15px' }}>
        {personalizedGiftsData.map((gift) => (
          <div className="col-3" key={gift.title}>
            <div className="card" style={{ borderRadius: '5px', boxShadow: 'none', overflow: 'hidden', margin: '0', backgroundColor: '#FFFFFF!important',marginBottom:'20px',marginTop:'10px' }}>
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
    );
}
export default Products;
