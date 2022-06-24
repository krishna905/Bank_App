import React,  { useState } from 'react'
import Header1 from '../header1';
import './help.css'
import Footeruu from "../../Design/FooterUi";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;




function Help1 (){

    const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


    

  return (
    <div>
    <div className="app">
       <Header1/>
      
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
     
      <div className=" text-center conss">
      <h3>Need  more help ?</h3>
      <input type="text" placeholder= "  Search.."/> <button type="submit"><i class="fa fa-search"></i></button>
      
       </div>
       <div  id="tabb">
           <a href="/quer1"> <i class="fas fa-caret-right"></i>  &nbsp;How to make payments ?</a>
           <hr/>
           <a href="/quer1"> <i class="fas fa-caret-right"></i> &nbsp;How to get reward ?</a><hr/>
           <a href="/quer1"> <i class="fas fa-caret-right"></i> &nbsp;What is procedure to track the transaction ?</a><hr/>
           <a href="/quer1"> <i class="fas fa-caret-right"></i>  &nbsp;How to get cashbacks on valid transaction ?</a><hr/>
           <a href="/quer1"> <i class="fas fa-caret-right"></i>  &nbsp;What is time taken per transaction ?</a><hr/>
           <a href="/quer1"> <i class="fas fa-caret-right"></i>  &nbsp;How to apply for credit/debit card ?</a>

       </div>
        <label class="switch">
         <input type="checkbox"/>
          <span onClick={()=>themeToggler()} class="slider"></span>
        </label>
       
      </StyledApp>
    </ThemeProvider>
    </div>
    <Footeruu/></div>
  );
}








   /* return (
        <div className="abc">
        <Header1/>
     
           
          <div className=" text-center conss">
      <h3>Need  more help ?</h3>
      <input type="text" placeholder= "  Search.."/> <button type="submit"><i class="fa fa-search"></i></button>
      
       </div>
       <div  id="tabb">
           <a href="/quer1"> <i class="fas fa-caret-right"></i>  &nbsp;How to make payments ?</a>
           <hr/>
           <a href="/quer1"> <i class="fas fa-caret-right"></i> &nbsp;How to get reward ?</a><hr/>
           <a href="/quer1"> <i class="fas fa-caret-right"></i> &nbsp;What is procedure to track the transaction ?</a><hr/>
           <a href="/quer1"> <i class="fas fa-caret-right"></i>  &nbsp;How to get cashbacks on valid transaction ?</a><hr/>
           <a href="/quer1"> <i class="fas fa-caret-right"></i>  &nbsp;What is time taken per transaction ?</a><hr/>
           <a href="/quer1"> <i class="fas fa-caret-right"></i>  &nbsp;How to apply for credit/debit card ?</a>

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
     <button onClick={() => themeToggler()}>Change Theme</button>
     </div>
     /* */
  

export default  Help1;