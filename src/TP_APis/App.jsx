

import { useEffect, useState } from "react"

function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [articles, setArticles] = useState([]);
  const [userActive, setUserActive] = useState(0);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{return res.json()})
    .then((users)=>{setUtilisateurs(users)});

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{return res.json()})
    .then((posts)=>{setArticles(posts)})
  },[])

  function handleClick(id){
    setUserActive(id)
  }
  return(
    <div className="App">
       
        <h2>Liste des utilisateurs</h2>
        {
          utilisateurs.map((utilisateur, index)=>{
             return(
              <p key={index}>
                {utilisateur.name}
                <button onClick={()=> handleClick(utilisateur.id)}>Details article</button>
                <div>
                  {
                    userActive === utilisateur.id 
                    ? <ul>
                      {articles.filter((item)=>item.userId === parseInt(userActive))
                      .map((article)=>{
                        return <li>{article.id} {article.title}</li>
                      })}
                    </ul>
                    : null
                  }
                </div>
             </p>
             ) 
          }
           
          )
        }


    </div>
  )
}

export default App