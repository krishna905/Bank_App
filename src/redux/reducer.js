import * as types from "./actionType"
const initialState = {
    users: [],
    user: {},
    balance:{},
    loading: true
}
const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.getUsers:

            return {
                ...state,
                users: action.payload.user,
                loading: false
            }
            case types.getUsersById:

            return {
                ...state,
                users: action.payload.user,
                balance: action.payload.user,
                user:action.payload,
                loading:false
            }
        case types.deleteUsers:

            return {
                 ...state,
                loading: false
            }
     case types.addUser:

                return {
                    ...state,
                    loading: false,
                }
    case types.addPTransaction:

                    return {
                        ...state,
                        loading: false,
                    }
   
    case types.updateUser:
            return {
                ...state,
                loading: false,

            }
            case types.getPtransaction:

                return {
                    ...state,
                    users: action.payload.ptransaction,
                    loading: false
                }
                case types.deletePtransaction:

                    return {
                         ...state,
                        loading: false
                    }
        default:
            return state;
    }

}
export default usersReducers;