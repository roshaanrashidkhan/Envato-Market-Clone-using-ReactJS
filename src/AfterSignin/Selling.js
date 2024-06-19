import { Link } from "react-router-dom";
import EnvatoLogo from "../EnvatoLogo.svg";
import Workers from "../Workers.jpg";
import Img1 from "../Img1.svg";
import Img2 from "../Img2.svg";
import Img3 from "../Img3.svg";
import Img4 from "../Img4.svg";

function Selling () {
    let envatologo = {
        width: 150,
        cursor: "Pointer",
    }

    let officeimage = {
        textAlign: "Right",
    }
    return (
<>
  <nav className="navbarSelling backgroundSelling">
    <div className="imageSelling">
      <Link to="/AfterSignin/Web">
        <img src={EnvatoLogo} alt="LogoSelling" style={envatologo} />
      </Link>
    </div>
    <div className="right-btnSelling">
      <ul>
        <li>
          <button className="btnSelling">Become an Envato Author</button>
        </li>
      </ul>
    </div>
  </nav>
  <section className="firstparaSelling">
    <div className="office-imageSellling" style={officeimage}>
      <img src={Workers} className="image2Selling" alt="Office Workers" />
    </div>
    <div className="text-contentSelling">
      <h1 className="headingSelling">
        Reach over <span className="custom-colorSelling">2 Million</span> customers
        while doing what you love.
      </h1>
      <p className="paragraphSelling">
        Become an Envato Author and sell your work with the largest online
        creative community.
      </p>
    </div>
    <div className="btn-contentSelling">
      <button className="btn2Selling">Become an Envato Author today</button>
    </div>
  </section>
  <div className="secondparaSelling">
    <h1>More Ways to Earn</h1>
    <div className="para-colSelling">
      <div className="para-contentSelling">
        <ul>
          <img src={Img1} alt="" />
          <h1>Sell more, Earn more</h1>
          <p>Hit new earnings milestones to make more out of every sale.</p>
          <button className="btn-paraSelling">View payment schedule</button>
        </ul>
      </div>
      <div className="para-contentSelling">
        <ul>
          <img src={Img2} alt="" />
          <h1>Spread the word</h1>
          <p>Send traffic to Envato Market and earn income for every sale.</p>
          <button className="btn-paraSelling">See our affiliate program</button>
        </ul>
      </div>
      <div className="para-contentSelling">
        <ul>
          <img src={Img3} alt="" />
          <h1>Choose exclusivity</h1>
          <p>
            Go exclusive to earn more. Want to stay non exclusive? No problem!
          </p>
          <button className="btn-paraSelling">Check out Exclusivity rates</button>
        </ul>
      </div>
      <div className="para-contentSelling">
        <ul>
          <img src={Img4} alt="" />
          <h1>Multiple markets</h1>
          <p>
            Get as creative as you like! We have a range of products and
            platforms.
          </p>
          <button className="btn-paraSelling">Discover our ecosystem</button>
        </ul>
      </div>
    </div>
  </div>
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

    )
}

export default Selling;