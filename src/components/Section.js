import React from 'react'
import { Col, Container, Row, } from 'react-bootstrap';
import img1 from "../assets/img/Rectangle 51.png";
import img2 from "../assets/img/image 1.png";
import img3 from "../assets/img/image 3.png";
import img4 from "../assets/img/product-cover-66.png";
import img5 from "../assets/img/product-cover-65.png";
import img6 from "../assets/img/product-cover-64.png";
import img7 from "../assets/img/product-cover-63.png";
import img8 from "../assets/img/testimonial-user-cover-23.png";
import img9 from "../assets/img/testimonial-user-cover-24.png";
import InputGroupText from 'react-bootstrap/esm/InputGroupText';

function Section() {
  return (
    <div>
      <Container>
        <Row className='align-items-center my-5'>
            <Col md={6} xs={12} className='text-start p-5'>
               <div className="mon-div-text">
                  <div className="my-border mb-5"></div>
                    <h1>Packages that are <br /> aprodable</h1>
                      <p className='mt-4'>Problems trying to resolve the conflict between <br />
                      the two major realms of Classical physics: <br />
                      Newtonian mechanics</p>
                    <h5 className='mt-4'>Learn Mor ></h5>
               </div>
            </Col>
            <Col md={6} xs={12} className='my-5 image'>
                <img src={img1} alt=""  className='img-fluid'/>
                <img src={img2} alt=""  className='img-fluid img2'/>
                <img src={img3} alt=""  className='img-fluid img3'/>
            </Col>
        </Row>
        <Row>
            <Col md={12} xs={12} className='text-start p-5'>
              <div className="mon-div-text2">
              <h6>Practice Advice</h6>
              <h1>Make online education accessible</h1>
              <p>Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics:
                Newtonian mechanics</p>
              </div>
            </Col>
            <div className="div-img p-4 gy-4">
            <Col md={3} xs={12} className='my-4'>
              <img src={img4} alt="" className='img-fluid' />   
              <button type="button" className='btn'>Sale</button> 
              <div className="div-icons">
              <i className="fa fa-heart" aria-hidden="true"></i>

              <i class="fa fa-shopping-cart" aria-hidden="true"></i>

              <i class="fa fa-eye" aria-hidden="true"></i>
              </div>

            <div className="myblock-text">
              <div className='my-titre d-flex'>
                  <h6>English</h6>
                  <div className="titre-english d-flex">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <p>4.9</p>
                  </div>
              </div>
              <div className='text-start'>
                  <h4>Graphic Design</h4>
                  <p>We focus on ergonomics <br />
                    and meeting you...
                  </p>
              </div>

              <div className="d-flex sales">
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <p>15 Sales</p>
              </div>
              <div className='d-flex div-dollar'>
                <p className='p1'>$16.48</p>
                <p className='p2'> $6.48</p>
              </div>
              <div className="my-icons d-flex">
                  <div className="d-flex div-clock">
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <p>Pro...</p>
                  </div>
                  <div className="d-flex server">
                  <i class="fa fa-server" aria-hidden="true"></i>
                  <p>64 Les...</p>
                  </div>
                  <div className="d-flex div-clock">
                  <i class="fa fa-clock" aria-hidden="true"></i>
                  <p>22hr...</p>
                  </div>
              </div>
              <div className="button ">
                <button type="button" className="my-button">Learn More</button>
              </div>
              </div>

              </Col>
              <Col md={3} xs={12} className=' my-4'>
              <img src={img5} alt="" className='img-fluid' />
              <button type="button" className='btn'>Sale</button> 
              <div className="div-icons">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <i class="fa fa-eye" aria-hidden="true"></i>
              </div>

               <div className="myblock-text">
              <div className='my-titre d-flex'>
                  <h6>English</h6>
                  <div className="titre-english d-flex">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <p>4.9</p>
                  </div>
              </div>
                  <div className='text-start'>
                  <h4>Graphic Design</h4>
                  <p>We focus on ergonomics <br />
                    and meeting you...
                  </p>
                  </div>
                  <div className="d-flex sales">
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <p>15 Sales</p>
                  </div>
                  <div className='d-flex div-dollar'>
                    <p className='p1'>$16.48</p>
                    <p className='p2'> $6.48</p>
                  </div>
                  <div className="my-icons d-flex">
                    <div className="d-flex div-clock">
                    <i class="fa fa-clock" aria-hidden="true"></i>
                    <p>Pro...</p>
                    </div>
                    <div className="d-flex server">
                    <i class="fa fa-server" aria-hidden="true"></i>
                    <p>64 Les...</p>
                    </div>
                    <div className="d-flex div-clock">
                    <i class="fa fa-clock" aria-hidden="true"></i>
                    <p>22hr...</p>
                  </div>
                  </div>
                <div className="button">
                  <button type="button" className="my-button">Learn More</button>
              </div>
              </div> 
              </Col>
              <Col md={3} xs={12} className=' my-4'>
              <img src={img6} alt="" className='img-fluid' />
              <button type="button" className='btn'>Sale</button>  
              <div className="div-icons">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <i class="fa fa-eye" aria-hidden="true"></i>
              </div>

              <div className="myblock-text">
              <div className='my-titre d-flex'>
                  <h6>English</h6>
                  <div className="titre-english d-flex">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <p>4.9</p>
                  </div>
              </div>
                  <div className='text-start'>
                  <h4>Graphic Design</h4>
                  <p>We focus on ergonomics <br />
                    and meeting you...
                  </p>
                  </div>
                  <div className="d-flex sales">
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <p>15 Sales</p>
                  </div>
                  <div className='d-flex div-dollar'>
                    <p className='p1'>$16.48</p>
                    <p className='p2'> $6.48</p>
                  </div>
                  <div className="my-icons d-flex">
                  <div className="d-flex div-clock">
                    <i class="fa fa-clock" aria-hidden="true"></i>
                    <p>Pro...</p>
                    </div>
                    <div className="d-flex server">
                    <i class="fa fa-server" aria-hidden="true"></i>
                    <p>64 Les...</p>
                    </div>
                  <div className="d-flex div-clock">
                    <i class="fa fa-clock" aria-hidden="true"></i>
                    <p>22hr...</p>
                  </div>
                  </div>
                <div className="button">
                <button type="button" className="my-button">Learn More</button>
              </div>
              </div>
              </Col>
              <Col md={3} xs={12} className=' my-4'>
              <img src={img7} alt="" className='img-fluid' />
              <button type="button" className='btn'>Sale</button>  
              <div className="div-icons">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div className="myblock-text">
              <div className='my-titre d-flex'>
                  <h6>English</h6>
                  <div className="titre-english d-flex">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <p>4.9</p>
                  </div>
                  </div>
                  <div className='text-start'>
                  <h4>Graphic Design</h4>
                  <p>We focus on ergonomics <br />
                    and meeting you...
                  </p>
                  </div>
                  <div className="d-flex sales">
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <p>15 Sales</p>
                  </div>
                  <div className='d-flex div-dollar'>
                    <p className='p1'>$16.48</p>
                    <p className='p2'> $6.48</p>
                  </div>
                  <div className="my-icons d-flex">
                    <div className="d-flex div-clock">
                      <i class="fa fa-clock" aria-hidden="true"></i>
                      <p>Pro...</p>
                      </div>
                      <div className="d-flex server">
                      <i class="fa fa-server" aria-hidden="true"></i>
                      <p>64 Les...</p>
                      </div>
                      <div className="d-flex div-clock">
                      <i class="fa fa-clock" aria-hidden="true"></i>
                      <p>22hr...</p>
                    </div>
                  </div>
                <div className="button">
                <button type="button" className="my-button">Learn More</button>
              </div>
              </div>
            </Col>
            </div>
          </Row>
          <Row>
          <Col md={12} xs={12} className='text-start p-5'>
              <div className="mon-div-text2">
              <h6>Practice Advice</h6>
              <h1>Out Experts Teacher</h1>
              <p>Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics:
                Newtonian mechanics</p>
              </div>
          </Col>

            <Col md={6} xs={12}>
            <img src={img8} className='img-fluid mn-img' alt="" />
            <div className='para'>
              <p className='mt-5'>Slate helps you see how many more days <br />
              you need to worke to reach your financial <br />
              goal for the month and year .</p>
              <div className="fa-stare">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <h5>Regina Miles</h5>
              <p>Designer</p>
            </div>
            </Col>
            <Col md={6} xs={12}>
            <img src={img9} className='img-fluid mn-img' alt="" />
            <div className='para'>
            <p className='mt-5'>Slate helps you see how many more days <br />
            you need to worke to reach your financial <br />
            goal for the month and year .</p>
            <div className="fa-stare">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <h5>Regina Miles</h5>
            <p>Designer</p>
            </div>
            </Col>
          </Row>
          <Row>
          <Col md={12} xs={12} className='text-center p-5'>
              <div className="mon-div-text2">
              <h6>Practice Advice</h6>
              <h1>Featured Products</h1>
              <p>Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics:
                Newtonian mechanics</p>
              </div>
                <div class="input-group mb-3 justify-content-center">
                  <InputGroupText type="text" class="form-control button-newlester" placeholder="Your Email" aria-label="Your Email" aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Subscriptible</button>
                </div>
          </Col>
          </Row>
          </Container>
        
          <footer className="my-footer">
          <Container>
          <Row>
            <Col md={3} xs={12}>
              <h4>Get In Touch</h4>
              <p>The quick fox jumps over the <br />
                lazy dog
              </p>
              <a href="">
              <i class="fa-brands fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="">
              <i class="fa-brands fa-twitter" aria-hidden="true"></i>
              </a>
            </Col>
            <Col md={3} xs={12}>
              <h4>Company Info</h4>
              <p>About Us</p>
              <p>Carrier</p>
              <p>Wi are hiring</p>
              <p>Blog</p>
            </Col>
            <Col md={3} xs={12}>
              <h4>Features</h4>
              <p>Business Marekting</p>
              <p>User Analytic</p>
              <p>Live Chat</p>
              <p>Unlimited Support</p>
            </Col>
            <Col md={3} xs={12}>
              <h4>Resources</h4>
              <p>IOS & Androif</p>
              <p>Watch a Demo</p>
              <p>Customers</p>
              <p>API</p>
            </Col>
          </Row>
          </Container>
          </footer>

          <div className="text-center p-3">
            <p className='mt-2 text-figma'>Made With Love By Figmaland All Right Reserved</p>
          </div>
    
    </div>
  )
}

export default Section;
