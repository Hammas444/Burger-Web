import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <>
    
    <Navbar/>


   <div>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption  d-md-block" style={{marginBottom: 40}}>
          <h1 style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Burger O'Clock</h1>
          <p>Best Burger Shop for our happy customers</p>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br /><br />
  <div className="jumbotron">
    <h1 className="display-4 text-center" style={{fontFamily: '"Poppins", sans-serif'}}>About</h1>
    <p className="lead" style={{textAlign: 'left'}}>You don’t need to know someone, or have an agent, or have a name to contribute to Prism. We’re the place where creators meet their audience, where individuals become a community and where anyone can become a source for creativity. So whether you’re new to photography or consider yourself a pro—your images are welcome here.How we started? The concept was simple. Unsplash was born from the pain we had in finding great, usable imagery. Today, Unsplash is a platform fuelled by a community who give their work for free in support of the creatives everywhere. Without them, none of this would be possible.Prism is a platform powered by an amazing community that has gifted hundreds of thousands of their own photos to fuel creativity around the world. So sign up for free, or don’t. Either way, you’ve got access to over 3 million photos under the license—which makes them free to do-whatever-you-want with.</p>
    <br /><br /><br />
    <h1 className="display-4 text-center" style={{fontFamily: '"Poppins", sans-serif'}}>Get to know us</h1>
    <p className="lead" style={{textAlign: 'left'}}>We love helping you bring ideas to life.
      We want to grow every day. Our goal is to offer the best high-quality content: illustrations, photos, icons, mockups, and presentations templates.Alejandro felt the urge to create a platform where designers could find free graphic resources. Pablo and Joaquín supported his idea and that’s how  Company was created.</p>
  </div>  
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
                  <img src="images/pasta-dishes-lead-1-1588367700.jpg" className="d-block w-100" alt="..." />
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
                  <img src="images/sand.jpg" className="d-block w-100" alt="..." />
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
                  <img src="images/ice (2).jpg" className="d-block w-100" alt="..." />
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
                  <img src="images/c1.jpg" className="d-block w-100" alt="..." />
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
                  <img src="images/ice-cream-sandwich-cake-featured-500x500.webp" className="d-block w-100" alt="..." />
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
                  <img src="images/shutterstock_1773695441-min-600x600.jpg" className="d-block w-100" alt="..." />
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
                  <img src="images/bro.jpg" className="d-block w-100" alt="..." />
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
                  <img src="images/piza.jpg" className="d-block w-100" alt="..." />
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
                  <img src="images/fish.jpg" className="d-block w-100" alt="..." />
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


    <Footer/>
    
    
    </>
  )
}

export default About