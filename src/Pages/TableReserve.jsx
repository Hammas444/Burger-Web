import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const TableReserve = () => {
  return (
    <>
    
    <Navbar/>

  <div>
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="Table.jpg" className="d-block w-100" alt="..." />
        <div className="carousel-caption  d-md-block" style={{marginBottom: 40}}>
          <h1 style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 50}}>Burger O'Clock</h1>
          <p>Best Burger Shop for our happy customers</p>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br /><br />
  <center>
    <div className="col-lg-6 col-sm-12 " style={{borderRadius: 5, boxShadow: '5px 5px 10px rgba(34, 34, 34, 0.171)'}}>
      <center> <h1 style={{fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 45}}>Reserve A Table</h1><br />
        <div className="mb-3">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" style={{width: '70%', borderRadius: 40}} />
          <div id="emailHelp" className="form-text" />
        </div>
        <br />
        <div className="mb-3">
          <input type="number" className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Family Members" style={{width: '70%', borderRadius: 40}} />
          <div id="emailHelp" className="form-text" />
        </div>
        <br />
        <div className="mb-3">
          <label style={{textAlign: 'left'}}>Pick A Date</label>
          <input type="date" className="form-control" id="Date" aria-describedby="emailHelp" placeholder="Pick A Date" style={{width: '70%', borderRadius: 40}} />
          <div id="emailHelp" className="form-text" />
        </div>
        <br />
        <div className="mb-3">
          <label style={{textAlign: 'left'}}>Pick Your Time</label>
          <input type="time" className="form-control" id="Time" aria-describedby="emailHelp" placeholder="Pick A Date" style={{width: '70%', borderRadius: 40}} />
          <div id="emailHelp" className="form-text" />
        </div>
        <br />
        <button type="submit" className="btn btn-" style={{backgroundColor: '#430c58', color: 'white', letterSpacing: 3}} onclick="Table()">Book</button>
      </center>
    </div>
  </center> 
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
 
<br /><br /><br />

    <Footer/>
    
    </>
  )
}

export default TableReserve