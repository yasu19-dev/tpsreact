import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Tp_redux_crud/components/UserList";
import AddUser from "./Tp_redux_crud/components/AddUser";
import UpdateUser from "./Tp_redux_crud/components/UpdateUser";


function App() {

  return(
    <div className="App">
       <h1>TEST</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path="/add-user" element={<AddUser/>}/>
            <Route path="/update-user/:id" element={<UpdateUser/>}/>
          </Routes>
        </BrowserRouter>
        
    </div>
  )
}
export default App;