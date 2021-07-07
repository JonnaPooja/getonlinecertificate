import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import formService from "../services/formService";
import RegisterService from '../services/RegisterService';
import {toast} from 'react-toastify'

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert" style={{ fontSize: 13, color: "red" }}>
        This field is required!
      </div>
    );
  }
};


const username = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert" style={{ fontSize: 13, color: "red" }}>
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const email = value => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert" style={{ fontSize: 13, color: "red" }}>
          This is not a valid email.
        </div>
      );
    }
  };

const password = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert" style={{ fontSize: 13, color: "red" }}>
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};


const phoneNo = value => {
    if (value.length ===9) {
      return (
        <div className="alert alert-danger" role="alert"  style={{ fontSize: 13, color: "red" }}>
          The phoneNumber must be of 10 characters.
        </div>
      );
    }
  };

  const address = value => {
    if (value.length < 3|| value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert" style={{ fontSize: 13, color: "red" }}>
          The address must be between 3 and 40 characters.
        </div>
      );
    }
  };

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePhoneNo =this.onChangePhoneNo.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      phoneNo:"",
      address:"",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangePhoneNo(e) {
    this.setState({
      phoneNo: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
        formService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.phoneNo,
         this.state.address
     ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }
  save = (c) => {
    c.preventDefault();
    let customer = this.state;
      console.log('customer => ' + JSON.stringify(customer));
      

    RegisterService.addCustomer(customer).then ( (res) =>{
        console.log(res);
        
        toast.success("Registered successfully...Now you can login",{position:toast.POSITION.TOP_CENTER})
        this.props.history.push('/login');
    })
   
} 
cancel(){
    this.props.history.push('/AddCustomer');
}

  render() {
    return (
      <div className="col-md-12">
        <div className ="box">
        <center>
       <h2> REGISTRATION </h2></center>
        <div className="card card-container">
        <center>
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
            </center>
          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter Your Name"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, username]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Enter Your Email Address"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Your Password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, password]}
                  />
                </div>

               
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter Your Address"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    validations={[required, address]}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phoneNo">Phone Number</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="phoneNo"
                    placeholder="Enter Your PhoneNo"
                    value={this.state.phoneNo}
                    onChange={this.onChangePhoneNo}
                    validations={[required, phoneNo]}
                  />
                </div>


                <div className="form-group"><br></br>
                <center>
                <button type="submit" className="btn btn-primary" onClick={this.save}>Register</button>
                </center>
                <br></br>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
            
          </Form>
          
          <span className='form-input-login'>
          Already have an account? Login <a href='/login'>here</a>
        </span>
        </div>
        </div>
      </div>
    );
  }
}