import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { DELETE_USER } from "../actions";

function UserList(){
    const users = useSelector(data=> data.users);
    const dispatch = useDispatch();
    const handleDelete= (id)=>{
        dispatch(DELETE_USER(id))
    }
    return (
        <div>
            <p>
                <Link to='/add-user'>
                <button>Add user</button>
                </Link>
            </p>
            <table border={1}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>ACTION</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        
                                    <Link to={`/update-user/${user.id}`}><button>EDIT</button></Link>
                                    <button onClick={()=>handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default UserList