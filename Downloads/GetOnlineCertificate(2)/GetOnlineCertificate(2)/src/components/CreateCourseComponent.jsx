import React, { Component } from 'react'
import {toast} from 'react-toastify'
import CourseService from '../services/CourseService';

class CreateCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            fields: {},
          errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveCourse = this.saveCourse.bind(this);

    }

    saveCourse = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["courseName"] = "";
            fields["courseAuthor"] = "";
            fields["courseDuration"] = 0;
            fields["courseCost"] = 0;
        let course = {courseName: this.state.fields.courseName, courseAuthor: this.state.fields.courseAuthor, courseDuration: this.state.fields.courseDuration, courseCost: this.state.fields.courseCost};
        console.log('course => ' + JSON.stringify(course));

        CourseService.saveCourse(course).then(res =>{
            toast.success("Course added successfully",{position:toast.POSITION.TOP_CENTER})
            this.props.history.push('/course');
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
        this.props.history.push('/course');
    }
    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
          
        if (!fields["courseName"]) {
          formIsValid = false;
          errors["courseName"] = "*Please enter your Course Name.";
        }
  
        if (typeof fields["courseName"] !== "undefined") {
          if (!fields["courseName"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["courseName"] = "*Please enter alphabet characters only.";
          }
        }
        if (!fields["courseAuthor"]) {
            formIsValid = false;
            errors["courseAuthor"] = "*Please enter your course Author.";
          }
    
          if (typeof fields["courseAuthor"] !== "undefined") {
            if (!fields["courseAuthor"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["courseAuthor"] = "*Please enter alphabet characters only.";
            }
        }
            if (!fields["courseDuration"]) {
                formIsValid = false;
                errors["courseDuration"] = "*Please enter courseDuration.";
              }
              if (!fields["courseCost"]) {
                formIsValid = false;
                errors["courseCost"] = "*Please enter course Cost.";
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
                            <h3 className="text-center" >Add Course</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Course Name: </label>
                                            <input placeholder="Course Name" type="text" name="courseName" className="form-control" 
                                                value={this.state.fields.courseName} onChange={this.handleChange}/>
                                                <div className="errorMsg">{this.state.errors.courseName}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Author: </label>
                                            <input placeholder="Course Author" type="text" name="courseAuthor" className="form-control" 
                                                value={this.state.fields.courseAuthor} onChange={this.handleChange}/>
                                                <div className="errorMsg">{this.state.errors.courseAuthor}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Duration: </label>
                                            <input placeholder="Course Duration" type="number" name="courseDuration" className="form-control" 
                                                value={this.state.fields.courseDuration} onChange={this.handleChange}/>
                                                <div className="errorMsg">{this.state.errors.courseDuration}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Cost: </label>
                                            <input placeholder="Course Cost" name="courseCost" type="number" className="form-control" 
                                                value={this.state.fields.courseCost} onChange={this.handleChange}/>
                                                <div className="errorMsg">{this.state.errors.courseCost}</div>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveCourse}>Save</button>
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

export default CreateCourseComponent
