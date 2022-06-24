import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux"
import { loadUsersByid } from "../../redux/action";
import { useParams } from "react-router";
import Footeruu from "../Design/FooterUi";



const Home = () => {
    const {id}=useParams();
    let dispatch = useDispatch()

     const { users } = useSelector(state => state.data)
    // console.log(users)

    useEffect(() => {
        dispatch(loadUsersByid(id))
    }, [])

    


    return (
        <div>

            <Header />
            <h1 className="header"><center>All users Data</center></h1><br />
            <div className="container">
                <table className="table table-striped">
                    <thead className="header">
                        <tr>
                            <td>Name</td>
                            <td>UId</td>
                            <td>AccNum</td>
                            <td>Age</td>
                            <td>Email</td>
                            <td>Contact</td>
                            <td>BankBalance</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user =>

                            <tr key={user.id}>
                                <td>{user.Name}</td>
                                <td>{user.UId}</td>
                                <td>{user.AccNum}</td>
                                <td>{user.Age}</td>
                                <td>{user.Email}</td>
                                <td>{user.Contact}</td>
                                <td>{user.BankBal}</td>


                            </tr>
                        )
                        }
                    </tbody>







                </table>
            </div>
            <Footeruu/>

        </div>
    )
}

export default Home
