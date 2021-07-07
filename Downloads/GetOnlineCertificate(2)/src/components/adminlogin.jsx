import  './styles.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginService from '../services/LoginService.jsx'

import {history} from '../history'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


//import {Redirect} from "react-router-dom"
class Login extends React.Component{
    constructor(props){
        super(props);
    this.state={
        userId:'',
        password:'',
      
        show:false,
    }
    this.handlesubmit=this.handlesubmit.bind(this);
};
    handleSetuser=e=>{
       
        this.setState({userId:(e.target.value)})
    }
    handleSetpassword=e=>
    {
       
        this.setState({password:(e.target.value)})
    }
   
    handlesubmit=()=>{
        var id=this.state.userId;
        var password=this.state.password;
        console.log(id,password);
        this.setState({show:true});
       /* if(id&&password)
        {
            this.props.login(id,password);
            
        }*/
        LoginService.validate(id, password)
        .then(
            user => { 
//console.log(user.response.ok);
                console.log(user.data)
                console.log(user.status)
                console.log(user.data.type)
              
                if(user.data==='sucess login')
                {
               
                toast.success("login successfull",{position:toast.POSITION.TOP_CENTER,autoClose:false})
            this.props.history.push({pathname:'/adminhome',state:{data:user.data.type}});
                }else{
                    toast.error("Enter Valid userId and password",{position:toast.POSITION.TOP_CENTER,autoClose:false})
                }
    },
            
        ).catch(res=>{
            toast.error("Enter Valid userId and password",{position:toast.POSITION.TOP_CENTER,autoClose:false})
           // history.push({pathname:'/login',state:{data1:user.data}});  
        });

   
      

    };
   

   
    render(){
        const{loggingIn}=this.props;
        const{userId,password,show}=this.state;
        return(
            <div className="col-md-12">
    
                <div className='user-id1' >
                <div className='data'>
                <h4>Login Form</h4>
                
    </div>
                <form name='login'  >
               <b><hr></hr></b>
              <div className={'form-group'+ (show && !userId ? 'has-error': '')}>
            <label htmlFor='userId'>User: </label>   <br></br><input type='text' name='userId'  className='form-control' placeholder='Enter UserId' pattern="^[A-Za-z]{5,29}$" onChange={this.handleSetuser} required></input>
             {show && !userId && <div className='help-block'>*UserId is required</div>}
             </div>  
             
             <div  className={'form-group'+ (show && !password ? 'has-error': '')}>
            <label htmlFor='password'>Password:</label>  <br></br> <input type='password' name='password' className='form-control' placeholder='Enter password' pattern="^(?=.*[0-9])
            + (?=.[a-z])(?=.[A-Z])
             +(?=.*[@#$%^&+=])
             + (?=\\S+$).{8,20}$" onChange={this.handleSetpassword} required></input>
              {show&& userId && !password && <div className='help-block'>*Password is required</div>}
              </div>
             <br></br>
             

             <div>
               
                 
             <button type="submit" className='btn btn-success' background-color='pink' onClick={this.handlesubmit} color='blue'>Login</button>
             
             {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="  alt='sucess'/>
                        }
            {/* {this.state.show ? <viewpage/>:''} */}
          
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
export default Login;