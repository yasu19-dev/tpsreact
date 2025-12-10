
//Méthode 1: operateur ternaire

// export default function UserGreeting (props){
//     return(props.isLoggedIn ? 
//     <h2 className="welcome_message">Welcome {props.username}</h2>:
//     <h2 className="login_prompt">Please Log In to continue </h2>)
// } 


//Méthode 2 avec variable
export default function UserGreeting (props){
    const welcomeMessage = <h2 className="welcome_message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login_prompt">Please Log In to continue </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)
} 