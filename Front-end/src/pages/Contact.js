import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class Contact extends React.Component {
    render(){
    return (
        <div>
            <div class="registration-form">
        <form>
            <div class="form-icon">
                <span><i class="icon icon-user"></i></span>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="email" placeholder="Email"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control item" id="password" placeholder="Password"/>
            </div>
            <div class="form-group">
                <input type="Message" class="form-control item1" id="Message" placeholder="Message"/>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-block create-account">Send Message</button>
            </div>
            
        </form>
        </div>
        </div>
    )
    }
}

export default Contact
