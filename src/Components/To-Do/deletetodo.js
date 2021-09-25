import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ToDoDelete extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            lists:[]
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id 
        console.log(this.props.match,'pa')
        console.log(id,' get')
        axios.get(`http://localhost:8000/api/v1/getByid?id=${id}`, {
            headers: {
                'Auth-Controller': localStorage.getItem('token')
            }
        })
            .then(response => this.setState(() =>
            console.log(response.data,'in del')
             ({ lists: response.data})))
    }


    handleRemove = () => {
        const confirm = window.confirm("Are you sure?")
        if(confirm) {
            const id = this.props.match.params.id 
            console.log(this.props)
            console.log(id,'in id')
            axios.delete(`http://localhost:8000/api/v1/delete?id=${id}}`, {
                headers: {
                    'Auth-Controller' : localStorage.getItem('token')
                }
            })
            .then(response => {
                this.props.history.push('/api/v1/getall')
            })
        }
    }

    render()
    {
        return(
            <div>
                    <h3>Delete</h3>
                <Link to="/api/v1/getall">back</Link>
                
                <button onClick={() => {
                    this.handleRemove()
                }}>remove</button>
            </div>
        )
    }
}
export default ToDoDelete