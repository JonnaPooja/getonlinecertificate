import React, { Component } from 'react'
import {toast} from 'react-toastify'
import CertificationService from '../services/CertificationService';

class CreateCertificationComponent extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        
        this.saveCertification = this.saveCertification.bind(this);
    }
       /*//this.changeMedicalRecordIdHandler = this.changeMedicalRecordIdHandler.bind(this);
        this.changeCertificationNameHandler = this.changeCertificationNameHandler.bind(this);
        this.changeCertificationDescriptionHandler = this.changeCertificationDescriptionHandler.bind(this);        
        this.changeExamFeesHandler = this.changeExamFeesHandler.bind(this);
        this.changeExamDateHandler = this.changeExamDateHandler.bind(this);
        this.saveCertification = this.saveCertification.bind(this);*/

    
    saveCertification = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["certificationName"] = "";
            fields["certificationDescription"] = "";
            fields["examFees"] = 0;
            fields["examDate"] = "";
        let certification = {certificationName: this.state.fields.certificationName, certificationDescription: this.state.fields.certificationDescription, examFees: this.state.fields.examFees, examDate: this.state.fields.examDate};
        console.log('certification => ' + JSON.stringify(certification));
        
        CertificationService.saveCertification(certification).then(res =>{
            toast.success("Certification added successfully",{position:toast.POSITION.TOP_CENTER})
            this.props.history.push('/certificate');
        });
    }
}
  /*  changeCertificationNameHandler= (event) => {
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
    }*/
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }

    cancel(){
        this.props.history.push('/certificate');
    }
    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
          
        if (!fields["certificationName"]) {
          formIsValid = false;
          errors["certificationName"] = "*Please enter your certificationName.";
        }
  
        if (typeof fields["certificationName"] !== "undefined") {
          if (!fields["certificationName"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["certificationName"] = "*Please enter alphabet characters only.";
          }
        }
        if (!fields["certificationDescription"]) {
            formIsValid = false;
            errors["certificationDescription"] = "*Please enter your certificationDescription.";
          }
    
          if (typeof fields["certificationDescription"] !== "undefined") {
            if (!fields["certificationDescription"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["certificationDescription"] = "*Please enter alphabet characters only.";
            }
        }
            if (!fields["examFees"]) {
                formIsValid = false;
                errors["examFees"] = "*Please enter Exam Fees.";
              }
              if (!fields["examDate"]) {
                formIsValid = false;
                errors["examDate"] = "*Please enter exam Date.";
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
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" > Add Certification</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Certification Name: </label>
                                            <input type="text" placeholder="Certification Name" name="certificationName" className="form-control" 
                                                value={this.state.fields.certificationName} onChange={this.handleChange} />
                                                <div className="errorMsg">{this.state.errors.certificationName}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Certification Description: </label>
                                            <input type="text" placeholder="Certification Description" name="certificationDescription" className="form-control" 
                                                value={this.state.fields.certificationDescription} onChange={this.handleChange} />
                                                <div className="errorMsg">{this.state.errors.certificationDescription}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Exam Fees:(in Rupees) </label>
                                            <input type="number" placeholder="Exam Fees" name="examFees" className="form-control" 
                                                value={this.state.fields.examFees} onChange={this.handleChange} />
                                                <div className="errorMsg">{this.state.errors.examFees}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label>Exam Date: </label>
                                            <input type="date" placeholder="Exam Date" name="examDate" className="form-control" 
                                                value={this.state.fields.examDate} onChange={this.handleChange}/>
                                                <div className="errorMsg">{this.state.errors.examDate}</div>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveCertification}>Save</button>
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

export default CreateCertificationComponent