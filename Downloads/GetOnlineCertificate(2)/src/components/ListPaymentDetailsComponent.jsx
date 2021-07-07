import React, { Component } from 'react'
import {toast} from 'react-toastify'
import PaymentDetailsService from '../services/PaymentDetailsService'
 
class ListPaymentDetailsComponent extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
                paymentdetail: []
        }
        this.addPaymentDetails= this.addPaymentDetails.bind(this);
        this.deletePaymentDetails = this.deletePaymentDetails.bind(this);
    }
 
    deletePaymentDetails(paymentId){
        PaymentDetailsService.deletePaymentDetails(paymentId).then( res => {
            toast.warning("Deleting payment details",{position:toast.POSITION.TOP_CENTER})
            this.setState({paymentdetail: this.state.paymentdetail.filter(paymentdetails => paymentdetails.paymentId !== paymentId)});
        });
    }
   
    viewPaymentDetails(paymentId){
        this.props.history.push(`/view-paymentdetails/${paymentId}`);
    }
    
 
    componentDidMount(){
        PaymentDetailsService.getPaymentDetails().then((res) => {
            this.setState({ paymentdetail: res.data});
        });
    }
 
    addPaymentDetails(){
        this.props.history.push('/add-paymentdetails');
    }
 
    render() {
        return (
            <div className="listfront">
                 <h2 className="text-center">PaymentDetails List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPaymentDetails}> Add PaymentDetails</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                        <thead class="thead-dark">
                                <tr>
                                <th>PaymentId</th>
                                    <th>Course/ExamId</th>
                                    
                                    <th>Amount</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>CardNumber</th>
                                    <th>ExpiryDate</th>
                                    <th>Cvv</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.paymentdetail.map(
                                        paymentdetails => 
                                        <tr key = {paymentdetails.paymentId}>
                                            <td>{paymentdetails.paymentId}</td>
                                            <td> {paymentdetails.courseId}</td>
                                          
                                            <td>{paymentdetails.amount}</td>
                                            <td>{paymentdetails.name}</td>
                                            <td>{paymentdetails.email}</td>
                                           <td> { paymentdetails.cardNumber} </td> 
                                           <td> { paymentdetails.expiryDate} </td> 
                                             <td> {paymentdetails.cvv} </td>   
                                             
                                             <td>
                                            
                                            
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPaymentDetails(paymentdetails.paymentId)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePaymentDetails(paymentdetails.paymentId)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
 
                 </div>
                
            </div>
        )
    }
}
 
export default ListPaymentDetailsComponent