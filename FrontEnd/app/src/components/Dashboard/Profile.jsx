import React, { useState } from 'react';
import './Profile.css'; // Import CSS file for styling if needed
import NavigationBar from '../Main/NavigationBar';
import Footer from '../Main/Footer';

function Profile() {
 

  return (
    <div>
      <NavigationBar/>
      <div className=" mb-4" style={{marginLeft:'270px'}}>
      <h1 className="fw-bold" >My Account</h1>
  </div>
      <div className="containerprof">
        <div className="top-part">
          <div className="profile-info">
          <div className="profile-image-container" style={{ position: 'relative' }}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC"
           alt="Profile Image" className="profile-image" />
          <div className="image-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '34px', fontWeight: 'bold', textAlign: 'center' }}>
            NP
          </div>
        </div>
        
            <div className="profile-details">
              <p>Name: </p>
              <p>Email: </p>
              <p>Phone Number: </p>
            </div>
          </div>
          <div>
            <button className="edit-btn">Edit</button>
            <button className="lgot-btn">Logout</button>
            </div>
        </div>
        <div className="bottom-part">
        <ul>
        <div className="faq">
  <input id="faq-a" type="checkbox" />
  <label htmlFor="faq-a">
    <p className="faq-heading">My Orders</p>
    <div className="faq-arrow" />
    <p className="faq-text">
     orders
    </p>
  </label>
  <input id="faq-b" type="checkbox" />
  <label htmlFor="faq-b">
    <p className="faq-heading">
     Customer Care
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
     customercare
    </p>
  </label>
  <input id="faq-c" type="checkbox" />
  <label htmlFor="faq-c">
    <p className="faq-heading">Saved Cards and Rewards</p>
    <div className="faq-arrow" />
    <p className="faq-text">
      cards and rewards
    </p>
  </label>
  <input id="faq-d" type="checkbox" />
  <label htmlFor="faq-d">
    <p className="faq-heading">
     Address
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
     Address
    </p>
  </label>
  <input id="faq-e" type="checkbox" />
  <label htmlFor="faq-e">
    <p className="faq-heading">Retuns and policy</p>
    <div className="faq-arrow" />
    <p className="faq-text">
    policy return
    </p>
  </label>
  <input id="settings" type="checkbox" />
  <input id="faq-f" type="checkbox" />
  <label htmlFor="faq-f">
    <p className="faq-heading">
     Notifications
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
      notification
    </p>
  </label>
</div>
        </ul>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Profile;
