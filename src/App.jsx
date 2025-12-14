import "./index.css"
//import Footer from "./Footer";
//import Header from "./Header";
//import Food from "./Food";
//import Card from "./Card";
//import Button from "./Button/Button";
//import Student from "./Props/Student"
//import UserGreeting from './conditional_rendering/UserGreeting'
// import List from './Rendering_List/List'
//import Lists from './Rendering_List/Lists'
//import Button from "./click_event/ButtonCount";
// import Button from "./click_event/ButtonEvent";  
// import ProfilePicture from "./click_event/ProfilePicture";
//import MyComponent from "./useState/MyComponent";
//import Counter from "./useState/Counter";
import MyComponent from "./onChange/Mycomponent";

//Components-------------------------------------------------------

// export default function App(){
//     return(
//         <>
//         <Header/>
//           <Food/>
//         <Footer/>
//         </>
//     );
// }

//CARD TEST --------------------------------------------------------------//

// export default function App(){
//     return(
//         <>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//         </>
//     );
// }


//(How to style react components with css EXTERNAL/MODULES/INLINE)--------------------------------------------------------------//

// function App(){
//     return(<Button />);
// }


//Applying props--------------------------------------------------------------//

// function App(){
//     return (
//         <>
//         <Student name = "Yasmine" age={25} isStudent={true} />
//         <Student name = 'Zaid' age = {24} isStudent={false}/>
//         <Student />
//         </>
//     );
// }


//conditional rendering--------------------------------------------------------------//

// function App(){
//     return(
//         <>
//         <UserGreeting isLoggedIn={true} username='Yasmine'/>
//         </>
//     );
// }


//List using map(), sort(), filter -----------------------------------------------------------//

// function App(){
//     return(
//         <>
//         <List/>
//         </>
//     );
// }

//Lists using App()-----------------------------------------------------------//

// function App(){
//     const fruits = [{id:1, name:'apple', calories: 95},
//                 {id:2, name:'orange', calories: 45},
//                 {id:3, name: 'banana', calories: 105},
//                 {id:4, name:'coconut', calories: 159},
//                 {id:5, name: 'pineapple', calories:37}];

//     const vegetables = [{id:6, name:'potatoes', calories: 110},
//                         {id:7, name:'celery', calories: 15},
//                         {id:8, name: 'carrots', calories: 25},
//                         {id:9, name:'corn', calories: 63},
//                         {id:10, name: 'broccoli', calories:50}];
//     return(
//         <>
//         {fruits.length>0 && <Lists items={fruits} category='Fruits'/>}
//         <Lists items={vegetables} category='Vegetables'/>
//         </>

//     );
// }


//click-event -----------------------------------------------------------
// function App(){
//     return(<>
//     <Button/>
//     </>)
// }
// function App(){
//     return(<>
//     <ProfilePicture/>
//     </>)
// }


//useState-----------------------------------------------------------
// function App(){
//     return(<>
//     <MyComponent/>
//     </>)
// }

//Counter ---------------------------------------------

// function App(){
//     return(<>
//     <Counter/>
//     </>)
// }

//onChange ------------------------------------------------
function App(){
    return(<>
    <MyComponent/>
    </>)
}















 export default App;