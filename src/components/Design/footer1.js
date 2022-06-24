import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './css/foot.css'

export default function Footer1() {
return (
    <div  className="foot"style={{ display: 'block', padding: 5 }}>
    
   
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
