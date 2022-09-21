import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from '@mui/icons-material/Room';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <div className="logo">Shopit!</div>
        <div className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, nisi
          recusandae. Assumenda ducimus quo, obcaecati velit, labore veniam
          pariatur quasi atque nulla aliquid voluptatum ex est praesentium
          libero necessitatibus placeat?
        </div>
        <div className="social-container">
          <div className="social-icon">
            <FacebookIcon />
          </div>
          <div className="social-icon">
            <InstagramIcon />
          </div>
          <div className="social-icon">
            <PinterestIcon />
          </div>
          <div className="social-icon">
            <TwitterIcon />
          </div>
        </div>
      </div>
      <div className="center">
        <h3 className="title">Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Women Fashion</li>
          <li>Men Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="right">
        <h3 className="title">Contact</h3>
        <div className="contact-item"><RoomIcon style={{marginRight:"10px"}}/>
          111 Best Road, South Dreamland 042088
        </div>
        <div className="contact-item"><PhoneIphoneIcon style={{marginRight:"10px"}}/>+37068639329</div>
        <div className="contact-item"><AlternateEmailOutlinedIcon style={{marginRight:"10px"}}/>contact@shopit.com</div>
      </div>
    </div>
  );
};

export default Footer;
