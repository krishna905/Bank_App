import React, { useState } from "react";
import axios from 'axios'
import "./login.css"

import Footeruu from "../Design/FooterUi";
import { useHistory } from "react-router-dom"
import Top12 from "./Tophome";
function Login() {
    const [data1, setData1] = useState([]);
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    //Get Method
   
    const fetch1 = () => {

        axios.get(`http://localhost:8081/api/getuserlog/${email}`)

            .then((res) => {

                setData1(res.data.user);
            })
            .catch(error => {
                console.log(error)
            })

        data1.map(data => {
            if ((email == data.Email) && (password == data.Password)) {
                history.push("/home1")


            }
            else {

                { alert("Invalid Credentials") }

            }
        })

        const emailCheck = document.getElementById("email").value;
        const passwordCheck = document.getElementById("password").value;
        if ((emailCheck == "") || (!/\S+@\S+\.\S+/.test(emailCheck)))
            document.getElementById("error-email").innerHTML = "please enter valid mail"
        else
            document.getElementById("error-email").innerHTML = "";
        if (passwordCheck == "")
            document.getElementById("error-password").innerHTML = "please enter valid password"
        else
            document.getElementById("error-password").innerHTML = "";
    }

    return (
        <div id="imgback" >
            <Top12/>
            <div className="login" id="adminregform">
                <h1><i class='far fa-user-circle' ></i> Login</h1>
                <input type="text" name="email" id="email"
                    onChange={e => setEmail(e.target.value)} placeholder="Enter your Email"></input>
                <span id="error-email" class="span text-danger"></span>
                <input type="password"  className="text-info" name="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Enter your Password" ></input>
                <span id="error-password" class="span text-danger"></span>
               
                <div className="button" onClick={fetch1}>User</div>
                <div class="form-check">
  <input class="form-check-input labe" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label labe" for="flexCheckDefault">
    Remember me
  </label>
  <br/>

  <a href="#">  &nbsp;Forgot Password ?</a><hr/>
</div>
                 </div>
                
           
<Footeruu/>
        </div>

    );
}

export default Login;
