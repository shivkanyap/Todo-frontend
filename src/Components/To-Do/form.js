import React, { useState } from "react";
import axios from 'axios'
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import  setUser from '../../actions/a-user'
import { useSelector, useDispatch } from "react-redux";

const Form =()=>{
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const classes = styles();
    const dispatch = useDispatch();
    return(
        <div>
            <div className={classes.inputContainer}>
                    <Typography variant="body2" className={classes.field}>
                      Title
                      <span className={classes.required}>*</span>
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder="Enter Title"
                      id="reason"
                      name="title"
                      multiline
                      rows={3}
                      className={classes.textField}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={classes.inputContainer}>
                    <Typography variant="body2" className={classes.field}>
                      Body
                      <span className={classes.required}>*</span>
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder="Enter Body"
                      id="body"
                      name="body"
                      multiline
                      rows={3}
                      className={classes.textField}
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <Button
                      variant="contained"
                     
                      className={classes.updateBtn}
                      
                  >
                     ADD TODO
                  </Button>
        </div>
    )
}
// class Form extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             title:'',
//             body:'',
            
//             // errors:''
//         }
//     }
//     handleChange=(e)=>{
//         e.persist()
//         this.setState(()=>({
//             [e.target.name]:e.target.value
//         }))

//     }
//     handleSubmit=(e)=>{
//         e.preventDefault()
        
        
//         const formData={
//             title:this.state.title,
//             body:this.state.body,
            
//             // user:this.state.user_id    
//         }
//     //    console.log(formData)
//         this.props.handleSubmit(formData)
//     }
    
   
//     render()
//     {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     title
//                     <input type="text"   name="title" value={this.state.title} onChange={this.handleChange} placeholder="enter title"/>
//                 </label><br/>

//                 <label>
//                     Body
                    
//                     <textarea  name="body" value={this.state.body} onChange={this.handleChange}></textarea>
//                 </label><br/>

               
               
//                     {/* <h1>{this.state.user._id}</h1> */}






//                 <input type="submit"/>
//             </form>
          
//         )
//     }
// }
export default Form