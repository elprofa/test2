import React, {Component} from 'react';
import cafe from './images/cafe.jpg';

class Attend extends Component
{
    render () {
        return (
            <div className="row" id="div_enrol2">
                 <div className="col-lg-6">
                    <div className="divImageDroite">
                        <img src={cafe} className="img_droite_enrol2" alt="img1"/>
                    </div>
                </div>
                <div className="col-lg-6" id="div_enroll_gauche">
                    <p className="badge">#N°1 Platform for learning</p>
                    <h1 className="h1EnrollGauche">Attend every class whetever you are staying in</h1>
                    <p className="pEnrollGauche">
                    Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Labore exercitationem esse
                    repudiandae rerum, obcaecati quod aliquam commodi odit sint illum optio ea id at dignissimos, 
                    itaque tenetur, culpa velit veritatis. 
                    </p>
                    <button className="btn btn-outline-success button_span_login1" id="button_span_login1_2" type="submit">Explore online class</button>
                </div>
            </div>
        )
    }
}

export default Attend