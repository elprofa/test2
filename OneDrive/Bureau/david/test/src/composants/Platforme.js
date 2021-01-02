import React , {Component} from 'react';
import PlatformeSideBarDroite from './PlatformeSideBarDroite';
import PlatformeSideBarGauche from './PlatformeSideBarGauche';

class Platforme extends Component
{
    render(){
        return (
            <div className="row" id="div_enrol2">
                <PlatformeSideBarGauche />
                <PlatformeSideBarDroite />
            </div>
        )
    }
}

export default Platforme