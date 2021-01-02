import React, {Component} from 'react';
import logo from './logo.png';

class Footer extends Component
{
    render () {
        return (
            <div className="row" id="rowCourses">
                <div className="col-lg-4">
                    <div className="card" id="card2">
                        <div className="card-body">
                            <img src={logo} alt="logo"  className="logoApp"/>
                            <p className="card-text" id="logoDescription">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <span classNam="fa fa-facebook"></span>
                            <span classNam="fa fa-twitter"></span>
                            <span classNam="fafa-instagram"></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="card" id="card2">
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">Card title</h5>
                            <ul>
                                <li>
                                    <a href="#wedo.com">Study center</a>
                                </li>
                                <li>
                                    <a href="#wedo.com">Ressources</a>
                                </li>
                                <li>
                                    <a href="#wedo.com">Certification</a>
                                </li>
                                <li>
                                    <a href="#wedo.com">Certification</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="card" id="card2">
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">Card title</h5>
                            <ul>
                                <li>
                                    <a href="#wedo.com">Study center</a>
                                </li>
                                <li>
                                    <a href="#wedo.com">Ressources</a>
                                </li>
                                <li>
                                    <a href="#wedo.com">Certification</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="card" id="card2">
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">Card title</h5>
                            <ul>
                                <li>
                                    <a href="#wedo.com">Study center</a>
                                </li>
                                <li>
                                    <a href="#wedo.com">Ressources</a>
                                </li>
                                <li>
                                    <a href="#wedo.com">Certification</a>
                                </li>
                                <li>
                                    <a href="#wedo.com">Certification</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="card" id="card2">
                        <div className="card-body">
                            <h5 className="card-title" id="card-title">Card title</h5>
                            <input type="text" className="form-control" />
                            <button className="btn" id="btn_send">Send</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Footer