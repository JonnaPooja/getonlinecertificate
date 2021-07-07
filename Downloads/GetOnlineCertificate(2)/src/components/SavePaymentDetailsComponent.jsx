import React, { Component } from 'react'
import {toast} from 'react-toastify'
import PaymentDetailsService from '../services/PaymentDetailsService';



 
class SavePaymentDetailsComponent extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        
        this.savePaymentDetails = this.savePaymentDetails.bind(this);
 
    }
    
    
    savePaymentDetails =(e)=> {
        e.preventDefault(); 
        if (this.validateForm()) {
            let fields = {};
            fields["courseId"] = 0;
            fields["paymentMode"] = "";
            fields["name"] = "";
            fields["email"]="";
            fields["amount"] = 0;
            fields["cardNumber"] = "";
            fields["expiryDate"] = "";
            fields["cvv"] = 0;
            
        
        
        let paymentdetails = {courseId:this.state.fields.courseId,paymentMode:this.state.fields.paymentMode,amount:this.state.fields.amount,name:this.state.fields.name, email:this.state.fields.email,cardNumber:this.state.fields.cardNumber,
                            expiryDate:this.state.fields.expiryDate,cvv:this.state.fields.cvv};
        console.log('paymentdetails => ' + JSON.stringify(paymentdetails));
 
        PaymentDetailsService.createPaymentDetails(paymentdetails).then( res => {
          toast.success("Payment successfull",{position:toast.POSITION.TOP_CENTER})
            this.props.history.push('/paymentdetails');
        
        });
    } 
}
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
      }
      cancel(){
          this.props.history.push('/paymentDetails');
      }
      
    validateForm() {
 
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields["courseId"]) {
            formIsValid = false;
            errors["courseId"] = "*Please enter courseId.";
          }
    
          if (typeof fields["courseId"] !== "undefined") {
            if (!fields["courseId"].match(/^[0-9 ]+$/)) {
              formIsValid = false;
              errors["courseId"] = "*Please enter valid courseId.";
            }
          }
         
          
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "*Please enter your name.";
        }
  
        if (typeof fields["name"] !== "undefined") {
          if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["name"] = "*Please enter alphabet characters only.";
          }
        }
        if (!fields["email"]) {
                    formIsValid = false;
                    errors["email"] = "*Please enter your Email Id.";
                  }
            
                  if (typeof fields["email"] !== "undefined") {
                    if (!fields["email"].match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
                      formIsValid = false;
                      errors["email"] = "*Please enter valid Email Id.";
                    }
                  } 
        if (!fields["cardNumber"]) {
            formIsValid = false;
            errors["cardNumber"] = "*Please enter card Number.";
          }
    
          if (typeof fields["cardNumber"] !== "undefined") {
            if (!fields["cardNumber"].match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/))
             {
              formIsValid = false;
              errors["cardNumber"] = "*Please enter valid card Number.";
            }
        }
        if (!fields["expiryDate"]) {
            formIsValid = false;
            errors["expiryDate"] = "*Please enter expiryDate ";
          }
    
          if (typeof fields["expiryDate"] !== "undefined") {
            if (!fields["expiryDate"].match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)) {
              formIsValid = false;
              errors["expiryDate"] = "*Please enter valid expiryDate.";
            }
          }
        if (!fields["cvv"]) {
            formIsValid = false;
            errors["cvv"] = "*Please enter cvv number.";
          }
    
          if (typeof fields["cvv"] !== "undefined") {
            if (!fields["cvv"].match(/^[0-9]{3}$/)) {
              formIsValid = false;
              errors["cvv"] = "*Please enter valid cvv.";
            }
          }
        this.setState({
            errors: errors
          });
          return formIsValid;
    
    
        }
        render() {
        
          return (
            <div className = "cont">
              <br></br>
                      <div className = "row">
                          <div className = "card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center" ><br></br>Add PaymentDetails</h3>
                          <div className = "card-body">

                          <form>
                          <div className = "form-group">
                  <label className="col-md-4 offset-md-2">Enter Your CourseId/ExamId :  </label>
                  <input placeholder="Eg:98" name="courseId" value={this.state.fields.courseId} onChange={this.handleChange} />
                  <div className="errorMsg">{this.state.errors.courseId}</div>
                  </div>
                  <div className = "form-group">
                  <label className="col-md-4 offset-md-2">Enter paymentMode  :  </label>
                 <select value={this.state.fields.paymentMode} onChange={this.handleChange}  >
                 <option name="Debit Card">Debit Card</option>
                 <option name="Creit Card">Credit Card</option>
                 
                 </select>
                 <div className="errorMsg">{this.state.errors.paymentMode}</div>
                  </div> 
                  <div className = "form-group">
                  <label className="col-md-4 offset-md-2">Enter Amount  :  </label>
                  <input placeholder="Eg:600" name="amount" value={this.state.fields.amount} onChange={this.handleChange}   />
                  <div className="errorMsg">{this.state.errors.amount}</div>
                  </div>
                  <div className = "form-group">
                    <label className="col-md-4 offset-md-2">Enter CardHolder Name  :  </label>
                    <input placeholder="Eg:Pooja" name="name" value={this.state.fields.name} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.name}</div>
                    </div>
                     <div className = "form-group">
                    <label className="col-md-4 offset-md-2">Enter Card Number  :  </label>
                    <input placeholder="4567898765433214" name="cardNumber" value={this.state.fields.cardNumber} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.cardNumber}</div>
                    </div>
                    <div className = "form-group">
                    <label className="col-md-4 offset-md-2">Enter EmailId :  </label>
                    <input Placeholder="eg:pooja23@gmail.com" name="email" value={this.state.fields.email} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.email}</div>
                     </div>
                    
 
                    <div className = "form-group">
                    <label className="col-md-4 offset-md-2">Enter Your card Expiry Date  :  </label>
                    <input Placeholder="MM/YY" name="expiryDate" value={this.state.fields.expiryDate} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.expiryDate}</div>
                     </div>
                     <div className = "form-group">
                    <label className="col-md-4 offset-md-2">Enter Cvv Number  :  </label>
                    <input placeholder="987" name="cvv" value={this.state.fields.cvv} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.cvv}</div>
                    </div>
                    <center>
                    <button className="btn btn-success" onClick={this.savePaymentDetails}>Pay</button>
                   <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                   </center>
                    </form>
                </div>
            </div>
            </div>
            </div>
            
        );
    }
}
 
export default SavePaymentDetailsComponent