import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { updateUser, loadUsersByid } from "../../redux/action";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footeruu from "../Design/FooterUi";
const EditUser = () => {
    const [state, setState] = useState({
        UId: '',
        Name: '',
        AccNum: '',
        Email: '',
        Age: '',
        Contact: '',
        BankBal: ''

    })
    
    let history = useHistory();
    const [error, setError] = useState("")
    let { id } = useParams()
    const { users } = useSelector((state) => state.data)
    console.log(users)
    let dispatch = useDispatch()
    const {UId,Name,AccNum,Email,Age,Contact, BankBal } = state;

    useEffect(() => {
        dispatch(loadUsersByid(id))
    }, [])

    
    useEffect(() => {
        if (users) {
            setState(...users);
        }
    },[users]);


    

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
            dispatch(updateUser(state, UId,data));        
            history.push("/users");
            setError("");
        }



    }

    return (
        <div>
            <Header />
            <div className="container">
                
                <div className="card col-4 col-lg-4 login-card mt-2 ">
                    {error && <h3>{error}</h3>}
                    <div className="form-group text-left mt-3">
                        <label htmlFor="UId">UId</label>
                        <input type="text"
                            className="form-control" name="UId"
                            id="uid" value={UId || ""}
                            placeholder="Enter UId" required onChange={handleInputChange}
                        /></div>
                    <div className="form-group text-left">
                        <label htmlFor="Name">Name</label>
                        <input type="text"
                            className="form-control"
                            id="name" value={Name || ""} onChange={handleInputChange}
                            placeholder="Name" required name="Name"
                        />

                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="AccNum">AccNum</label>
                        <input type="text"
                            className="form-control" name="AccNum"
                            id="accnum" value={AccNum || ""} onChange={handleInputChange}
                            placeholder="Account number" required
                        />

                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="Age">Age</label>
                        <input type="text"
                            className="form-control" name="Age"
                            id="age" value={Age || ""} onChange={handleInputChange}
                            placeholder="Age" required
                        />

                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="Email">Email</label>
                        <input type="Email"
                            className="form-control" name="Email"
                            id="email" value={Email || ""} onChange={handleInputChange}
                            placeholder="Email" required
                        />

                    </div>

                    <div className="form-group text-left">
                        <label htmlFor="Contact">Contact</label>
                        <input type="text"
                            className="form-control" name="Contact"
                            id="contact" value={Contact || ""} onChange={handleInputChange}
                            placeholder="Contact" required
                        />

                    </div>

                    <div className="form-group text-left">
                        <label htmlFor="BankBal">BankBalance</label>
                        <input type="text"
                            className="form-control" name="BankBal"
                            id="bankbalance" value={BankBal || ""} onChange={handleInputChange}
                            placeholder="balance" required
                        />

                    </div>
                    <input type="button" value="Update" className="btn btn-danger" onClick={handleSubmit} />
                    

                </div>




            </div>
            <Footeruu/>
        </div>
    );
}

export default EditUser;
