import React, { Component } from 'react'
import {toast} from 'react-toastify'
import CourseService from '../services/CourseService'

class ListCourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //courseId: this.props.match.params.courseId,
                courses: []
        }
        this.addCourse = this.addCourse.bind(this);
        this.editCourse = this.editCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    deleteCourse(courseId){
        CourseService.deleteCourse(courseId).then( res => {
            toast.success("Deleted successfully",{position:toast.POSITION.TOP_CENTER})
            this.setState({courses: this.state.courses.filter(course => course.courseId !== courseId)});
        });
    }
    viewCourse(courseId){
        this.props.history.push(`/view-course/${courseId}`);
    }
    editCourse(courseId){
        this.props.history.push(`/update-course/${courseId}`);
    }
    cancel(){
        this.props.history.push('/adminhome');
    }
    componentDidMount(){
        CourseService.getCourses().then((res) => {
            this.setState({ courses: res.data});
        });
    }

    addCourse(){
        this.props.history.push('/add-course/_add');
    }

    render() {
        return (
            <div className="listfront">
                 <h2 className="text-center">Courses List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCourse}> Add Course</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead  class="thead-dark">
                                <tr>
                            
                                    <th> Course Id</th>
                                    <th> Course Name</th>
                                    <th> Course Author</th>
                                    <th> Course Duration(in weeks)</th>
                                    <th> Course Cost(in Rupees)</th>
        
                                    <th> Actions</th>
                
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    this.state.courses.map(
                                        course => 
                                        <tr key = {course.courseId}>
                                            <td> {course.courseId}</td>
                                             <td> {course.courseName}</td>   
                                             <td> {course.courseAuthor}</td>
                                             <td> {course.courseDuration}</td>
                                             <td> {course.courseCost}</td>
                                             
                                             <td>
                                                 <button onClick={ () => this.editCourse(course.courseId)} className="btn btn-info"><i class="far fa-edit"></i>Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCourse(course.courseId)} className="btn btn-danger"><i class="far fa-trash-alt"></i>Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCourse(course.courseId)} className="btn btn-info"><i class="far fa-eye"></i>View </button>
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

export default ListCourseComponent
