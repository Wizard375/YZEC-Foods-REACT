import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import CountUp from "react-countup";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 20,
      delay: 200,
      once: false,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/*header design*/}
      <header>
        <nav
          data-aos="fade-down"
          className="navbar navbar-expand-lg navigation-wrap"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="images/logo.png" height={"100px"} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-stream" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#explore-food">
                    Explore Foods
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <button className="main-btn">1200 345 123</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* section-1  top banner */}
      <section id="home">
        <div className="container-fluid px-0 top-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <h1 data-aos="fade-up">
                  <Typewriter
                    options={{
                      strings: [
                        "Good food choices are good investments.",
                        "Eat healthy and stay wealthy.",
                        "Fabulous food to your doorsteps.",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </h1>
                <p data-aos="fade-up" data-aos-delay="200">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate porro, ducimus harum corrupti rem tempore?
                </p>
                <div className="mt-4" data-aos="fade-up" data-aos-delay="400">
                  <button className="main-btn">
                    Order now <i className="fas fa-shopping-basket ps-3" />
                  </button>
                  <button className="white-btn ms-lg-4 mt-lg-0 mt-4">
                    Order now <i className="fas fa-angle-right ps-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-2 counter */}
      <section id="counter">
        <section className="counter-section">
          <div className="container">
            <div className="row text-center">
              <div
                className="col-md-3 md-lg-0 md-md-0 md-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2>
                  <span id="count1">
                    <CountUp end={1287} duration={3} enableScrollSpy />
                  </span>
                  +
                </h2>
                <p>SAVINGS</p>
              </div>
              <div
                className="col-md-3 md-lg-0 md-md-0 md-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2>
                  <span id="count2">
                    <CountUp
                      start={100}
                      end={1586}
                      duration={3}
                      enableScrollSpy
                    />
                  </span>
                  +
                </h2>
                <p>PHOTOS</p>
              </div>
              <div
                className="col-md-3 md-lg-0 md-md-0 md-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2>
                  <span id="count3">
                    <CountUp end={1440} duration={3} enableScrollSpy />
                  </span>
                  +
                </h2>
                <p>ROCKETS</p>
              </div>
              <div
                className="col-md-3 md-lg-0 md-md-0 md-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h2>
                  <span id="count4">
                    <CountUp end={1771} duration={3} enableScrollSpy />
                  </span>
                  +
                </h2>
                <p>GLOBES</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* section-3 about */}
      <section id="about">
        <div className="about-section wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div
                data-aos="fade-right"
                className="col-lg-7 col-md-12 mb-lg-0 mb-5"
              >
                <div className="card border-0">
                  <img src="images/img/img-1.png" className="img-fluid" />
                </div>
              </div>
              <div data-aos="fade-left" className="col-lg-5 col-md-12 text-sec">
                <h2>
                  We pride ourselves on making real food from the best
                  ingredients
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora quo saepe ex iste quia exercitationem
                </p>
                <button className="main-btn mt-4 ">Learn More</button>
              </div>
            </div>
          </div>
          <div className="container food-type">
            <div className="row align-items-center">
              <div
                data-aos="fade-right"
                className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5"
              >
                <h2>
                  We make everything by hand with the best possible ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus. Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.
                </p>
                <ul className="list-unstyled py-3">
                  <li>Etiam sed dolor ac diam volutpat.</li>
                  <li>Erat volutpat aliquet imperdiet.</li>
                  <li>Purus a odio finibus bibendum.</li>
                </ul>
                <button className="main-btn mt-4">Learn More</button>
              </div>
              <div className="col-lg-7 col-md-12" data-aos="fade-left">
                <div className="card border-0">
                  <img src="images/img/img-2.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-4 story */}
      <section id="story" data-aos="fade-up" data-aos-delay="200">
        <div className="story-section">
          <div className="container">
            <div className="row">
              <div className="text-content">
                <h2>
                  When a man's stomach is full it makes no difference whether he
                  is rich or poor.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet adipisci, sint repellendus doloremque dolor nemo
                  labore totam mollitia fuga?.
                </p>
                <button className="main-btn mt-3">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-5 explore-food */}
      <section id="explore-food">
        <div className="explore-food wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div
                  className="text-content text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2>Explore Our Foods</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem, a quisquam. Distinctio dolor nulla possimus non
                    deleniti similique et nobis est numquam officiis expedita,
                    optio repudiandae aliquid aut neque ratione.
                  </p>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="col-lg-4 col-md-6 mb-lg-0 mb-5"
              >
                <div className="card">
                  <img src="images/img/img-3.jpg" className="img-fluid" />
                  <div className="pt-3">
                    <h4>Rainbow Vegetable Sandwich</h4>
                    <p>Time: 15 - 20 Minutes | Serves: 1</p>
                    <span>
                      $10.50 <del>$11.70</del>
                    </span>
                    <button className="mt-4 main-btn">Order Now</button>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="col-lg-4 col-md-6 mb-lg-0 mb-5"
              >
                <div className="card">
                  <img src="images/img/img-4.jpg" className="img-fluid" />
                  <div className="pt-3">
                    <h4>Vegetarian Burger</h4>
                    <p>Time: 30 - 45 Minutes | Serves: 1</p>
                    <span>
                      $9.20 <del>$10.50</del>
                    </span>
                    <button className="mt-4 main-btn">Order Now</button>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="col-lg-4 col-md-6 mb-lg-0 mb-5"
              >
                <div className="card">
                  <img src="images/img/img-5.jpg" className="img-fluid" />
                  <div className="pt-3">
                    <h4>Raspberry Stuffed French Toast</h4>
                    <p>Time: 10 - 15 Minutes | Serves: 1</p>
                    <span>
                      $12.50 <del>$13.20</del>
                    </span>
                    <button className="mt-4 main-btn">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-6 testimonial */}
      <section
        id="testimonial"
        className="testimonial-section"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="wrapper testimonial-section">
          <div className="container text-center">
            <div className="text-center pb-4">
              <h2>Testimonial</h2>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-10 offset-lg-1">
                <div
                  id="carouselExampleDark"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  {/* Carousel Indicators */}
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to={0}
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    />
                  </div>
                  {/* Carousel Inner */}
                  <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active">
                      <div className="carousel-caption">
                        <img src="images/review/review-1.jpg" alt="Review 1" />
                        <p>
                          "Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts."
                        </p>
                        <h5>Johnthan Doe - UX Designer</h5>
                      </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="carousel-item">
                      <div className="carousel-caption">
                        <img src="images/review/review-2.jpg" alt="Review 2" />
                        <p>
                          "Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts."
                        </p>
                        <h5>Maccy Doe - Front End Developer</h5>
                      </div>
                    </div>
                    {/* Slide 3 */}
                    <div className="carousel-item">
                      <div className="carousel-caption">
                        <img src="images/review/review-1.jpg" alt="Review 3" />
                        <p>
                          "Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts."
                        </p>
                        <h5>Johnthan Doe - UX Designer</h5>
                      </div>
                    </div>
                  </div>
                  {/* Carousel Controls */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-7 faq */}
      <section id="faq">
        <div className="faq wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center pb-4" data-aos="fade-up">
                  <h2>Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-sm-6 mb-4" data-aos="fade-right">
                <h4>
                  <span>~</span> Is Foodies Bread really baked fresh each day?
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
              <div className="col-sm-6 mb-4" data-aos="fade-left">
                <h4>
                  <span>~</span> Do you bake breads containing animal fats or
                  products?
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
              <div className="col-sm-6 mb-4" data-aos="fade-right">
                <h4>
                  <span>~</span> Can I order your products online?
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
              <div className="col-sm-6 mb-4" data-aos="fade-left">
                <h4>
                  <span>~</span> When are you opening a shop near me?
                </h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-8 book-food */}
      <section id="book-food">
        <div className="book-food">
          <div className="container book-food-text">
            <div className="row text-center">
              <div className="col-lg-9 col-md-12">
                <h2>Baked fresh daily by bakers with passion</h2>
              </div>
              <div className="col-lg-3 col-md-12 mt-lg-0 mt-4">
                <button className="main-btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-9 newsletter */}
      <section id="newsletter" data-aos="fade-up">
        <div className="newsletter wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-content text-center pb-4">
                  <h2>Hurry Up! Subscribe our newsletter and get 25% Off</h2>
                  <p>
                    Limited time offer for this month. No credit card required
                  </p>
                </div>
                <form className="newsletter">
                  <div className="row">
                    <div className="col-md-8 col-12">
                      <input
                        className="form-control"
                        placeholder="Email Address here"
                        name="email"
                        type="email"
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <button className="main-btn" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section-10 footer */}
      <footer id="footer">
        <div className="footer py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <a className="footer-link" href="#">
                  Register
                </a>
                <a className="footer-link" href="#">
                  Forum
                </a>
                <a className="footer-link" href="#">
                  Affiliate
                </a>
                <a className="footer-link" href="#">
                  FAQ
                </a>
                <div className="footer-social pt-4 text-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="#">
                    <i className="fab fa-dribbble" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="footer-copy">
                  <div className="copy-right text-center pt-5">
                    <p className="text-light">
                      © 2021. Foodies. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* JS libraries */}
    </>
  );
}

export default App;
