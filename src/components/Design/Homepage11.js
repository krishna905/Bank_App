import React from 'react';
import {Card,Row, Col, CardGroup, Button, CardColumns} from "react-bootstrap";

import './css/Homepage.css'


const Dcards1=()=>{
return (
<div>
   <CardGroup className="caa">

<Row className="row1">
    <Col>
      <Card>
        <div className='hover-img'>
         
      <img className="img-responsive rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj5yir76H1sLmAd-_OPh13LbbKTaGHM5MMg&usqp=CAU.jpg" width="80%"  />
        </div>
        <Card.Body>
        <Card.Title >Pay bills</Card.Title>
       
        <Button variant="btn btn-dark"><a href="/Dc1" className=" text-white">Click here</a></Button>
      </Card.Body>
      </Card>
      </Col>
    
    <Col>
      <Card>
        <div className='hover-img'>
         
      <img className="img-responsive rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx15IJSqWNYDsrwhfrq--7pWdVVcvRcrHPcQ&usqp=CAU.jpg" width="53%"  />
        </div>
        <Card.Body>
          <Card.Title tag="h5">Rewards</Card.Title>
          
          <Button variant="btn btn-dark"><a href="/Csk1" className=" text-white">Click here</a></Button>
        </Card.Body>
      </Card>
      </Col>
    
    
      <Col>
      <Card>
        <div className='hover-img'>
         
      <img className="img-responsive rounded" src="https://image.shutterstock.com/image-vector/loudspeaker-megaphone-lightings-on-red-260nw-1877854276.jpg" width="73%"  />
        </div>
        <Card.Body>
        <Card.Title>More Info</Card.Title>
        
        <Button variant="btn btn-dark"><a href="/Rcb1" className=" text-white">Click here</a></Button>
      </Card.Body>
      </Card>
      </Col>

    <Col>
      <Card>
        <div className='hover-img'>
         
      <img className="img-responsive rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLg0qP9WCOXR-Y3c801B1ab_W7fMVoedksbw&usqp=CAU.jpg" width="50%"  />
        </div>
        <Card.Body>
        <Card.Title tag="h5">See all</Card.Title>
        
        <Button variant="btn btn-dark"><a href="/PBKS1" className=" text-white">Click here</a></Button>
      </Card.Body>
      </Card>
      </Col>
    </Row>

    {/*<Row className="row2" >
    <Col>
      <Card className='deposits'>
        <Card.Body>
          <h6 className=" text-muted head">Deposits</h6>
        <Card.Title className="amm" >$ 9,02,098</Card.Title>
      </Card.Body>
      <Card.Footer >
      <small className="sub">Last updated 3 mins ago</small>
    </Card.Footer>
      </Card>
      </Col>
    
    <Col>
    <Card className='savings'>
        
        <Card.Body>
          <h6 className=" text-muted head2">Savings</h6>
        <Card.Title className="amm2" >$ 29,098</Card.Title>
       
        
      </Card.Body>
      <Card.Footer >
      <small className=" sub2">Last updated 9 mins ago</small>
    </Card.Footer>
      </Card>
      </Col>
    
    
      <Col>
      <Card className='withdraw'>
        
        <Card.Body>
          <h6 className=" text-muted head3">With drawals</h6>
        <Card.Title className="amm3" >$ 5,05,010</Card.Title>
       
        
      </Card.Body>
      <Card.Footer >
      <small className=" sub3">Last updated 8 mins ago</small>
    </Card.Footer>
      </Card>
      </Col>

  
</Row>*/}




   



   
  </CardGroup>
  <div  className="foott1"style={{ display: 'block', padding: 5 }}>
    
   
    <div id="bottomm11">

        <ul id="Get11">
            <p id="sider11"><strong>Get in touch</strong></p>
          <hr id="headline11"/>
              <li> Bank of Cognizant head office,</li>
              <li>Lokmangal 1501, Shivanagar,</li>
              <li>  Pune 450001,</li>
              <li> 020-420044343, 020-410044343</li>
        </ul>


      <div id="disc11">
          <p id="sider11"><strong>Important</strong></p>
            <hr id="headline11"/>
          <p>Bank of Cognizant never ask for Bank account details for any purpose through phone/sms/email.
          Bank appeals to all the customers not to respond to such phone call/email/SMS and not to share their bank account detail with
          anyone for any purpose. Never share your CVV/PIN No. of Debit/Credit Card to any one</p>
      </div>

        </div>


   
    </div>
  </div>

  
)
    }
  
  
   

export default Dcards1