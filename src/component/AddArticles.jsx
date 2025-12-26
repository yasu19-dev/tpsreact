import { useState } from "react"
import { useDispatch } from "react-redux";
import { ADD_ARTICLE } from "../store/actions";

export default function  AddArticles (){
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const dispatch = useDispatch();

    function ajouter(e){
        e.preventDefault();
        dispatch(ADD_ARTICLE({title:title,body:body}))
    }
    return (
        <form onSubmit={ajouter}>
            <input type="text" id='title' onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" id='body' onChange={(e)=>setBody(e.target.value)} />
            <input type="submit" value='Add Article' />
        </form>
    )
}