import  './styles.css'
import React from 'react';
import {history} from '../history'
import LoginService from '../services/LoginService.jsx'
import RegisterService from '../services/RegisterService'
//import Login from './components/Login.jsx'
//import adminlogin from './components/adminlogin.jsx'
export default class HomeForLoginComponent extends React.Component{
    constructor() {
        super();
        this.state = {

        }
    }
Login()
{
    history.push('/login');
}
adminlogin()
{
    history.push('/adminlogin');
}

    render(){
        return(
            <div className="col-md-12">
    
                <div className='user-id1' >
                <div className='data'>
                <h4>User Type</h4>
                
    </div>
                <form name='login'  >
               <b><hr></hr></b>

             <div>
                 
                 <center>
               <div>
                   
             <button type="submit" style={{marginBottom: "50px"}} className='btn btn-success' background-color='pink' onClick={this.adminlogin} color='blue'>Admin</button>
             </div>
             <div>  
             <button type="submit" style={{marginBottom: "100px"}} className='btn btn-success' background-color='pink' onClick={this.Login} color='blue'>User</button>
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
