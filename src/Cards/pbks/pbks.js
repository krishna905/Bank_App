import React from "react";

//import Header from '../components/Header'
import {Card,Row, Col, CardGroup, Button, CardColumns} from "react-bootstrap";
import './pbks.css'
import Footeruu from "../../components/Design/FooterUi";
import Header from "../../components/Header/Header";
//import Footeruu from "../FooterUi";

function PBKS (){
    return (
      <div>
        
      <CardGroup className="caa">
<Header/>
      <Row id='row1' >
          <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://images.financialexpress.com/2021/08/z5-9-620x400.jpg?w=620&h=400&imflag=true.jpg" width="90%"  />
              </div>
              <Card.Body>
              <Card.Title >Insurance</Card.Title>
             
              <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
            </Card.Body>
            </Card>
            </Col>
          
          <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://www.valueresearchonline.com/content-assets/images/28902_20210406-first-things__w660__.jpg" width="76%"  />
              </div>
              <Card.Body>
                <Card.Title tag="h5">Invest</Card.Title>
                
                <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
              </Card.Body>
            </Card>
            </Col>
          
          
            <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://responsive.fxempire.com/cover/615x410/_n/_fxempire_/2021/01/Gold-Bars.jpg" width="83%"  />
              </div>
              <Card.Body>
              <Card.Title>Gold</Card.Title>
              
              <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
            </Card.Body>
            </Card>
            </Col>
      
          <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://www.cfmco.org/wp-content/uploads/2020/03/CFMC-COVID-Relief-Fund-Blog-Graphic.png" width="95%"  />
              </div>
              <Card.Body>
              <Card.Title tag="h5">Covid Relief Fund</Card.Title>
              
              <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
            </Card.Body>
            </Card>
            </Col>
          </Row>

          <Row id='row2' >
          <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://www.forbes.com/advisor/wp-content/uploads/2019/08/gettyimages-1050881944-612x612-e1565718161876.jpg" width="80%"  />
              </div>
              <Card.Body>
              <Card.Title >Loan payments</Card.Title>
             
              <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
            </Card.Body>
            </Card>
            </Col>
          
          <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsMYj2sFH7d2hoi_nyFTNSsIYkzmMCrgiJQ&usqp=CAU" width="86%"  />
              </div>
              <Card.Body>
                <Card.Title tag="h5">Broadband</Card.Title>
                
                <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
              </Card.Body>
            </Card>
            </Col>
          
          
            <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://www.startlingworld.in/images/Fastag%20Recharge.png" width="46%"  />
              </div>
              <Card.Body>
              <Card.Title>FASTag recharge</Card.Title>
              
              <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
            </Card.Body>
            </Card>
            </Col>
      
          <Col>
            <Card>
              <div className='hover-img'>
               
            <img className="img-responsive rounded" src="https://image.shutterstock.com/image-vector/family-protect-260nw-106868171.jpg" width="43%"  />
              </div>
              <Card.Body>
              <Card.Title tag="h5">Child welfare</Card.Title>
              
              <Button variant="btn btn-dark"><a href="#" className=" text-white">Click here</a></Button>
            </Card.Body>
            </Card>
            </Col>
          </Row>
          </CardGroup>

          <Footeruu/>
          </div>
)
    };

export default PBKS;




