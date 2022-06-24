import React from "react";
import Footeruu from "../../components/Design/FooterUi";
import Header1 from '../../components/Header/header1'
import '../dc/dc.css'
import Top from '../Homee/homee'

function Dc1 (){
    return (
        <div className="d">
        <Header1/>
        <Top/>
     
           <div className="bo">
          <div className="dcc">
       <a href="#"  ><i class="fas fa-mobile-alt mobile"  ></i><a className='tit'> Mobile Recharge</a> </a><br/><br/>
       <a href="#"  ><i class="fas fa-tv mobile"  ></i> Dth</a><br/><br/>
       <a href="#"  ><i class="fas fa-rupee-sign mobile"  ></i><a className='tit'> Fees</a></a><br/><br/>
       <a href="#"  ><i class="fas fa-bolt mobile"  ></i>Electricity </a><br/><br/>
       <a href="#"  ><i class="fas fa-credit-card mobile"></i>Credit/Debit card</a><br/><br/>
       
       </div>
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

export default Dc1;




