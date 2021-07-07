import  './styles.css'
import React from 'react';
import {history} from '../history'
import LoginService from '../services/LoginService.jsx'
import RegisterService from '../services/RegisterService'
//import Login from './components/Login.jsx'
//import adminlogin from './components/adminlogin.jsx'
export default class HomeForUser extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
ViewCertificationDetails()
{
    history.push('/certificationlist');
}
ViewCourseDetails()
{
    history.push('/courselist');
}
ViewPaymentDetails()
{
    history.push('/paymentdetails');
}
    render(){
        return(
            <div className="userhome">
    
                <div className='certification' >
                <div className='data'>
                <h4>Looking For</h4>
                
                 </div>
                <form name='login'  >
               <b><hr></hr></b>

             <div>
                 
          <center>
             <div>                   
             <button type="submit" style={{marginBottom: "50px"}} className='btn btn-success' background-color='pink' onClick={this.ViewCertificationDetails} color='blue'>Certification Exam List</button>
             </div>
             <div>  
             <button type="submit" style={{marginTop: "20px"}} className='btn btn-success' background-color='pink' onClick={this.ViewCourseDetails} color='blue'>Course List</button>
             </div>
             <div>  
             <button type="submit" style={{marginTop: "70px"}} className='btn btn-success' background-color='pink' onClick={this.ViewPaymentDetails} color='blue'>Payment</button>
             </div>
            {/* {this.state.show ? <viewpage/>:''} */}
          </center>
                        </div>
                        
                
                           </form>
             
                           
            </div>
         
        
            </div>
        );
        
    }}
/*function mapState(state){
    const{loggingIn}=state.authentication;
    return {loggingIn};
}
const actionCreators={
    login:userActions.login
}
const connedLoginPage=connect(mapState,actionCreators)(Login);*/