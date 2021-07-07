import React, { Component } from 'react'

class GuidelinesComponent extends Component {
    constructor() {
        super();
        this.state = {
        }

    }
    render() {
        return (
            <div className = "bulb">
                <br></br>
                <div className = "container">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center" > How to use this application? </h3>
                    <div className = "card-body">
                        <div>
                         <p>
                             <justify>
                         Step 1: Select the type as User in home page.<br/>
                         Step 2: Click on the Signup link.<br/>
                         Step 3: Register the details.<br/>
                         Step 4: Login with the credentials.<br/>
                         Step 5: Select Certification exam or Courses which you need.<br/>
                         Step 6: Explore on that and Pay.<br/>
                         Step 7: Expand your skills through our contents and get certified. <br/>
                         </justify>
                        </p>
                        </div>
                        </div>
                         </div>
                    </div>
                 </div>
        )
    }
}
export default GuidelinesComponent
