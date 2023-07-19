import { COMMENT_USER, CREATE_USER, USER_DATA } from "./user.type";
import { DELETE_USER } from "./user.type";

const initialState = {
    userlist: []
}

function dataUser(state = initialState, action) {
    switch (action.type) {
        case USER_DATA:
            return {
                userlist: action.payload
            }
        case DELETE_USER:
            const Userlist = state.userlist.filter(
                (user) => user.id !== parseInt(action.payload)
            );

            return {
                
                userlist: Userlist
            }

        case CREATE_USER:
            return {
               
                userlist: [...state.userlist, action.payload]
            }
        case COMMENT_USER:
            const addComment = state.userlist.map((user) => {
                if (user.id === action.payload.id) {
                    if (user.comment) {
                        return {
                            ...user,
                            comment: [...user.comment, { comment: action.payload.text }]
                        };
                    } else {
                        return {
                            ...user,
                            comment: [{ comment: action.payload.text }]
                        };
                    }
                }
                return user;
            })

            return {
               
                userlist: addComment
            }

        default: return state
    }
}
export default dataUser




