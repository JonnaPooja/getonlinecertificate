import React, { Component } from 'react'
import {toast} from 'react-toastify'
import CertificationService from '../services/CertificationService'

class ListCertificationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                certification: []
        }
        this.addCertification = this.addCertification.bind(this);
        this.editCertification = this.editCertification.bind(this);
        this.deleteCertification = this.deleteCertification.bind(this);
    }
    deleteCertification(certificationId){
        CertificationService.deleteCertification(certificationId).then( res => {
            toast.success("Deleted successfully",{position:toast.POSITION.TOP_CENTER})
            this.setState({certification: this.state.certification.filter(certification => certification.certificationId !== certificationId)});
        });
    }
    editCertification(certificationId){
        this.props.history.push(`/update-certification/${certificationId}`);
    }
    viewCertification(certificationId){
        this.props.history.push(`/view-certification/${certificationId}`);
    }
    componentDidMount(){
        CertificationService.getCertification().then((res) => {
            this.setState({ certification: res.data});
        });
    }
    cancel(){
        this.props.history.push('/adminhome');
    }

    addCertification(){
        this.props.history.push('/add-certification/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Certification Exam List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCertification}> Add Certification</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead class="thead-dark">
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
                                                <button onClick={ () => this.editCertification(certification.certificationId)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCertification(certification.certificationId)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewCertification(certification.certificationId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        
                 </div>
                 <center>
                            
                            <button style={{marginLeft: "10px"}} onClick={ () => this.cancel()} className="btn btn-info"> Back </button>
                                                </center>               
            </div>
            
        )
    }
}
export default ListCertificationComponent
