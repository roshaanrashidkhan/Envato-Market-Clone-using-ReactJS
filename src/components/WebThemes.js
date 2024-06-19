import logo from "../logo.svg";
import React from "react";
import WebThemesImg from "../WebThemesImg.webp";
import { Link } from "react-router-dom";

function WebThemes() {
  let webThemesStyle = {
    textDecoration: "none",
    color: "white",
    hoverColor: "white",
  };
  return (
    <>
      <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Envato Element Logo" width={200} />
            </Link>
          </div>
        </ul>
        <ul className="nav-right">
          <li>
            <Link to="/components/StartSelling">Start Selling</Link>
          </li>
          <div className="dropdown">
            <li>
              <button className="btn1 btn-sm1">
                <i className="fa fa-th" />
                <a href="#">Our Products</a>
              </button>
            </li>
            <div className="dropdown-content">
              <a href="#">
                Envato Elements
                <br />
                <p className="subtext">Digital Assets Subscription</p>
              </a>
              <a href="#">
                Envato Tuts+
                <br />
                <p className="subtext">Tutorials &amp; courses</p>
              </a>
              <a href="#">
                Place it by Envato
                <br />
                <p className="subtext">Create designs, videos &amp; mockups</p>
              </a>
            </div>
          </div>
          <li>
            <Link to="/components/Signin">
              <button className="btn btn-sm btn-login">
                <i className="fa fa-shopping-cart" />
                Sign in
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="navbar background">
        <ul className="nav-list">
          <li>
            <Link to="/" style={webThemesStyle}>
              Web Themes & Templates
            </Link>
          </li>
          <li>
            <Link to="/components/Code">Code</Link>
          </li>
          <li>
            <Link to="/components/Graphics">Graphics</Link>
          </li>
          <li>
            <Link to="/components/Photos">Photos</Link>
          </li>
        </ul>
      </nav>
      {/* <nav class="navbar2">
  <ul class="nav-list2">
      <li><a href="#items">All Items</a></li>
      <li><a href="#wordpress">WordPress</a></li>
      <li><a href="#elementor">Elementor</a></li>
      <li><a href="#hosting">Hosting</a></li>
      <li><a href="#html">HTML</a></li>
  </ul>
    </nav> */}
      <section className="background firstsection">
        <div className="box-main">
          <div className="firsthalf">
            <p className="text-big">
              Professional WordPress Themes &amp; Website Templates for any
              project
            </p>
            <p className="text-small">
              Discover thousands of easy to customize themes, templates &amp;
              CMS products, made by world-class developers.
            </p>
            <input
              type="text"
              className="searchbar"
              placeholder="e.g. Responsive WordPress"
            />
            <button className="search">
              <i className="fa fa-search" />
              Search
            </button>
          </div>
          <div className="secondhalf">
            <img src={WebThemesImg} alt="sideimage" />
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Envato Market</h4>
            <ul className="links">
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
              <li>
                <a href="#">Market API</a>
              </li>
              <li>
                <a href="#">Become an affiliate</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul className="links">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Authors</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Community</h4>
            <ul className="links">
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Forums</a>
              </li>
              <li>
                <a href="#">Meetups</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter for a weekly dose of news, updates,
              helpful tips, and exclusive offers.
            </p>
            <form action="#">
              <input type="text" placeholder="Your email" required="" />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <div className="icons">
              <a href="https://facebook.com/envato">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="https://twitter.com/envato">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="https://youtube.com/envato">
                <i className="fa-brands fa-youtube" />
              </a>
              <a href="https://instagram.com/envato">
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebThemes;
