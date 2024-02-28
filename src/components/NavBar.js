import { Container, Navbar, Nav, Row, Col  } from 'react-bootstrap';
import { Check2All, CreditCard, EmojiDizzy} from 'react-bootstrap-icons';
import React from 'react'

export default function  NavBar(){
  const myCards = [
    {icon: <EmojiDizzy size={30} color="red" />, title: "training Courses", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, voluptatibus."},
    {icon: <Check2All size={30} color="green" />, title: "2,769 online Courses", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, voluptatibus."},
    {icon: <CreditCard size={30} color="skyblue" className='CreditCard' />, title: "training Courses ", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, voluptatibus."},
  ]
  return (
    <div>
   <header className=''>
   <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
      <Navbar.Brand className="navbar" href="#brandname">BrandName</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navbar" id="responsive-navbar-nav">
          <Nav className="m-auto navbar-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          <div className='nav-login'>
            <a href="/" className='login'>
            <h5>Login</h5>
            </a>
            <button type="button" className="btn btn-primary">JOING US --</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="text p-5 mt-5">
        <h6>welcome</h6>
        <h1>Selling on the <br />
          internet like a pro
        </h1>
        <p>
          We know how large objects will act, but things on a <br />
          small scale just do not act that way
        </p>

        <div className="button">
          <div className="div-button-1">
              <button type="button" className="btn">Get Quot Now</button>
          </div>
          <div className="div-button-2">
              <button type="button" className="btn ">Learn More</button>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          {
            myCards.map((card, k) => (
            <Col md={4}>
              <div className={`first p-5 mb-4 ${k === 0 ? 'first1 ': k === 1 ? 'first1' : k === 2 ? 'first2' : ''}`}>
               <div className={`myhead-card ${k === 0 ? 'mini-card-0': k === 1 ? 'mini-card-1': k === 2 ? 'mini-card-2':''}`}>
                 {card.icon}
               </div>
               <div className={`mon-titre ${k === 0 ? 'mon-titre-0': k === 1 ? 'mon-titre-1': k === 2 ? 'mon-titre-2':''}`}>
                 <h5>{card.title}</h5>
               </div>
               <div className="mybord">
                 <div className={`myborder ${k === 0 ? 'myborder-0': k === 1 ? 'myborder-1': k === 2 ? 'myborder-2':''}`}></div>
               </div>
               <div className={`mytext ${k === 0 ? 'mytext-0': k === 1 ? 'mytext-1': k === 2 ? 'mon-titre-2':''}`}>
                 <p>{card.text}</p>
               </div>
           </div>
          </Col>
            ))
          }
        </Row>
      </Container>
   </header>
    </div>
  )
}

