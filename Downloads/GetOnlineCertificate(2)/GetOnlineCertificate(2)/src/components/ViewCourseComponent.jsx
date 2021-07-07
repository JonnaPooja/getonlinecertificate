import React, { Component } from 'react'
import CourseService from '../services/CourseService'

class ViewCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseId: this.props.match.params.courseId,
            course: {}
        }
    }

    componentDidMount(){
        CourseService.getCourseById(this.state.courseId).then( res => {
            this.setState({course: res.data});
        })
    }

    render() {
        return (
            <div className = "cont">
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Course Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label className = "col-md-5 offset-md-3"> Course Id: </label>
                            <div> { this.state.course.courseId }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-5 offset-md-3"> Course Name: </label>
                            <div> { this.state.course.courseName }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-5 offset-md-3"> Course Author: </label>
                            <div> { this.state.course.courseAuthor }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-5 offset-md-3"> Course Duration: </label>
                            <div> { this.state.course.courseDuration }</div>
                        </div>
                        <div className = "row">
                            <label className = "col-md-5 offset-md-3"> Course Cost: </label>
                            <div> { this.state.course.courseCost }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCourseComponent
