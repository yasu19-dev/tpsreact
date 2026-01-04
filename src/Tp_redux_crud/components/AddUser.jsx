import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD_USER } from "../actions";
import { useNavigate } from "react-router-dom";

function AddUser(){
    const count = useSelector(data=>data.users.length);
    
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = ()=>{
        dispatch(ADD_USER({
            id:count+1,
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
                <button onClick={handleClick}>Add User</button>
            </form>
        </div>
    )
}

export default AddUser