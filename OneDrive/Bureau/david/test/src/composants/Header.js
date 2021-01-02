import React,{Component} from 'react';
import Menu from './Menu';
import Login from './Login';
import logo from './logo.png';

class Header extends Component
{
    render(){
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <img src={logo} alt="logo"  className="logoApp"/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="row" id="row_principal">
                                <div className="col-lg-3"></div>
                                <div className="col-lg-6">
                                    <Menu/>
                                </div>
                                <Login />
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header