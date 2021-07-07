import React, { Component } from 'react'
import RegisterService from '../services/RegisterService';


class UpdateRegistration extends Component {
    constructor(props) {
        super(props)

        this.state = {
              password : '',
              phoneNo : '',
              address : ''
          }
          this.changePhoneNoHandler=this.changePhoneNoHandler.bind(this);
          this.changePasswordHandler = this.changePasswordHandler.bind(this);
          this.changeAddressHandler = this.changeAddressHandler.bind(this);
          this.updateCustomers= this.updateCustomers.bind(this);
    }
    componentDidMount(){
      RegisterService.updateCustomer(this.state).then( (res) =>{
            let customer = res.data;
            this.setState({password: customer.password,
                phoneNo: customer.phoneNo,
                address: customer.address
            });
        });
    }

    updateCustomers= (e) => {
        e.preventDefault();
        let customer= {password:this.state.password,phoneNo:this.state.phoneNo,address:this.state.address};
        console.log('customer => ' + JSON.stringify(customer));
        console.log('email=> ' + JSON.stringify(this.state));
        RegisterService.updateCustomer(customer, this.state).then( res => {
            this.props.history.push('/customer');
        });
    }

   changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changePhoneNoHandler= (event) => {
        this.setState({phoneNo: event.target.value});
    }

   changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    

    cancel(){
        this.props.history.push('/customer');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Registration</h3>
                                <div className = "">
                                    <form>
                                        <div className = "form-group">
                                            <label> User name: </label>
                                            <input placeholder="username" name="username" className="form-control" />
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="email" name="email" className="form-control" />
                                        </div>
                                        <div className = "form-group">
                                            <label>Password: </label>
                                            <input placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> PhoneNumber: </label>
                                            <input placeholder="phoneNo" name="phoneNo" className="form-control" 
                                                value={this.state.phoneNo} onChange={this.changePhoneNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.updateCustomer}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateRegistration;
