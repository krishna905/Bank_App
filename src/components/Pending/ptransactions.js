import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addptransaction } from "../../redux/action";
//import Header from "../Header/header1";
import Header1 from "../Header/header1";
import Footeruu from "../Design/FooterUi";
import './ptransaction.css'
const AddUser = () => {
    let history = useHistory();
    const [error, setError] = useState("")
    let dispatch = useDispatch()
    const [state, setState] = useState({
        Id: '',
        ToId: '',
        SendMoney: ''

    })
    
    const { Id, ToId, SendMoney} = state;
    //const { TId, Name, Amount } = state1;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( !Id || !SendMoney||!ToId) {
            setError("please fill all details")
        }
        else {
            dispatch(addptransaction(state))
            history.push("/home1");
            setError("");
        }



    }




    return (
        <div><Header1 />
            <div className="container mx-auto">

                <div className="card col-4 col-lg-4 login-card mt-2 ">
                {error && <h3>{error}</h3>}
                    <div className="form-group text-left mt-3">
                        <label htmlFor="UId">Id</label>
                        <input type="text"
                            className="form-control" name="Id"
                            id="id" value={Id}
                            placeholder="Enter Id" required onChange={handleInputChange}
                        /></div>
                        <div className="form-group text-left mt-3">
                        <label htmlFor="Id">To AccountNumber</label>
                        <input type="text"
                            className="form-control" name="ToId"
                            id="toid" value={ToId}
                            placeholder="Enter account number" required onChange={handleInputChange}
                        /></div>
                         <div className="form-group text-left mt-3">
                        <label htmlFor="UId">Transfer amount</label>
                        <input type="text"
                            className="form-control" name="SendMoney"
                            id="sendmoney" value={SendMoney}
                            placeholder="Enter Amount" required onChange={handleInputChange}
                        /></div>
                    
                    <input type="button" className="btn btn-danger btnn123" value="Send" onClick={handleSubmit} />
                    
                </div>




            </div>
            <Footeruu/>
        </div>
    );
}

export default AddUser;
