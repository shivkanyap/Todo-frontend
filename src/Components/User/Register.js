import React from "react";
import axios from "axios";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      role: ["admin", "user"],
      email: "",
      password: "",
      conformpassword: "",
      notice: "",
      status: "",
    };
  }

  handleChange = (e) => {
      console.log(e.target.value)
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };
    console.log(formData,'formData')
    if (this.state.password === this.state.conformpassword) {
      axios
        .post("http://localhost:8000/api/v1/register", formData)
        .then((response) => {
            console.log(response)
          if (response.data.errors) {
            this.setState(() => ({
              errors: response.data.errors,
            }));
          } else {
            this.props.history.push("/api/v1/login");
          }
        });
    } else {
      this.setState(() => ({
        notice: "passwords didnot match",
      }));
    }
  };
  render() {
    return (
      <div>
        <div className="col-md-6 formheader">
          <h2 className="pt-3 pb-3">Register with us </h2>
          <Form onSubmit={this.handleSubmit}>
            <div>
              <FormGroup row>
                <Label className="headerlabel" for="firstName" sm={2}>
                  Firstname:
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="min 4 character "
                  ></Input>
                </Col>
              </FormGroup>
            </div>

            <div>
              <FormGroup row>
                <Label className="headerlabel" for="firstName" sm={2}>
                  lastname:
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="min 4 character "
                  ></Input>
                </Col>
              </FormGroup>
            </div>

            
            <div>
              <FormGroup row>
                <Label sm={2} className="headerlabel">
                  Email :
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter email"
                  ></Input>
                </Col>
              </FormGroup>
            </div>
            <div>
              <FormGroup row>
                <Label sm={2} className="headerlabel">
                 Role
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="role"
                    value={this.state.role}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter email"
                  ></Input>
                </Col>
              </FormGroup>
            </div>
            {/* <div>
              <FormGroup row>
                <Label sm={2} className="headerlabel">
                  Role
                </Label>
                <Col sm={10}>
                  <Dropdown>
                    <DropdownToggle
                      tag="span"
                      data-toggle="dropdown"
                      aria-expanded={this.state.role}
                    ></DropdownToggle>
                    <DropdownMenu>
                      <div>Custom dropdown item</div>
                      <div>Custom dropdown item</div>
                      <div>Custom dropdown item</div>
                      <div>Custom dropdown item</div>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </FormGroup>
            </div> */}
            <div>
              <FormGroup row>
                <Label sm={2} className="headerlabel">
                  Password:
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="min 5 character"
                  ></Input>
                </Col>
              </FormGroup>
            </div>

            <div>
              <FormGroup row>
                <Label sm={2} className="headerlabel">
                  Conform Password:
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="conformpassword"
                    value={this.state.conformpassword}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter  conform password"
                  ></Input>
                </Col>
              </FormGroup>
            </div>
            {this.state.notice && (
              <p className="text text-danger"> {this.state.notice} </p>
            )}
            <Button className="submit" color="primary">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default Register;

// import React, { useState } from 'react'
// import axios from 'axios'
// import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// const Register=()=>{

//     const [firstName,setfirstName]= useState('')
//     const [lastName,setlastName]=useState('');
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const [confirmPassword,setconfirmPassword]=useState('')
//     const [role,setRole]=useState(['admin,user'])

//    const handleChange = (e) => {
//         e.persist()
//         firstName:e.target.value
//         // [e.target.name]: e.target.value
//         // this.setState(() => ({
//         //     [e.target.name]: e.target.value
//         // }))
//     }
//     return(
//         <div>
//                 <div className="col-md-6 formheader">
//                     <h2 className="pt-3 pb-3">Register with us </h2>
//                 <Form onSubmit={this.handleSubmit}>
//                     <div>
//                     <FormGroup row>
//                         <Label
//                         className="headerlabel"
//                         for="username"
//                         sm={2}>firstname:</Label>
//                         <Col sm={10}>
//                         <Input
//                         type="text"
//                         name="username"
//                         value={firstName}
//                         onChange={handleChange}
//                         className="form-control"
//                         placeholder="min 4 character "
//                         ></Input>
//                         </Col>
//                     </FormGroup>
//                     </div>
//                     <div>
//                     <FormGroup row>
//                         <Label
//                         className="headerlabel"
//                         for="username"
//                         sm={2}>lastname:</Label>
//                         <Col sm={10}>
//                         <Input
//                         type="text"
//                         name="lastname"
//                         value={lastName}
//                         onChange={handleChange}
//                         className="form-control"
//                         placeholder="min 4 character "
//                         ></Input>
//                         </Col>
//                     </FormGroup>
//                     </div>

//                     <div>
//                     <FormGroup row>
//                         <Label sm={2} className="headerlabel">
//                             Email :
//                         </Label>
//                         <Col sm={10}>
//                             <Input type="text"
//                                 name="email"
//                                 value={email}
//                                 onChange={(e) => {
//                                     setCourse(e.target.value);
//                                   }}
//                                 className="form-control"
//                                 placeholder="Enter email">
//                                 </Input>
//                         </Col>
//                         </FormGroup>
//                     </div>

//                     <div>
//                         <FormGroup row>
//                             <Label sm={2} className="headerlabel">
//                                 Password:
//                             </Label>
//                             <Col sm={10}>
//                                 <Input type="password"
//                                     name="password"
//                                     value={password}
//                                     onChange={handleChange}
//                                     className="form-control"
//                                     placeholder="min 5 character"
//                                 ></Input>
//                             </Col>
//                         </FormGroup>
//                     </div>
//                     <div>
//                         <FormGroup row>
//                             <Label sm={2} className="headerlabel">
//                             Conform Password:
//                             </Label>
//                             <Col sm={10}>
//                                 <Input type="password"
//                                     name="confirmpassword"
//                                     value={confirmpassword}
//                                     onChange={handleChange}
//                                     className="form-control"
//                                     placeholder="Enter  conform password"
//                                 ></Input>
//                             </Col>
//                         </FormGroup>
//                     </div>
//                     <div>
//                     <FormGroup row>
//                         <Label
//                         className="headerlabel"
//                         for="role"
//                         sm={2}>Role:</Label>
//                         <Dropdown group isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}
//                         type="text"
//                         name="role"
//                         value={role}
//                         onChange={(e)=>onChange(e)}
//                         className="form-control"
//                         placeholder="min 4 character ">
//                         <DropdownToggle caret>
//                             Dropdown
//                         </DropdownToggle>

//                             {role.length>0?(
//                                 role.map((item,i)=>(
//                                     <DropdownMenu value={item} key={i}>
//                                         {item}
//                                         </DropdownMenu>
//                                 ))
//                                 )}

//                         </Dropdown>
//                                                 {/* <Col sm={10}>
//                         <Input
//                         type="text"
//                         name="role"
//                         value={role}
//                         onChange={handleChange}
//                         className="form-control"
//                         placeholder="min 4 character "
//                         ></Input>
//                         </Col> */}
//                     </FormGroup>

//                     </div>
//                     {notice && <p className="text text-danger"> {notice} </p>}
//                     <Button className="submit" color="primary">Submit</Button>
//                 </Form>
//             </div>
//         </div>
//     )

// }
// export default Register
// // / import React from 'react';
// // import axios from 'axios';
// // import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // class Register extends React.Component {
// //     constructor() {
// //         super()
// //         this.state={
// //             firstname: '',
// //             lastname:'',
// //             email: '',
// //             password: '',
// //             conformpassword:'',
// //             notice:'',
// //             role:'',
// //             status:''
// //         }
// //     }

// //     handleChange = (e) => {
// //         e.persist()
// //         this.setState(() => ({
// //             [e.target.name]: e.target.value
// //         }))
// //     }

// //     handleSubmit = (e) => {
// //     e.preventDefault()
// //     const formData = {
// //         firstname:this.state.firstname,
// //            lastname:this.state.lastname,
// //             email:this.state.email,
// //            password:this.state.password,
// //            role:this.state.role,

// //     }
// //     if(this.state.password===this.state.conformpassword) {
// //         axios.post('http://localhost:8000/api/v1/register', formData)
// //         .then(response => {
// //             if(response.data.errors) {
// //                 this.setState(() => ({
// //                     errors: response.data.errors
// //                 }))
// //             } else {
// //                 this.props.history.push('/api/v1/login')
// //             }
// //         })
// //     } else {
// //         this.setState(()=>({
// //             notice:'passwords didnot match'
// //         }))
// //     }
// // }
// //     render()
// //     {
// //         return(
// //             <div>
// //                 <div className="col-md-6 formheader">
// //                     <h2 className="pt-3 pb-3">Register with us </h2>
// //                 <Form onSubmit={this.handleSubmit}>
// //                     <div>
// //                     <FormGroup row>
// //                         <Label
// //                         className="headerlabel"
// //                         for="username"
// //                         sm={2}>FirstName:</Label>
// //                         <Col sm={10}>
// //                         <Input
// //                         type="text"
// //                         name="username"
// //                         value={this.state.firstname}
// //                         onChange={this.handleChange}
// //                         className="form-control"
// //                         placeholder="min 4 character "
// //                         ></Input>
// //                         </Col>
// //                     </FormGroup>
// //                     </div>
// //                     <div>
// //                     <FormGroup row>
// //                         <Label
// //                         className="headerlabel"
// //                         for="username"
// //                         sm={2}>LastName:</Label>
// //                         <Col sm={10}>
// //                         <Input
// //                         type="text"
// //                         name="username"
// //                         value={this.state.lastname}
// //                         onChange={this.handleChange}
// //                         className="form-control"
// //                         placeholder="min 4 character "
// //                         ></Input>
// //                         </Col>
// //                     </FormGroup>
// //                     </div>

// //                     <div>
// //                     <FormGroup row>
// //                         <Label sm={2} className="headerlabel">
// //                             Email :
// //                         </Label>
// //                         <Col sm={10}>
// //                             <Input type="text"
// //                                 name="email"
// //                                 value={this.state.email}
// //                                 onChange={this.handleChange}
// //                                 className="form-control"
// //                                 placeholder="Enter email">
// //                                 </Input>
// //                         </Col>
// //                         </FormGroup>
// //                     </div>

// //                     <div>
// //                         <FormGroup row>
// //                             <Label sm={2} className="headerlabel">
// //                                 Password:
// //                             </Label>
// //                             <Col sm={10}>
// //                                 <Input type="password"
// //                                     name="password"
// //                                     value={this.state.password}
// //                                     onChange={this.handleChange}
// //                                     className="form-control"
// //                                     placeholder="min 5 character"
// //                                 ></Input>
// //                             </Col>
// //                         </FormGroup>
// //                     </div>
// //                     <div>
// //                         <FormGroup row>
// //                             <Label sm={2} className="headerlabel">
// //                             Conform Password:
// //                             </Label>
// //                             <Col sm={10}>
// //                                 <Input type="password"
// //                                     name="conformpassword"
// //                                     value={this.state.conformpassword}
// //                                     onChange={this.handleChange}
// //                                     className="form-control"
// //                                     placeholder="Enter  conform password"
// //                                 ></Input>
// //                             </Col>
// //                         </FormGroup>
// //                     </div>
// //                     <div>
// //                     <FormGroup row>
// //                         <Label
// //                         className="headerlabel"
// //                         for="username"
// //                         sm={2}>Role</Label>
// //                         <Col sm={10}>
// //                         <Input
// //                         type="text"
// //                         name="username"
// //                         value={this.state.role}
// //                         onChange={this.handleChange}
// //                         className="form-control"
// //                         placeholder="min 4 character "
// //                         ></Input>
// //                         </Col>
// //                     </FormGroup>
// //                     </div>
// //                     {this.state.notice && <p className="text text-danger"> {this.state.notice} </p>}
// //                     <Button className="submit" color="primary">Submit</Button>
// //                 </Form>
// //             </div>
// //         </div>
// //         )
// //     }
// // }
// // export default Register
