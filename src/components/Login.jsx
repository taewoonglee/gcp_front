import {useEffect, useState} from "react";
import {Api} from "../api/Api";

const Login =() =>{
    const [user, setUser] =useState({
        name:"", descc:""
    })

    const onChangeHandler = (e)=> {
        const {name, value} =e.target
        setUser({...user, [name]: value})
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        login2();
    }

    const login2 = async () =>{
        await Api(`api/v1/user`,"POST",user)
    }
    const getLoginData = async () =>{
        const {data} = await Api(`api/v1/user`,"GET")
        setUser(data);
    }

    // useEffect(() => {
    //
    //
    //     getLoginData()
    //
    //
    // }, []);


    return <form onSubmit={onSubmitHandler}>
        <input name={"name"} value={user.name} onChange={onChangeHandler}/>
        <input name={"descc"} value={user.descc} onChange={onChangeHandler}/>
        <input type='submit' />
    </form>
}
export default Login;