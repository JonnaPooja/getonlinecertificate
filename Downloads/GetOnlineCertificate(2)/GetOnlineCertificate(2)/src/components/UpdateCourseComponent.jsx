import React, { Component } from 'react'
import {toast} from 'react-toastify'
import CourseService from '../services/CourseService';

class UpdateCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseId: this.props.match.params.courseId,
            courseName: '',
            courseAuthor: '',
            courseDuration: '',
            courseCost: ''
            
        }
        this.changeCourseIdHandler = this.changeCourseIdHandler.bind(this);
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeCourseAuthorHandler = this.changeCourseAuthorHandler.bind(this);
        this.changeCourseDurationHandler = this.changeCourseDurationHandler.bind(this);
        this.changeCourseCostHandler = this.changeCourseCostHandler.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
    }

    componentDidMount(){
        CourseService.getCourseById(this.state.courseId).then( (res) =>{
            let course = res.data;
            this.setState({courseName: course.courseName,
                            courseAuthor: course.courseAuthor,
                            courseDuration : course.courseDuration,
                            courseCost : course.courseCost
                            
            });
        });
    }

    updateCourse = (e) => {
        e.preventDefault();
        let course = {courseName: this.state.courseName, courseAuthor: this.state.courseAuthor, courseDuration: this.state.courseDuration, courseCost: this.state.courseCost};
        console.log('course => ' + JSON.stringify(course));
        console.log('courseId => ' + JSON.stringify(this.state.courseId));
        CourseService.updateCourse(course, this.state.courseId).then( res => {
            toast.success("Updated successfully",{position:toast.POSITION.TOP_CENTER})
            this.props.history.push('/course');
        });
    }
    
    changeCourseIdHandler= (event) => {
        this.setState({courseId: event.target.value});
    }

    changeCourseNameHandler= (event) => {
        this.setState({courseName: event.target.value});
    }

    changeCourseAuthorHandler= (event) => {
        this.setState({courseAuthor: event.target.value});
    }

    changeCourseDurationHandler= (event) => {
        this.setState({courseDuration: event.target.value});
    }

    changeCourseCostHandler= (event) => {
        this.setState({courseCost: event.target.value});
    }

    cancel(){
        this.props.history.push('/course');
    }

    render() {
        return (
            <div className = "cont">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Course</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Course Name: </label>
                                            <input placeholder="Course Name" name="courseName" className="form-control" 
                                                value={this.state.courseName} onChange={this.changeCourseNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Author: </label>
                                            <input placeholder="Course Author" name="courseAuthor" className="form-control" 
                                                value={this.state.courseAuthor} onChange={this.changeCourseAuthorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Duration: </label>
                                            <input placeholder="Course Duration" name="courseDuration" className="form-control" 
                                                value={this.state.courseDuration} onChange={this.changeCourseDurationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Cost: </label>
                                            <input placeholder="Course Cost" name="courseCost" className="form-control" 
                                                value={this.state.courseCost} onChange={this.changeCourseCostHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateCourse}>Save</button>
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

export default UpdateCourseComponent
