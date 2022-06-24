import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addUser } from "../../redux/action";
import Header from "../Header/Header";
import Footeruu from "../Design/FooterUi";
import './newuser.css'
const AddUser = () => {
    let history = useHistory();
    const [error, setError] = useState("")
    let dispatch = useDispatch()
    const [state, setState] = useState({
        UId: '',
        Name: '',
        AccNum: '',
        Email: '',
        Age: '',
        Contact: '',
        BankBal: '',
        Password:''

    })
    
    const { UId, Name, AccNum, Email, Age, Contact, BankBal,Password } = state;
    //const { TId, Name, Amount } = state1;

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    }
    const data={
        TId:UId,
        Name:Name,
        Amount:BankBal
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Name || !UId || !Email) {
            setError("please fill all details")
        }
        else {
            dispatch(addUser(state,data))
            history.push("/users");
            setError("");
        }



    }




    return (
        <div><Header />
            <div className="container " id="newusers1">

                <div className="card col-4 col-lg-4 login-card mt-2 ">
                {error && <h3>{error}</h3>}
                    <div className="form-group text-left mt-3">
                        <label htmlFor="UId">UId</label>
                        <input type="text"
                            className="form-control" name="UId"
                            id="uid" value={UId}
                            placeholder="Enter UId" required onChange={handleInputChange}
                        /></div>
                    <div className="form-group text-left">
                        <label htmlFor="Name">Name</label>
                        <input type="text"
                            className="form-control"
                            id="name" value={Name} onChange={handleInputChange}
                            placeholder="Name" required name="Name"
                        />

                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="AccNum">AccNum</label>
                        <input type="text"
                            className="form-control" name="AccNum"
                            id="accnum" value={AccNum} onChange={handleInputChange}
                            placeholder="Account number" required
                        />

                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="Age">Age</label>
                        <input type="text"
                            className="form-control" name="Age"
                            id="age" value={Age} onChange={handleInputChange}
                            placeholder="Age" required
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="Email">Email</label>
                        <input type="Email"
                            className="form-control" name="Email"
                            id="email" value={Email} onChange={handleInputChange}
                            placeholder="Email" required
                        />

                    </div>

                    <div className="form-group text-left">
                        <label htmlFor="Contact">Contact</label>
                        <input type="text"
                            className="form-control" name="Contact"
                            id="contact" value={Contact} onChange={handleInputChange}
                            placeholder="Contact" required
                        />

                    </div>

                    <div className="form-group text-left">
                        <label htmlFor="BankBal">BankBalance</label>
                        <input type="text"
                            className="form-control" name="BankBal"
                            id="bankbalance" value={BankBal} onChange={handleInputChange}
                            placeholder="balance" required
                        />

                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="Password">Password</label>
                        <input type="text"
                            className="form-control" name="Password"
                            id="password" value={Password} onChange={handleInputChange}
                            placeholder="password" required
                        />

                    </div>
                    <input type="button" className="btn btn-danger" value="Register" onClick={handleSubmit} />
                    
                </div>




            </div>
            <Footeruu/>
        </div>
    );
}

export default AddUser;
