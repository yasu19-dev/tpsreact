import { Route, Routes } from "react-router-dom";
import Articles from "./Articles";
import UpdateArticle from "../component/UpdateArticle";

export default function AppArticles(){
    return(
        <div>
            <Routes>
            <Route path='/' element={<Articles/>} />
            <Route path='/Update/:id' element={<UpdateArticle/>}/>
            </Routes>
        </div>
    )
}