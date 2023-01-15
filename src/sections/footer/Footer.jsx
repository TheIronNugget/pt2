import './Footer.css';

const Footer = () => (
  <div className="pt2__footer section__padding">
    <div className="pt2__footer-heading">
      <h1 className="gradient__text">Last Shot!</h1>
    </div>

    <div className="pt2__footer-btn">
      <p>Premium Access</p>
    </div>

    <div className="pt2__footer-links">
      <div className="pt2__footer-links_logo">
        <h1 alt="pt2_logo" className='logoo'>MYST</h1> 
        <p>Arces g18 960 Dr Livid, <br /> All Rights Reserved</p>
      </div>
      <div className="pt2__footer-links_div">
        <h4>Links</h4>
        <p>Overview</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="pt2__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="pt2__footer-links_div">
        <h4>Get in touch</h4>
        <p>Arces g18 960 Dr Livid</p>
        <p>123-4567</p>
        <p>idk@hey.com</p>
      </div>
    </div>

    <div className="pt2__footer-copyright">
      <p>@2022 MYST. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;