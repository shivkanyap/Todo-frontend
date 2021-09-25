import React from 'react'
import axios from 'axios'

class Form extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            title:'',
            body:'',
            
            // errors:''
        }
    }
    handleChange=(e)=>{
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        
        
        const formData={
            title:this.state.title,
            body:this.state.body,
            
            // user:this.state.user_id    
        }
    //    console.log(formData)
        this.props.handleSubmit(formData)
    }
    
   
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    title
                    <input type="text"   name="title" value={this.state.title} onChange={this.handleChange} placeholder="enter title"/>
                </label><br/>

                <label>
                    Body
                    
                    <textarea  name="body" value={this.state.body} onChange={this.handleChange}></textarea>
                </label><br/>

               
               
                    {/* <h1>{this.state.user._id}</h1> */}






                <input type="submit"/>
            </form>
          
        )
    }
}
export default Form