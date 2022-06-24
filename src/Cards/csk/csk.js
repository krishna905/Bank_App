


import React from "react";
//import Header from '../components/Header'
import {Card,Row, Col, CardGroup, Button, CardColumns} from "react-bootstrap";
import Footeruu from "../../components/Design/FooterUi";
import Header from "../../components/Header/Header";
import './csk.css'
//import Footeruu from "../FooterUi";

function Csk (){
    return (
      <div> 
        <Header/>
      <CardGroup className="caa">

      <Row >
          <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://entrackr.com/wp-content/uploads/2019/02/zomato-1200x600.jpg" width="100%"  />
              </div>
              <Card.Body>
              <Card.Title >Zomato</Card.Title>
              <Card.Text >Get $300 cashback</Card.Text>
              <Button variant="btn btn-dark"><a href="#" className="text-white">Click here</a></Button>
            </Card.Body>
            <Card.Footer>
      <small className="text  zomato">Expires in 10 days</small>
    </Card.Footer>
            </Card>
            </Col>
          
          <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn9wXEymyTqt6vTZqWd7wke5Jfo_5S4VxTA&usqp=CAU.jpg" width="80%"  />
              </div>
              <Card.Body>
                <Card.Title tag="h5">FlipKart</Card.Title>
                <Card.Text >Getflat 20 cashback</Card.Text>
                <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
              </Card.Body>
              <Card.Footer>
      <small className="text flipkart">Expires in 10 days</small>
    </Card.Footer>
            </Card>
            </Col>
          
          
            <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://miro.medium.com/max/1000/1*fpW1jv595xjp0G1LiaLEjQ.jpeg" width="90%"  />
              </div>
              <Card.Body>
              <Card.Title>Swiggy</Card.Title>
              <Card.Text >Get 10% off on order above 500</Card.Text>
              <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
            </Card.Body>
            <Card.Footer>
      <small className="text swiggy">Expires in 2 hours</small>
    </Card.Footer>
            </Card>
            </Col>
      
          <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://www.theindianwire.com/wp-content/uploads/2020/08/Amazon-1.jpg" width="88%"  />
              </div>
              <Card.Body>
              <Card.Title tag="h5">Amazon</Card.Title>
              <Card.Text >Get 20% off on order above 999</Card.Text>
              <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
            </Card.Body>
            <Card.Footer>
      <small className="text-muted">Expired on Oct 1st</small>
    </Card.Footer>
            </Card>
            </Col>
          </Row>
          <Row className="row2">
          <Col>
            <Card className="scratched">
              <Card.Body className="scratch">
              <Card.Text>Tap to scratch</Card.Text>
              <p><i class="fas fa-gem sym2"></i></p>
            </Card.Body>
           
            </Card>
            </Col>
            <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://www.theindianwire.com/wp-content/uploads/2020/08/Amazon-1.jpg" width="88%"  />
              </div>
              <Card.Body>
              <Card.Title tag="h5">Amazon</Card.Title>
              <Card.Text >Get 20% off on order above 999</Card.Text>
              <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
            </Card.Body>
            <Card.Footer>
      <small className="text-muted">Expired on Oct 1st</small>
    </Card.Footer>
            </Card>
            </Col>

            <Col>
            <Card className="scratched">
              <Card.Body className="scratch">
              <Card.Text>Tap to scratch</Card.Text>
              <p><i class="fas fa-gem sym2"></i></p>
            </Card.Body>
           
            </Card>
            </Col>

            <Col>
            <div >
            <Card className="expired">
              <Card.Body className="expire">
              <Card.Text>Expired</Card.Text>
              <p><i class="fas fa-crown sym"></i></p>
            </Card.Body>
            </Card>
            </div>
            </Col>
          </Row>
          <Row className="row3">
          <Col>
            <Card className="nykaa">
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://www.orissapost.com/wp-content/uploads/2021/08/Nykaa-.jpg" width="93%"  />
              </div>
              <Card.Body>
              <Card.Title tag="h5">Nykaa</Card.Title>
              <Card.Text >Get 20% off on beauty products</Card.Text>
              <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
            </Card.Body>
            <Card.Footer>
      <small className="text nyka">Expires on Oct 30th</small>
    </Card.Footer>
            </Card>
            </Col>
          </Row>
        </CardGroup>
        <Footeruu/>
        
        </div>
)
    };

export default Csk;




