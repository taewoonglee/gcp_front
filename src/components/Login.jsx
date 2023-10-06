import {useEffect, useState} from "react";
import {Api} from "../api/Api";
import '../css/login.css'


const Login =() =>{


    const [userlist, setList] = useState([]);
    const [user, setUser] =useState({
        name:"", description:""
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
        await Api(`api`,"POST",user)
    }
    const getLoginData = async () =>{
        const loginData = await Api(`api`,"GET")
        setList(loginData);
    }

    useEffect(() => {


        getLoginData()


    }, []);


    return <form onSubmit={onSubmitHandler}>
        <input name={"name"} value={user.name} onChange={onChangeHandler}/>
        <input name={"description"} value={user.description} onChange={onChangeHandler}/>
        <input type={"submit"} />
        {userlist.map((userlist, idx) =>
            <div key={idx} >
                <div className={"div-set"}>
                    <p>{idx}</p>
                    <p>{userlist.name}</p>
                    <p>{userlist.description}</p>
                </div>
            </div>


        )}
    </form>

}
export default Login;