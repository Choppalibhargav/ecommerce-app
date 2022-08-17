import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter
  } from "@material-ui/icons";
  import "./Footer.css"
  
  const Footer = () => {
    return (
      <div className="Container">
        <div className="Left">
          <h1>ARIES_SHOP</h1>
          <p>Follow us on social media for more updates</p>
          <div className="SocialContainer">
            <div className="SocialIcon" color="3B5999"><Facebook /></div>
            <div className="SocialIcon" color="E4405F"><Instagram/></div>
            <div className="SocialIcon" color="55ACEE"><Twitter /></div>
            <div className="SocialIcon" color="E60023"><Pinterest /></div>
          </div>
        </div>
        <div className="Center">
          <div className="Title">Useful Links</div>
          <ul>
            <li>Home</li>
            <li>Cart</li>
            <li>Shoes</li>
            <li>Sneakers</li>
            <li>Boots</li>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
        <div className="Right">
          <div className="Title">Contact</div>

          <div className="Contactitem">
            <Room style={{ marginRight: "10px" }} /> IN India
          </div>
          <div className="Contactitem">
            <Phone style={{ marginRight: "10px" }} />
            (+91)1234567890
          </div>
          <div className="Contactitem">
            <MailOutline style={{ marginRight: "10px" }} /> contact@aries.shop
          </div>
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
    );
  };
  
  export default Footer;
  