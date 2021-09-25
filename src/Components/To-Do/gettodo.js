import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


class ToDo extends React.Component{

    constructor(props) {
        super(props) 
        this.state = {
           list:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/api/v1/getall',{
            headers:{
                'Auth-Controller':localStorage.getItem('token')
            }
        }) 
        .then (response=>{
            console.log(response.data)
            const list=response.data.data
            // console.log(user,'in user')
            this.setState({list}) //when our current value doesn't depend on previous value, that time 

        })
    }
    render(){
        console.log(this.state.list,'in list')
        return(
            <div>
                <h2>Listing ToDo- {this.state.list.length}</h2>
                {this.state.list.length === 0?(
                    <div>
                        No ToDo found
                    </div>
                ):(
                    <ul>
                        {this.state.list.map(note=>{
                            console.log(note,'in notes list')
                            return <li key={note._id}>
                                { <h2>Title :{note.title}</h2>}
                                {<h4>Body  :{note.body}</h4>}
                                {<h4>Id{note._id}</h4>}
                                
                                {/* <Link to ={`/notes/${note._id}`}>
                               
                            </Link> */}
                            <Link to={`/api/v1/delete?id=${note._id}`}> 
                                                Remove
                                            </Link>
                            <Link to={`/notes/edit/${note._id}`}> 
                                                Edit
                            </Link>
                            
                            </li>
                        })}
                    </ul>
                    

                )}
                <Link  to="/api/v1/create">Add ToDO</Link>
            </div>
        )
    }
}
export default ToDo