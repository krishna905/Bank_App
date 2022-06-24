import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './css/foot.css'

export default function Footer() {
return (
    <div  className="foot"style={{ display: 'block', padding: 5 }}>
    
    <Carousel>
        <Carousel.Item interval={1500}>
            <img height={200} className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AfRA-6v32vu_6bB-LR2O1R1KPeFBgykCIw&usqp=CAU.jpg "  />
        
         <Carousel.Caption>
         <i class="fa fa-car fa-3x" aria-hiddeh="true" ></i>
                  <h5><p>should i experienc now are late?
                  How i can offerit?</p></h5>
                  <p>tools such as profit and has calculate show the value
                  calculator options shows the value of your
                  stock options and exercise cost</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <img height={200} className="d-block w-100 " src="https://simg.nicepng.com/png/small/98-982258_footer-bg-waves-audio.png "  />
        <Carousel.Caption>
        <i class="fa fa-home fa-3x" aria-hiddeh="true"  ></i>
        <h5><p>i own my shares-canI
          get liquidity now without
          selling</p></h5>
          <p>tools such as profit and has calculate show the value
                  calculator options shows the value of your
                  stock options and exercise cost</p>
                  </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <img height={200} className="d-block w-100" src="https://stuartfamilydental.com/wp-content/uploads/2018/02/insurance-footer-background.png"  />
        
        <Carousel.Caption>
        <i class="fa fa-balance-scale fa-3x" aria-hiddeh="true" ></i>
        <h5><p>What are my and 
          the cost of my experience?</p></h5>
          <p>tools such as profit and has calculate show the value
                  calculator options shows the value of your
                  stock options and exercise cost</p>
                  </Carousel.Caption>
        </Carousel.Item>
    </Carousel>


    <div id="bottomm1">

        <ul id="Get1">
            <p id="sider1"><strong>Get in touch</strong></p>
          <hr id="headline1"/>
              <li> Bank of Cognizant head office,</li>
              <li>Lokmangal 1501, Shivanagar,</li>
              <li>  Pune 450001,</li>
              <li> 020-420044343, 020-410044343</li>
        </ul>


      <div id="disc1">
          <p id="sider1"><strong>Important</strong></p>
            <hr id="headline1"/>
          <p>Bank of Cognizant never ask for Bank account details for any purpose through phone/sms/email.
          Bank appeals to all the customers not to respond to such phone call/email/SMS and not to share their bank account detail with
          anyone for any purpose. Never share your CVV/PIN No. of Debit/Credit Card to any one</p>
      </div>

        </div>
    </div>
);
}
