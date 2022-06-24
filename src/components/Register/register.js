import React, { useState } from "react";
import axios from 'axios'
//import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router';
import "./register.css"
import Footeruu from "../Design/FooterUi";


function Register() {

    const history = useHistory()
    //Get Method
    const [email, setEmail] = useState("");
    const [AId, setAId] = useState("");
    const [password, setPassword] = useState("");
    const fetch = () => {
        const data = {
            Gmail: email,
            AId: AId,
            Password: password
        }
       
        

        

        axios.post('http://localhost:8081/api/createadmin', data)
            .then(response => {
                console.log(response.data.admin);
                alert("Registered successfully")
            })
            .catch(error => {
                console.log(error)
            })


        const emailCheck = document.getElementById("email").value;
        const passwordCheck = document.getElementById("password").value;
        if ((emailCheck == "") || (!/\S+@\S+\.\S+/.test(emailCheck)))
            document.getElementById("error-email").innerHTML = "please enter valid mail"
        if (passwordCheck == "")
            document.getElementById("error-password").innerHTML = "please enter valid password"

    }
     
    

   
    return (
        <div id="imgbacck">
        <div className="register">
            <h1 className="text-white"> <i class='far fa-user-circle' ></i> Create</h1>
            <input type="text" name="AId" id="id" placeholder="Your AId" onChange={e => setAId(e.target.value)}></input>
            <input type="text" name="email" id="email" placeholder="Your Email" onChange={e => setEmail(e.target.value)}></input>
            <input type="password" name="password" id="password" placeholder="Your Password" onChange={e => setPassword(e.target.value)}></input>

            <div className="button" id="bluebutt" onClick={fetch} >Create</div>
            <div id="or" className="text-white">or</div>
            <div className="button" id="bluebutt1" onClick={() => history.push("/home")}>Cancel</div>
            <br/>
           
        </div>
        <Footeruu/>
        </div>
    );
}

export default Register;
