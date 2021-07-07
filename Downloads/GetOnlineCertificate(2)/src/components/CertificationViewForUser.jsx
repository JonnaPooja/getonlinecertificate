import React, { Component } from 'react'
import CertificationService from '../services/CertificationService'

class CertificationViewForUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
                certification: []
        }
    }
    viewPayment(){
        this.props.history.push('/add-paymentdetails');
    }
    viewCertification(certificationId){
        this.props.history.push(`/view-certification/${certificationId}`);
    }
    cancel(){
        this.props.history.push('/userhome');
    }
    componentDidMount(){
        CertificationService.getCertification().then((res) => {
            this.setState({ certification: res.data});
        });
    }

    render() {
        return (
            <div className="listfront">
                 <h2 className="text-center">Certification Exam List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered " color="blue">

                            <thead  class="thead-dark">
                                <tr>
                                    <th> Certification Id</th>
                                    <th> Certification Name</th>
                                    <th> Certification Description</th>
                                    <th> Exam Fees(in Rupees)</th>
                                    <th> Date</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.certification.map(
                                        certification => 
                                        <tr key = {certification.certificationId}>
                                            <td> {certification.certificationId}</td>
                                             <td> {certification.certificationName}</td>
                                             <td> {certification.certificationDescription}</td>
                                             <td> {certification.examFees}</td>
                                             <td> {certification.examDate}</td>
                                             <td>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewPayment()} className="btn btn-info">Pay</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewCertification(certification.certificationId)} className="btn btn-info">View </button>
                                                
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 <center><button style={{marginLeft: "10px"}} onClick={ () => this.cancel()} className="btn btn-info"> Back </button>
                 </center>
            </div>
        )
    }
}
export default CertificationViewForUser
