import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";

const Account =()=>{
    const [user,setUserData]=useState({})
    const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actions.loginToken());
  }, [dispatch]);
    return(
        <div>

        </div>
    )
}
// class Account extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             user:{}
//         }
//     }
//     // tokens are sending to server
//     componentDidMount(){
//         axios.get('http://localhost:8000/api/v1/login_token',{
//             headers:{
//                 'Auth-Controller':localStorage.getItem('token')
//             }
//         }) 
//         .then (response=>{
//             console.log(response.data)
//             const user=response.data.data
//             console.log(user,'in user')
//             this.setState({user}) //when our current value doesn't depend on previous value, that time 

//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h2>Welcome  {this.state.user.firstName}</h2>
//                 <h3>Email-{this.state.user.email}</h3>
//                 <h3>Role-{this.state.user.role}</h3>
//             </div>
//         )
//     }
// }
export default Account