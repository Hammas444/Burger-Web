import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
<Navbar/>

<div>
  <section>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="bg.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block" style={{marginBottom: 40}}>
            <h1 style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Burger O'Clock</h1>
            <p>Best Burger Shop for our happy customers</p>
            <a className="btn btn- btn-" href="Meals.html" role="button" id="mainbutton">Go and Explore</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  <section>
    <div className="jumbotron">
      <h1 className="display-4 text-center" style={{color: 'rgb(0, 0, 0)', fontFamily: '"Baloo 2", cursive'}}>Our Studio</h1>
      <p className="lead text-center" style={{color: 'rgb(0, 0, 0)'}}>Professional services in Photography and Cinematography. But, is that enough to describe us? We think, No.Then who are we? We are …
        A Brand, you deserve to benefit from.
        A Studio, where your dreams and emotions are brought to life.
        A Team, which believes and excels in making impossible, possible.Our team aspires to meet international standards and show excellence in every department of our business. We bear and promise uncompromised Commitment, Service, Quality and Innovation.We aim to initiate all the hard work and keep it simple and fun for our clients.</p>
      <center><a className="btn btn- btn-lg" href="About.html" role="button" style={{backgroundColor: '#DCE35B', borderRadius: '0%', boxShadow: '2px 2px 10px rgba(105, 105, 105, 0.342)'}}>Learn More</a></center>
    </div>
  </section>
  <br /><br /><br /><br /><br />
  <section>
    <h1 className="display-4 text-center" style={{color: 'rgb(0, 0, 0)', fontFamily: '"Baloo 2", cursive'}}>Featured Products</h1>
    <div className="container">
      <center><div className="row">
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card mt-2" style={{width: '18rem', border: 'none'}}>
              <div className="card-body" style={{backgroundColor: '#ffffff'}}>
                <a href="Meals.html"><div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="c1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                      </div>
                    </div>
                  </div></a>
                <br />
                <a href="Meals.html" className="btn btn-" style={{background: 'linear-gradient(to right,#ff8411,#ff3a17)', color: 'white', border: 'none', borderRadius: '0%', width: 250, boxShadow: '2px 2px 10px rgba(105, 105, 105, 0.541)'}}>
                  Explore</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card mt-2" style={{width: '18rem', border: 'none'}}>
              <div className="card-body">
                <a href="Meals.html
      "><div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="ice-cream-sandwich-cake-featured-500x500.webp" className="d-block w-100" alt="..." />
                        <div className="carousel-caption  d-md-block" style={{marginBottom: 40}}>
                        </div>
                      </div>
                    </div>
                  </div></a>
                <br />
                <a href="Meals.html" className="btn btn-" style={{background: 'linear-gradient(to right,#ff8411,#ff3a17)', color: 'white', border: 'none', borderRadius: '0%', width: 250, boxShadow: '2px 2px 10px rgba(105, 105, 105, 0.541)'}}>Explore</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="card mt-2" style={{width: '18rem', border: 'none'}}>
              <div className="card-body">
                <a href="Meals.html"><div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="shutterstock_1773695441-min-600x600.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption  d-md-block" style={{marginBottom: 40}}>
                        </div>
                      </div>
                    </div>
                  </div></a>
                <br />
                <a href="Meals.html" className="btn btn-" style={{background: 'linear-gradient(to right,#ff8411,#ff3a17)', color: 'white', border: 'none', borderRadius: '0%', width: 250, boxShadow: '2px 2px 10px rgba(105, 105, 105, 0.541)'}}>Explore</a>
              </div>
            </div>
          </div>
        </div></center>
    </div>
  </section>
  <br /><br />  <br /><br />  <br /><br />
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="food-13642.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption  d-md-block" style={{marginBottom: 40}}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 " style={{position: 'relative'}}>
          <div className="jumbotron">
            <h1 className="display-2" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, color: 'rgb(252, 136, 27)'}}>Get The Best Food Ever</h1>
            <p className="lead" style={{letterSpacing: 2, fontFamily: '"Baloo 2", cursive'}}>Bringing Pakistan's first food discovery platform for real foodies. Search your favorite food, give reviews, check out amazing recipes of top chefs and a lot more.</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  </section><br /><br /><br />  <br /><br />
  <section>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="section.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block" style={{marginBottom: 40}}>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <div id="m1" style={{display: 'none'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="pasta-dishes-lead-1-1588367700.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Pasta</h1>
            <p className="text-center">Enter Quantity</p>
            <center><input type="number" /></center>
          </div>
          <div id="m2" style={{display: 'none'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="sand.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Sandwich</h1>
            <p className="text-center">Enter Quantity</p>
            <center><input type="number" /></center>
          </div>
          <div id="m3" style={{display: 'none'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="ice (2).jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Ice Cream</h1>
            <p className="text-center">Enter Quantity</p>
            <center><input type="number" /></center>
          </div>
          <div id="m4" style={{display: 'none'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="c1.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Burger</h1>
            <p className="text-center">Enter Quantity</p>
            <center><input type="number" /></center>
          </div>
          <div id="m5" style={{display: 'none'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="ice-cream-sandwich-cake-featured-500x500.webp" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Pastry</h1>
            <p className="text-center">Enter Quantity</p>
            <center><input type="number" /></center>
          </div>
          <div id="m6" style={{display: 'none'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="shutterstock_1773695441-min-600x600.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Sea Food</h1>
            <p className="text-center">Enter Quantity</p>
            <center><input type="number" /></center>
          </div>
          <div id="m7" style={{display: 'none'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="bro.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Broast</h1>
            <p className="text-center">Enter Quantity</p>
            <center><input type="number" /></center>
          </div>
          <div id="m8" style={{display: 'none'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="piza.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Pizza</h1>
            <p className="text-center">Enter Quantity</p>
            <center><input type="number" /></center>
          </div>
          <div id="m9" style={{display: 'none'}}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="fish.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center" style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Fish</h1>
            <p className="text-center">Enter Quantity</p>
            <center><input type="number" /></center>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#" className="btn btn-" style={{background: 'linear-gradient(to right,#ff8411,#ff3a17)', color: 'white', border: 'none', borderRadius: '0%', width: 250, boxShadow: '2px 2px 10px rgba(105, 105, 105, 0.541)'}}>Get Now</a>
        </div>
      </div>
    </div>
  </div>
</div>



<br /><br />





<Footer/>
    </>
  )
}

export default Home