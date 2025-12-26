import { useSelector } from "react-redux"

import Article from "../component/Article";
import AddArticles from "../component/AddArticles";



export default function Articles(){
    const  articles= useSelector(data=>data.articles);
    return(
        <div>
            <AddArticles/>
            {
              articles.map(art=><Article key={art.id} article={art}/>)
            }
        </div>
    )
}