import React, {Component} from 'react';

class Subject extends Component
{
    render () {
        return (
            <div className="row" id="rowCourses">
                <div className="col-lg-4">
                    <div className="card" id="card1">
                        <div className="card-body">
                            <span className="" id="spanSatisfaction1">1</span>
                            <h5 className="card-title" id="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" id="card1">
                        <div className="card-body">
                            <span className="" id="spanSatisfaction1">2</span>
                            <h5 className="card-title" id="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" id="card1">
                        <div className="card-body">
                            <span className="" id="spanSatisfaction1">3</span>
                            <h5 className="card-title" id="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subject