import { useParams } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UPDATE_USER } from "../actions";
import { useNavigate } from "react-router-dom";

function UpdateUser(){
    const {id} = useParams();
    const user = useSelector(data=>data.users.find((u)=>u.id === parseInt(id)));
    const [name,setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = ()=>{
        dispatch(UPDATE_USER({
            id:id,
            name:name,
            email:email

        }))
        navigate('/')
    }
   
    return (
        <div>
            <form>
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
                <label>Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                <button onClick={handleClick}>Update User</button>
            </form>
        </div>
    )
}

export default UpdateUser