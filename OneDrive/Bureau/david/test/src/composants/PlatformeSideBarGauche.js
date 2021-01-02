import React,{Component} from 'react';

import cafe from './images/cafe.jpg';

class PlatformeSideBarGauche extends Component
{
    render(){
        return (
            <div className="col-lg-6">
            <div className="divImageDroite">
                <img src={cafe} className="img_droite_enrol2" alt="img1"/>
            </div>
        </div>
        )
    }
}

export default PlatformeSideBarGauche