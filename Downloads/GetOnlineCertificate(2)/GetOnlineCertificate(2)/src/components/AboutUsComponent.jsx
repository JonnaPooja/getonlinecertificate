import React, { Component } from 'react'

class AboutUsComponent extends Component {
    constructor() {
        super();
        this.state = {
        }

    }
    render() {
        return (
            <div className = "about">
                <br></br>
                <div className = "container">
                <h3 className="text-center" > About Us</h3>
                    <div className = "card-body">
                        <div>
                         <p>
                             This GetCertified Online Application helps not only expand your skill and knowledge but also makes your resume more attractive to recruiters for private or government jobs.
                             Online courses give you a chance to learn from industry experts without spending a dime. 
                             Course program builds, which helps you to take your career to the next level.
                             This learning material designed in such a way that teaches you
                             how you can program with technologies and how you can use technologies to automate frequently use system administration tasks.
                                                   
                        </p>
                        </div>
                         </div>
                    </div>
                 </div>
        )
    }
}
export default AboutUsComponent
