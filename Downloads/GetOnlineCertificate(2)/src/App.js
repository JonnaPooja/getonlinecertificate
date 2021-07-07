import logo from './logo.svg';
import photo from './photo.jpg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/pages/Home";
import ListCertificationComponent from './components/ListCertificationComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCertificationComponent from './components/CreateCertificationComponent';
import ViewCertificationComponent from './components/ViewCertificationComponent';
import UpdateCertificationComponent from './components/UpdateCertificationComponent';
import SavePaymentDetailsComponent from './components/SavePaymentDetailsComponent';
import ViewPaymentDetailsComponent from './components/ViewPaymentDetailsComponent';
import ListCourseComponent from './components/ListCourseComponent';
import CreateCourseComponent from './components/CreateCourseComponent';
import UpdateCourseComponent from './components/UpdateCourseComponent';
import ViewCourseComponent from './components/ViewCourseComponent';
import Login from './components/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {history} from  './history';
import UpdateRegistration from './components/UpdateRegistration';
import ValidationForm from './components/ValidationForm';
import ListPaymentDetailsComponent from './components/ListPaymentDetailsComponent';
import login from "./components/pages/login";
import adminlogin from "./components/adminlogin";
import HomeForLoginComponent from './components/HomeForLoginComponent';
import LoginComponent from './components/LoginComponent';
import HomeForAdmin from './components/HomeForAdmin';
import HomeForUser from './components/HomeForUser';
import CertificationViewForUser from './components/CertificationViewForUser';
import CourseViewForUser from './components/CourseViewForUser';
import AboutUsComponent from './components/AboutUsComponent';
import GuidelinesComponent from './components/GuidelinesComponent';
//import Contact from "./components/Contact";

function App() {
  return (
    <div>
        
        <Router history={history}>
              
              <HeaderComponent />
              <Route exact path="/" component={HomeForLoginComponent}></Route>
              <Route exact path="/login"  component={Login}></Route><div></div>
              <Route exact path="/adminlogin"  component={adminlogin}></Route><div></div>
              <Route path="/aboutUs" component={AboutUsComponent}></Route>
              <Route path = "/home" exact component = {HomeForLoginComponent}></Route>
              <Route exact path = "/addUser" component= {ValidationForm}></Route>
              <Route exact path="/adminhome" component={HomeForAdmin}></Route>
              <Route path ="/userhome" component = {HomeForUser}></Route>
              <Route path="/guideline" component = {GuidelinesComponent}></Route>
              <Route path ="/certificationlist" component={CertificationViewForUser}></Route>
              <Route path ="/courselist" component={CourseViewForUser}></Route>
                          <Route path = "/certificate" component = {ListCertificationComponent}></Route>
                          <Route path = "/add-certification/:certificationId" component = {CreateCertificationComponent}></Route>
                          <Route path = "/view-certification/:certificationId" component = {ViewCertificationComponent}></Route>
                          <Route path = "/update-certification/:certificationId" component = {UpdateCertificationComponent}></Route>
                          <Route path = "/course" component = {ListCourseComponent}></Route>
                          <Route path = "/add-course/:courseId" component = {CreateCourseComponent}></Route>
                          <Route path = "/view-course/:courseId" component = {ViewCourseComponent}></Route>
                          <Route path = "/update-course/:courseId" component = {UpdateCourseComponent}></Route>
                          
<Route path = "/paymentdetails" component = {ListPaymentDetailsComponent}></Route>
<Route path = "/view-paymentdetails/:paymentId" component = {ViewPaymentDetailsComponent}></Route>
<Route path = "/add-paymentdetails" component = {SavePaymentDetailsComponent}></Route>
<Route path = "/update/email" component = {UpdateRegistration}></Route>

                  
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
