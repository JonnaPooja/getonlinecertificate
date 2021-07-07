import React, { Component } from 'react'
import {toast} from 'react-toastify'
import CertificationService from '../services/CertificationService';

class UpdateCertificationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            certificationId: this.props.match.params.certificationId,
            certificationName: '',
            certificationDescription: '',
            examFees: '',
            examDate: ''
        }
        this.changeCertificationIdHandler = this.changeCertificationIdHandler.bind(this);
        this.changeCertificationNameHandler = this.changeCertificationNameHandler.bind(this);
        this.changeCertificationDescriptionHandler = this.changeCertificationDescriptionHandler.bind(this);
        this.changeExamFeesHandler = this.changeExamFeesHandler.bind(this);
        this.changeExamDateHandler = this.changeExamDateHandler.bind(this);
        this.updateCertification = this.updateCertification.bind(this);
    }

    componentDidMount(){
        CertificationService.getCertificationById(this.state.certificationId).then( (res) =>{
            let certification = res.data;
            this.setState({certificationName: certification.certificationName,
                            certificationDescription: certification.certificationDescription,
                            examFees : certification.examFees,
                            examDate : certification.examDate
            });
        });
    }

    updateCertification = (e) => {
        e.preventDefault();
        let certification = {certificationName: this.state.certificationName, certificationDescription: this.state.certificationDescription, examFees: this.state.examFees, examDate: this.state.examDate};
        console.log('certificaion => ' + JSON.stringify(certification));
        console.log('certificationId => ' + JSON.stringify(this.state.certificationId));
        CertificationService.updateCertification(certification, this.state.certificationId).then( res => {
            toast.success("Updated successfully",{position:toast.POSITION.TOP_CENTER})
            this.props.history.push('/certificate');
        });
    }
    
    changeCertificationIdHandler= (event) => {
        this.setState({certificationId: event.target.value});
    }

    changeCertificationNameHandler= (event) => {
        this.setState({certificationName: event.target.value});
    }

    changeCertificationDescriptionHandler= (event) => {
        this.setState({certificationDescription: event.target.value});
    }

    changeExamFeesHandler= (event) => {
        this.setState({examFees: event.target.value});
    }

    changeExamDateHandler= (event) => {
        this.setState({examDate: event.target.value});
    }

    cancel(){
        this.props.history.push('/certificate');
    }

    render() {
        return (
            <div className = "cont">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Certification</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Certification Name: </label>
                                            <input type="text" placeholder="Certification Name" name="certificationName" className="form-control" 
                                                value={this.state.certificationName} onChange={this.changeCertificationNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Certification Description: </label>
                                            <input type="text" placeholder="Certification Description" name="certificationDescription" className="form-control" 
                                                value={this.state.certificationDescription} onChange={this.changeCertificationDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Exam Fees: </label>
                                            <input placeholder="Exam Fees" type="number" name="examFees" className="form-control" 
                                                value={this.state.examFees} onChange={this.changeExamFeesHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Exam Date: </label>
                                            <input type="date" placeholder="Exam Date" name="examDate" className="form-control" 
                                                value={this.state.examDate} onChange={this.changeExamDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateCertification}>Save</button>
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

export default UpdateCertificationComponent
