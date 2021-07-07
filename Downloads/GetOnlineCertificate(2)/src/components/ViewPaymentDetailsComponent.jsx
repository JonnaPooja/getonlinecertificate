import React, { Component } from 'react'
import PaymentDetailsService from '../services/PaymentDetailsService';
 
class ViewPaymentDetailsComponent extends Component
{
    constructor(props) {
       super(props)
        this.state = {
            paymentId: this.props.match.params.paymentId,
            paymentdetails: {}
        }
    }
    componentDidMount(){
        PaymentDetailsService.getPaymentDetailsById(this.state.paymentId).then( res => {
            this.setState({paymentdetails: res.data});
        })
    }
    print(){
        window.print();
    }
 
render(){
 return (
     
        <div className = "cont">
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View Payment Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                        <label  className = "col-md-4 offset-md-3">Payment Id : </label>
                        <div> { this.state.paymentdetails.paymentId }</div>
                    </div>
                    <div className = "row">
                        <label  className = "col-md-4 offset-md-3">Course/ExamId : </label>
                        <div> { this.state.paymentdetails.courseId }</div>
                    </div>
                    <div className = "row">
                        <label  className = "col-md-4 offset-md-3">Amount : </label>
                        <div> { this.state.paymentdetails.amount }</div>
                    </div>
                    <div className = "row">
                        <label className = "col-md-4 offset-md-3">Name : </label>
                        <div> { this.state.paymentdetails.name }</div>
                    </div>
                    <div className = "row">
                        <label className = "col-md-4 offset-md-3">Email Id : </label>
                        <div> { this.state.paymentdetails.email}</div>
                    </div>
                    <div className = "row">
                        <label className = "col-md-4 offset-md-3">Card Number : </label>
                        <div> { this.state.paymentdetails.cardNumber}</div>
                    </div>
                    <div className = "row">
                        <label className = "col-md-4 offset-md-3">Expiry Date : </label>
                        <div> { this.state.paymentdetails.expiryDate}</div>
                    </div>
                    <div className = "row">
                        <label className = "col-md-4 offset-md-3">Cvv : </label>
                        <div> { this.state.paymentdetails.cvv }</div>
                    </div>
                   
                    
    <button className="btn btn-success" onClick={this.print}style={{ marginLeft: "40%" }}>Print</button>
                </div>
 
            </div>
        </div>
    )
}
 
}
export default ViewPaymentDetailsComponent