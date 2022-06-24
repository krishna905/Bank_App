import React from 'react';
import {Card,Row, Col, CardGroup, Button, CardColumns} from "react-bootstrap";

import './css/Homepage.css'


const Dcards=()=>{
return (

   <CardGroup className="caa">

<Row className="row1">
    <Col>
      <Card>
        <div className='hover-img'>
         
      <img className="img-responsive rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj5yir76H1sLmAd-_OPh13LbbKTaGHM5MMg&usqp=CAU.jpg" width="80%"  />
        </div>
        <Card.Body>
        <Card.Title >Pay bills</Card.Title>
       
        <Button variant="btn btn-dark"><a href="/Dc" className=" text-white">Click here</a></Button>
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
          
          <Button variant="btn btn-dark"><a href="/Csk" className=" text-white">Click here</a></Button>
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
        
        <Button variant="btn btn-dark"><a href="/Rcb" className=" text-white">Click here</a></Button>
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
        
        <Button variant="btn btn-dark"><a href="/PBKS" className=" text-white">Click here</a></Button>
      </Card.Body>
      </Card>
      </Col>
    </Row>

    <Row className="row2" >
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

  
    </Row>




   



   
  </CardGroup>

  
)
    }
  
  
   

export default Dcards