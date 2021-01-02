import React, {Component} from 'react';
import Courses from './Courses';

class CategoryWise extends Component
{
    render () {
        return (
            <div className="row" id="divCategoryWise">
                <div className="col-lg-4" id="colCategoryWise">
                    <h1 className="h2CategoryWise">Browse courses categorywise</h1>
                    <p> Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Labore exercitationem esse. </p>
                </div>
                <Courses />
            </div>
        )
    }
}

export default CategoryWise