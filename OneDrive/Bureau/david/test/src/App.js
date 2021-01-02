import React,{Component} from 'react';
import Header from './composants/Header';
import Enroll from './composants/Enroll';
import Satisfaction from './composants/Satisfaction';
import Platforme from './composants/Platforme';
import CategoryWise from './composants/CategoryWise';
import Attend from './composants/Attend';
import Reache from './composants/Reache';
import Footer from './composants/Footer';
import './App.css';

class App extends Component
{
  render(){
    return (
      <div className="App">
        <div className="container">
          <Header/> 
          <Enroll/>
          <Satisfaction />
          <Platforme />
          <CategoryWise />
          <Attend />
          <Reache />
          <Footer />
        </div>
        <div className="col-lg-12" id="lastDivFooter">
            <p id="pFooter">
                Made with <span class="fa fa-heart"></span> by elprofa
            </p>
        </div>
      </div>
    );
  }
}

export default App;
