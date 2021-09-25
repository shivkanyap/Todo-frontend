import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Home from './Components/Home/Home'
import Register from './Components/User/Register'
import Login from './Components/User/Login'
import Account from './Components/User/Account'
import axios from 'axios'
import {connect} from 'react-redux';
// import  CategoryList from './components/catagory/categoryList'
// import AddCategory from './components/catagory/addCategory'
// import EditCategory from './components/catagory/editCategory'
// import DeleteCategory from './components/catagory/deleteCategory'

import ToDo from './Components/To-Do/gettodo'
import  AddToDo from './Components/To-Do/addtodo'
import ToDoDelete from './Components/To-Do/deletetodo'
// import AddNote from './components/notes/Add'
// import  NotesDelete from './components/notes/Delete'
// import EditNote from './components/notes/Edit'
// import AddNote from './notes/AddNote'


class App extends React.Component{

  constructor(props) {
    super(props) 
    this.state = {
      isAuthenticated: false 
    }
  }

  // handle page reloading, if the user is logged in, continue to login
  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.setState(() => ({ 
        isAuthenticated: true 
      }))
    }
  }

  handleAuthentication = (boolean) => {
    this.setState(() => ({
      isAuthenticated: boolean
    }))
  }

  render()
  {
    return(
      <BrowserRouter>
      
      <div className="container">
      
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header"> 
            {/* <Link to className="navbar-brand" Link to="/">WebSiteName  */}
            </div>
            <ul className="nav navbar-nav">
              <li className="active">< Link to="/">Home</Link></li>
              { this.state.isAuthenticated ? (
                <React.Fragment>
                <li><Link to="/api/v1/logout" className="nav-item nav-link" >Logout </Link></li>
                {/* <li><Link to="/category/viewall" className="nav-item nav-link" >Category </Link></li> */}
                <li><Link to="/api/v1/getall">To_DO</Link></li>
              </React.Fragment>
              ) : (
                <React.Fragment>
                  <li> <Link to="/api/v1/register">Register</Link></li>
                  <li> < Link to="/api/v1/login">Login</Link></li>
                  
                </React.Fragment>
              )}

              
            </ul>
          </div>
        </nav>


        

        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/api/v1/register" component={ Register } />
          <Route path="/api/v1/login" render={(props) => {
              return <Login {...props} handleAuthentication={this.handleAuthentication} />
          }} />
          <Route path="/api/v1/login_token" component={ Account } />
          <Route path="/users/logout" render={(props) => {
              axios.delete('http://localhost:8000/api/v1/logout', {
                headers: {
                  'Auth-Controller': localStorage.getItem('token')
                }
              })
                .then(response => {
                  props.history.push('/api/v1/login')
                  this.setState(() => ({
                    isAuthenticated: false
                  }))
                  localStorage.removeItem('token')
                })
            }} />
             <Route path="/api/v1/getall" component={ToDo} exact/>
             <Route path="/api/v1/create" component={ AddToDo} exact/>
             <Route path="/api/v1/delete/:id" component={ToDoDelete}/>
              {/* <Route path="/notes/add" component={AddNote} exact={true} /> */}
              {/* <Route path="/category/viewall" component={CategoryList}  />
              <Route path="/category/add" component={AddCategory}/>
              <Route path="/category/edit/:id" component={EditCategory}/>
              <Route path="/category/delete/:id" component={DeleteCategory}/>
              <Route path="/notes/view" component={ListNotes} exact/>
              <Route path="/notes/add" component={AddNote} exact/>
              <Route path="/notes/delete/:id" component={ NotesDelete}/>
              <Route path='/notes/edit/:id' component={EditNote}/> */}
           

         
        </Switch>

      </div>   
      {/* <AddNote/> */}
      </BrowserRouter>
    
      
    )
  }


}

const mapStateToProps=(state)=>{
  return{
      user:state.user
  } 
}

export default connect(mapStateToProps)(App);