import React from 'react'
import Header1 from '../header1';
import  Footeruu from '../../Design/FooterUi'
import './abouts.css'



function About1 (){
    return (
        <div className="min">
        <Header1/>
     
           <div className="whole">

          <div className="sideone">
         <h1 id="head22">Laws & Regulations</h1>
         <br/>
      <p className='pp '>Crime & Fraud</p>
      <hr/>
      <p className='pp '>Sec & Regulory bodies</p>
      <hr/>
      <p className='pp '>Cyber Security</p>
      <hr/>
      <br/>
       </div>

       <div id="centrre">
           <h1>Dual Banking System</h1>
           <p><small>Reviewed by <strong>JULIUS MANSA</strong> on November 30, 2020</small></p>
           <h3>What Is a Dual Banking System ?</h3>
           <h7>A dual banking system is the system of banking that exists in the United States in which state banks and national banks are 
               chartered and supervised at different levels. Under the dual banking system, national banks are chartered and regulated under federal law and standards and supervised by a federal agency.
                <a href="#"> State banks</a> are chartered and regulated under state laws and standards, which includes supervision by a state supervisor. The law that created the modern banking system is believed to be the<a href="#"> Federal 
                Reserve Act</a> in 1913, which President Wilson signed. With this law, Congress established 12 District Banks to cover the country's banking needs.</h7>
                <h3>Understanding a Dual Banking System</h3>
                <h7>The dual banking system in the U.S. was born during the <a href="#">Civil War</a> period. President Abraham Lincoln's Treasury Secretary, Salmon Chase, led the effort to create the <a href="#">National Bank Act</a> of 1863, whose main
                     objective was to raise money for the North to defeat the South. This had to be done via the 
                    issuance of a common currency at the national level. Up to that point, state banknotes were in circulation. The 1863 Act created competition to state banks, and the legislators went a step further the next year by passing an 
                    amendment to tax the issuance of state banknotes.</h7>
       </div>


       </div>
      <Footeruu/>
   </div>
   
     
  
)
    }

export default About1;