import React from 'react'
import Header from '../Header';
import './help.css'
import Footeruu from "../../Design/FooterUi";
//import Header1 from '../header1';




function Help (){
    return (

        <div>
          <Header/>
        <div className="abc">
      
     
           
          <div className=" text-center conss">
      <h3>Need  more help ?</h3>
      <input type="text" placeholder= "  Search.."/> <button type="submit"><i class="fa fa-search"></i></button>
      
       </div>
       <div  id="tabb">
           <a href="/quer"> <i class="fas fa-caret-right"></i>  &nbsp;How to make payments ?</a>
           <hr/>
           <a href="/quer"> <i class="fas fa-caret-right"></i> &nbsp;How to get reward ?</a><hr/>
           <a href="/quer"> <i class="fas fa-caret-right"></i> &nbsp;What is procedure to track the transaction ?</a><hr/>
           <a href="/quer"> <i class="fas fa-caret-right"></i>  &nbsp;How to get cashbacks on valid transaction ?</a><hr/>
           <a href="/quer"> <i class="fas fa-caret-right"></i>  &nbsp;What is time taken per transaction ?</a><hr/>
           <a href="/quer"> <i class="fas fa-caret-right"></i>  &nbsp;How to apply for credit/debit card ?</a>

       </div>
       <Footeruu/>
   </div>
   </div>
   
      
    
)
    }

export default  Help;