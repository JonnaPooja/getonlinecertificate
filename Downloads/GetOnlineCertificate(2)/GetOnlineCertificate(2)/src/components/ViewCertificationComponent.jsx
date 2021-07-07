import React, { Component } from 'react'
import CertificationService from '../services/CertificationService'

class ViewCertificationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            certificationId: this.props.match.params.certificationId,
            certification: {}
        }
    }

    componentDidMount(){
        CertificationService.getCertificationById(this.state.certificationId).then( res => {
            this.setState({certification: res.data});
        })
    }

    render() {
        return (
            <div className = "cont">
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Certification Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label className = "col-md-5 offset-md-3"> Certification  Id: </label>

                            <div> { this.state.certification.certificationId }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-5 offset-md-3"> Certification Name: </label>
                            <div> { this.state.certification.certificationName }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-5 offset-md-3"> Certification Description: </label>
                            <div> { this.state.certification.certificationDescription}</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-5 offset-md-3"> Exam Fees: </label>
                            <div> { this.state.certification.examFees }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-5 offset-md-3"> Exam Date: </label>
                            <div> { this.state.certification.examDate }</div>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}


export default ViewCertificationComponent
