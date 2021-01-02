import React,{Component} from 'react';
import EnrollSideBarGauche from './EnrollSideBarGauche';
import EnrollSideBarDroite from './EnrollSideBarDroite';
class Enroll extends Component
{
    render (){
        return (
            <div className="row" id="div_enroll">
                <EnrollSideBarGauche />
                <EnrollSideBarDroite />
            </div>
        )
    }
}

export default Enroll