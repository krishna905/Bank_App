import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux"
import { loadUsers } from "../../redux/action";
import { deleteUsers } from "../../redux/action";
import { useHistory } from 'react-router-dom';
import Footeruu from "../Design/FooterUi";


const Home = () => {
    const history = useHistory();
    let dispatch = useDispatch()

    const { users } = useSelector(state => state.data)
    console.log(users)

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const handleDelete = (UId) => {
        console.log(UId)
        if (window.confirm("Are you sure to delete the user?")) {
            dispatch(deleteUsers(UId))
        }
    }
   const viewUser=(UId)=> {
        history.push(`/view-user/${UId}`);
    }
    const editUser=(UId)=> {
        history.push(`/edit-user/${UId}`);
    }

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
                            <td>Options</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(user =>

                            <tr key={user.id}>
                                <td>{user.Name}</td>
                                <td>{user.UId}</td>

                                <td>{user.AccNum}</td>
                                <td><input type="button" onClick={() => viewUser(user.UId)} value="view" className="btn  btn-info" /></td>
                                <td><input type="button" onClick={() => editUser(user.UId)} className="btn btn-success" value="edit" /></td>

                                <td><input type="button" className="btn btn-danger" value="delete" onClick={() => handleDelete(user.UId)} /></td>

                                

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
