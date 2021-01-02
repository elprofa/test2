import React, {Component} from 'react';

class Login extends Component
{
    render(){
        return(
            <div className="col-lg-3" id="div_login">
                <button className="btn btn-outline-success button_span_login" type="submit" >Log in</button>
                <button className="btn btn-outline-success button_span_login1" type="submit">Sign up</button>
            </div>
        )
    }
}
export default Login