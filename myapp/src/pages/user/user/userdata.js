import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Loading from "../../../component/loading"

function UserData() {
    const navigate=useNavigate()

    const userlist = useSelector((state) => state.dataUser.userlist)
    const[load, setLoading]=useState(false)
    useEffect(() => {
        if (userlist !== undefined) {
            setLoading(true)
        }
        else {
            setLoading(false)
        }
    }, [userlist])

    return (
        <>{
        load===true?
        <div>
            <div>
                <button onClick={()=>navigate("/")} className="userdata_home">Home</button>
                </div>
            <table className="data_table">
                <thead>
                    <tr>
                        <th><span></span>Name</th>
                        <th>Email</th>
                        <th> Phone</th>
                        <th><button onClick={()=>navigate("/create-user")}>Create user<span>+</span></button></th>
                    </tr>
                </thead>
                <tbody>{
                    userlist.map((element) => {
                        return <tr key={element.id}>
                            <td>{element.name}</td>
                            <td><span>&#x1F4E7;</span>{element.email}</td>
                            <td><span>&#9990;</span>{element.phone}</td>
                            <td><Link to={`/UserData/User/${element.id}`}><button >Profile</button></Link></td>
                        </tr>
                    })
                }

                </tbody>
            </table>
        </div>:<Loading/>
        }</>
    )
}
export default UserData