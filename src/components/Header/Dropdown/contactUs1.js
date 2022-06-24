import React from 'react'
import Header1 from '../header1';
import './help.css'
import  Footeruu from '../../Design/FooterUi'
import emailjs from 'emailjs-com';

function Cons1 (){

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_tnrgavw',
         'template_0nhonnv',
         e.target,
        'user_PpuXZCu5tT1r84LwuTiHq'
         ). then ( res=>{
            console.log(res)
        }). catch(err=>console.log(err)) 
    }

    return (

<div>
    <Header1/>
       
            <form className="contact-form form12" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <label>Name</label>
              <input type="text" name="fr_name" /><br/>
              <label>Email</label>
              <input type="email" name="fr_email" /><br/>
             
              <label>Message</label>
              <textarea id='#messbox' name="ht_message" /><br/>
              <input type="submit" value="Send" />
            </form>
            <Footeruu/>
            </div>
          );
        }








        /*<div className="abc">
        <Header/>
     
           
          <div className=" text-center conss">
      <h3>Didn't find what you were looking for ?</h3>
       </div>
       <div id="middle">
       <a href="#"><i class="fas fa-comments"></i>Chat with us</a> &nbsp;&nbsp;
       <a href="#"><i class="fas fa-phone-square-alt"></i> Contact us</a>
       </div>
       <Footeruu/>
   </div>*/
   
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
  


export default  Cons1;



/*import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="html_message" />
      <input type="submit" value="Send" />
    </form>
  );
}*/