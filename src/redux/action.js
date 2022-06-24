import * as types from "./actionType"
import axios from "axios";
const getUsers = (user) => ({
    type: types.getUsers,
    payload: user
});
const getUsersById = (user) => ({
    type: types.getUsersById,
    payload: user
});
const userDeleted = () => ({
    type: types.deleteUsers
})

const userAdded = () => ({
    type: types.addUser
})

const transactionAdded = () => ({
    type: types.addPTransaction
})

const userUpdated = () => ({
    type: types.updateUser
})
const getPtransaction = (transaction) => ({
    type: types.getPtransaction,
    payload: transaction
});
const transactionDeleted = () => ({
    type: types.deletePtransaction
})
export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`http://localhost:8081/api/getuser`).then((res) => {
            console.log("res", res)
            dispatch(getUsers(res.data));

        }).catch((error) => console.log(error))
        
    }
}
export const loadUsersByid = (UId) => {
    return function (dispatch) {
        axios.get(`http://localhost:8081/api/getuser/${UId}`).then((res) => {
            console.log("res", res)
            dispatch(getUsersById(res.data));

        }).catch((error) => console.log(error))
        
    }
}

export const addUser = (user,transaction) => {
    return function (dispatch) {
        axios.post(`http://localhost:8081/api/createuser/`, user).then((res) => {
            console.log("res", res)
            dispatch(userAdded());


        }).catch((error) => console.log(error))
        axios.post(`http://localhost:8081/api/createtransaction/`, transaction).then((res) => {
            console.log("res", res)
            dispatch(userAdded());


        }).catch((error) => console.log(error))
        
    }
}
export const addptransaction= (ptransaction) => {
    return function (dispatch) {
        axios.post(`http://localhost:8081/api/createptransaction/`, ptransaction).then((res) => {
            console.log("res", res)
            dispatch(transactionAdded());


        }).catch((error) => console.log(error))
    }
}

export const updateUser = (user, UId,transaction) => {

    return function (dispatch) {

        axios.put(`http://localhost:8081/api/updateuser/${UId}`, user).then((res) => {

            console.log("res", res)
            dispatch(userUpdated());
        }).catch((error) => console.log(error))

        axios.put(`http://localhost:8081/api/updatetransaction/${UId}`, transaction).then((res) => {

            console.log("res", res)
            dispatch(userUpdated());
        }).catch((error) => console.log(error))
    }

}
export const deleteUsers = (UId) => {
    return function (dispatch) {
        axios.delete(`http://localhost:8081/api/deleteuser/${UId}`).then((res) => {
            console.log("res", res)
            dispatch(userDeleted());
           dispatch(loadUsers());

        }).catch((error) => console.log(error))
        axios.delete(`http://localhost:8081/api/deletetransaction/${UId}`).then((res) => {
            console.log("res", res)
           // dispatch(userDeleted());
           // dispatch(loadUsers());

        }).catch((error) => console.log(error))
    }
}
    export const loadptransaction = () => {
        return function (dispatch) {
            axios.get(`http://localhost:8081/api/getptransaction`).then((res) => {
                console.log("res", res)
                dispatch(getPtransaction(res.data));
    
            }).catch((error) => console.log(error))
            
        }
    }


    export const deleteptransaction = (UId) => {
        return function (dispatch) {
            axios.delete(`http://localhost:8081/api/deleteptransaction/${UId}`).then((res) => {
                console.log("res", res)
                dispatch(transactionDeleted());
               //dispatch(loadUsers());
    
            }).catch((error) => console.log(error))
           
    }}