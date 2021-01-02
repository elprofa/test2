import React, {Component} from 'react';
import Subject from './Subject';
class Reache extends Component
{
    render(){
        return (
            <div className="row" id="divCategoryWise">
                <div className="col-lg-4" id="colCategoryWise">
                    <h1 className="h2CategoryWise">Browse courses categorywise</h1>
                    <p> Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Labore exercitationem esse. </p>
                </div>
                <div className="row">
                    <Subject />
                </div>
            </div>
        )
    }
}

export default Reache