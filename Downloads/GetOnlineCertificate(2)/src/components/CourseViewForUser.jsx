import React, { Component } from 'react'
import CourseService from '../services/CourseService'
import PaymentDetailsService from '../services/PaymentDetailsService'

class CourseViewForUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //courseId: this.props.match.params.courseId,
                courses: []
        }
    }
    viewCourse(courseId){
        this.props.history.push(`/view-course/${courseId}`);
    }
    viewPayment(){
        this.props.history.push('/add-paymentdetails');
    }
    cancel(){
        this.props.history.push('/userhome');
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
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewPayment()} className="btn btn-info"><i class="far fa-eye"></i>Pay </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewCourse(course.courseId)} className="btn btn-info"><i class="far fa-eye"></i>View </button>
                                            
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                <center> <button style={{marginLeft: "10px"}} onClick={ () => this.cancel()} className="btn btn-info"> Back </button>
                </center>
            </div>
        )
    }
}

export default CourseViewForUser
