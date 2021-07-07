import axios from 'axios';

const COURSE_API_BASE_URL = "http://getcertifiedonline.cln0x6jdkns2.us-east-2.rds.amazonaws.com:8086/api/v3/course";

class CourseService {

    getCourses(){
        return axios.get(COURSE_API_BASE_URL);
    }

    saveCourse(course){
        return axios.post(COURSE_API_BASE_URL, course);
    }

    getCourseById(courseId){
        return axios.get(COURSE_API_BASE_URL + '/' + courseId);
    }

    updateCourse(course, courseId){
        return axios.put(COURSE_API_BASE_URL + '/' + courseId, course);
    }

    deleteCourse(courseId){
        return axios.delete(COURSE_API_BASE_URL + '/' + courseId);
    }
}

export default new CourseService()