import React, { useEffect,useState } from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux"
import { loadptransaction,loadUsersByid} from "../../redux/action";
import { deleteptransaction } from "../../redux/action";
import { useHistory } from 'react-router-dom';
import Footeruu from "../Design/FooterUi";
import axios from "axios";


const Home = () => {
    const history = useHistory();
    let dispatch = useDispatch()
    const [id, setId] = useState("");
    const [data, setData] = useState([]);

    const { users } = useSelector(state => state.data)
    console.log(users)

    useEffect(() => {
        dispatch(loadptransaction())
    }, [])

     const handleDelete = (Id) => {
        console.log(Id)
        if (window.confirm("Are you sure to delete the user?")) {
           dispatch(deleteptransaction(Id))
           history.push(`/home`);

     }
    }
    const viewUser=(Id)=> {
        axios.get(`http://localhost:8081/api/getuser/${Id}`).then((res) => {
            console.log("res", res.data.user)
            setData(res.data.user);


        }).catch((error) => console.log(error))
            }
    const editUser=(Id)=> {
        history.push(`/edit-user/${Id}`);
        dispatch(deleteptransaction(Id))

    }

    return (
        <div>

            <Header />
            <h1 className="header"><center>All PendingTransaction</center></h1><br />
            <div className="container">
                <table className="table table-striped">
                    <thead className="header">
                        <tr>
                            <td>From </td>
                            <td>To Account Number</td>

                            <td>Sending Money</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user =>
                            
                            <tr>
                                {/* {setId(user.Id)} */}
                                <td>{user.Id}</td>
                                <td>{user.ToId}</td>
                                <td>{user.SendMoney}</td>
                                <td><input type="button" onClick={() => viewUser(user.Id)} className="btn btn-success" value="checkbalance" /></td>
                                <td><input type="button" onClick={() => editUser(user.Id)} className="btn btn-success" value="Accept" /></td>
                                <td><input type="button" className="btn btn-danger" value="delete" onClick={() => handleDelete(user.Id)} /></td> 

                                

                            </tr>
                        )
                        }
                    </tbody>







                </table>
               {data.map(data =><h1>BankBalance = {data.BankBal}</h1>)}
                            
            </div>
            <Footeruu/>

        </div>
    )
}

export default Home
