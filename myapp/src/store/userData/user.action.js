import { COMMENT_USER, CREATE_USER, USER_DATA } from "./user.type"
import { DELETE_USER } from "./user.type"

function ActionData(data) {
    return {
        type: USER_DATA,
        payload: data
    }
}

export default ActionData

export const DeleteUser = (data) => {
    return {
        type: DELETE_USER,
        payload: data
    }
}

export const AddUser = (data) => {
    return {
        type: CREATE_USER,
        payload: data
    }
}

export const Comment=(data)=>{
    return{
        type:COMMENT_USER,
        payload:data
    }
}

