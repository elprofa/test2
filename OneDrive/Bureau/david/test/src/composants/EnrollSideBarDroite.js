import React , { Component } from 'react';

import cafe from './images/cafe.jpg';

class EnrollSideBarDroite extends Component
{
    render()
    {
        return (
            <div className="col-lg-6">
                <div className="divImageDroite">
                    <img src={cafe} className="img_droite_enroll" alt="img1"/>
                </div>
                <div className="contextDiv">
                    <ul>
                        <li>
                            <a href="#wedo.com"> <span className="fa fa-home"></span> Study center</a>
                        </li>
                        <li>
                            <a href="#wedo.com"> <span className="fa fa-pencil"></span> Ressources</a>
                        </li>
                        <li>
                            <a href="#wedo.com"> <span className="fa fa-money"></span> Certification</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default EnrollSideBarDroite