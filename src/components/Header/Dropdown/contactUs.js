import React from 'react'
import Header from '../Header';
import './help.css'
import  Footeruu from '../../Design/FooterUi'




function Cons (){
    return (
        <div className="abc">
        <Header/>
     
           
          <div className=" text-center conss">
      <h3>Didn't find what you were looking for ?</h3>
       </div>
       <div id="middle">
       <a href="#"><i class="fas fa-comments"></i>Chat with us</a> &nbsp;&nbsp;
       <a href="/signin1"><i class="fas fa-phone-square-alt"></i> Contact us</a>
       </div>
       <Footeruu/>
   </div>
   
      /* <div>
           <Header/>
       <Navbar  expand="lg" className="dcc">
    
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
           
            <Nav.Link className=" text" ><i class="fas fa-mobile-alt mobile"  ></i> Mobile Recharge</Nav.Link>
            <Nav.Link  className=" text"  >Contact</Nav.Link><br/>
            <Nav.Link className=" text "  >Users</Nav.Link>
     </Navbar.Collapse>
     </Navbar>
     </div>
     /* */
  
)
    }

export default  Cons;