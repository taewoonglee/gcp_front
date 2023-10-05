import {Route, Routes} from "react-router";
import Login from "../components/Login";

const MyRouter =() =>{
    return
        <Route path='/login' element={<Login />}></Route>

}
export default MyRouter;