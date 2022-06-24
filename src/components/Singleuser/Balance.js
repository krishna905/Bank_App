import React, { useEffect,useState } from "react";
import Header from "../Header/header1";
import { useDispatch, useSelector } from "react-redux"
import { loadUsersByid } from "../../redux/action";
import { useParams } from "react-router";
import Footeruu from "../Design/FooterUi";
import './Balance1.css'



const Home = () => {
    const [UId, setUId] = useState("");


    let dispatch = useDispatch()

     const { users } = useSelector(state => state.data)
    // console.log(users)

   const handleSubmit=()=> {
        dispatch(loadUsersByid(UId))
    }

    


    return (
        <div>
            <Header />
            <div id='getbalance'>
                 <div className="form-group text-left mt-3" >
                        <label htmlFor="UId">UId</label>
                        <input type="text"
                            className="form-control" name="UId"
                            id="uidd" value={UId}
                            placeholder="Enter UId" required onChange={e =>setUId(e.target.value)}
                        /></div>
         <input type="button" className="btn btn-danger" id="getbal" value="Get Balance" onClick={handleSubmit} />
            <div className="container">
                        {users && users.map(user =>

                                <h3>Hi {user.Name},Your Bank Balance Is:{user.BankBal}</h3>
                             
                              
                        )
                        }
                







            
            </div>
            </div>
            <Footeruu/>

        </div>
    )
}

export default Home
