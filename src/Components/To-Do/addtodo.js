import React from 'react'
// import AddCategory from '../catagory/addCategory'
import Form from './form'
import axios from 'axios'

class  AddToDo extends React.Component
{

    handleSubmit=(formData)=>{
        console.log(formData,'kanya formdata')
        axios.post('http://localhost:8000/api/v1/create',formData,{
            headers:{
                'Auth-Controller':localStorage.getItem('token')

            }
        })
       
        .then(response=>{
            // alert(response,'in add note')
            if(response.data.hasOwnProperty('errors')){
                response.send(response.data.errors)
            }else{
                this.props.history.push(`/api/v1/getall`)
            }
            
        })
    }
    render()
    {
        return(
            <div>
                <h2>Add ToDo</h2>
                 <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default AddToDo