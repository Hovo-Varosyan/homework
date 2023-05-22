import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { Comment, DeleteUser } from "../../store/userData/user.action"
import NavigateButton from "../../component/navigate.button"
import { useCallback, useState } from "react"

function User() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userlist = useSelector((state) => state.dataUser.userlist)
    const { id } = useParams()
    const [show, setShow] = useState(false)
    const [comment, setComment] = useState("")
    const users = userlist.filter(
        (element) => element.id === parseInt(id)
    );

    const handleDelete=useCallback(()=>{
        dispatch(
            DeleteUser(id)
        )

        navigate("/UserData")
    },[])

    function handleAddComment() {
        if(comment.trim()!==""){
           dispatch(Comment({
            id: show,
            text: comment
        }))
        setShow(false) 
        }
        else{
            alert(null)
        }
        
    }
    return (
        <div className="user">
            {show !== false ?
                <div className="comment">
                    <input type="text" placeholder="Comment" onChange={(e) => setComment(e.target.value)} />
                    <button onClick={handleAddComment}>Add Comment</button>
                    <button onClick={() => setShow(false)}>close</button>
                </div> : null
            }

            <NavigateButton url={"/"} name={"Home"} />
            <table className="user_table">
                {
                    users.map((element) => {
                        return <thead key={element.id}>
                            <tr><td>Name</td><td>{element.name}</td></tr>
                            <tr><td>User Name</td><td>{element.username}</td></tr>
                            <tr><td>Email</td><td>{element.email}</td></tr>
                            <tr><td>Phone</td><td>{element.phone}</td></tr>
                            <tr><td>Web Site</td><td>{element.website}</td></tr>
                            <tr><td>addres</td><td>
                                <table>
                                    <thead>
                                        <tr><td>City</td><td>{element.address.city}</td></tr>
                                        <tr><td>Street</td><td>{element.address.street}</td></tr>
                                        <tr><td>Zipcode</td><td>{element.address.zipcode}</td></tr>
                                        <tr><td>Geo</td><td>
                                            <table><thead>
                                                <tr><td>lat:</td><td>{element.address.geo.lat}</td></tr>
                                                <tr><td>lng:</td><td>{element.address.geo.lng}</td></tr>
                                            </thead></table>
                                        </td></tr>
                                    </thead>
                                </table>
                            </td></tr>

                            <tr><td>Company</td><td>
                                <table><thead>
                                    <tr><td>Name </td><td>{element.company.name}</td></tr>
                                    <tr><td>Catch Phrase</td><td>{element.company.catchPhrase}</td></tr>
                                    <tr><td>Bs</td><td>{element.company.bs}</td></tr></thead></table>
                            </td></tr>
                            {
                                element.comment && (
                                    <tr>
                                        <td>Comment</td>
                                        <td><table>
                                            <thead>
                                                {element.comment.map((e,j) => {
                                                    return <tr key={j}><td>{e.comment}</td></tr>
                                                })}
                                            </thead>
                                        </table></td>
                                    </tr>
                                )
                            }
                            <tr><td><button onClick={() => setShow(element.id)}>Comment</button></td><td><button onClick={handleDelete}>Delete</button></td></tr>
                            <tr><td><button onClick={() => navigate("/UserData")}>Back</button></td></tr>
                        </thead>
                    })

                }
            </table >
        </div >
    )
}

export default User