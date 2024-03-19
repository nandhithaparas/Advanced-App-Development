import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <>
  <footer className="footer">
    <div className="footer__addr">
      <h1 className="footer__logo">THE GIFT CRAFT</h1>
      <h2>Contact</h2>
      <address>
        0987654321-
        COIMBATORE
        <br />
        <br />
        <a className="footer__btn" href="mailto:example@gmail.com">
          Email Us
        </a>
      </address>
    </div>
    <ul className="footer__nav">
      <li className="nav__item">
        <h2 className="nav__title">Details</h2>
        <ul className="nav__ul">
          <li>
            <a href="#">FAQ'S</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </li>
      <li className="nav__item nav__item--extra">
        <h2 className="nav__title">Technology</h2>
        <ul className="nav__ul nav__ul--extra">
          <li>
            <a href="#">Track Orders</a>
          </li>
          <li>
            <a href="#">Coorporate Gifting</a>
          </li>
          <li>
            <a href="#">Wedding Gifting</a>
          </li>
          <li>
            <a href="#">Rewargs Program</a>
          </li>
          <li>
            <a href="#">Shipping Policy</a>
          </li>
          <li>
            <a href="#">Follow us</a>
            <br/>
            <InstagramIcon/>
            <FacebookIcon/>
            <WhatsAppIcon/>
          </li>
        </ul>
      </li>
      <li className="nav__item">
        <h2 className="nav__title">Legal</h2>
        <ul className="nav__ul">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </li>
    </ul>
    <div className="legal">
      <p>© 2019 Something. All rights reserved.</p>
      <div className="legal__links">
        <span>
          Made with <span className="heart">♥</span> remotely from Anywhere
        </span>
      </div>
    </div>
  </footer>
</>

  )
}
