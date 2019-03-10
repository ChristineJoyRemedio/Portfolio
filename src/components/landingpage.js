import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';


class LandingPage extends Component {
  render(){
    return(

      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <div id="f1_container">
            <div id="f1_card" class="shadow">
            <div class="front face">
              <img src={require('./img/myImage.png')} alt="avatar"
                className="avatar-img "/>

            </div>
            <div class="back face center">
              <h3 style={{fontSize:'26px', fontFamily:'Raleway', letterSpacing:'2px'}}>Welcome to my Portfolio!</h3>
            </div>
            </div>
          </div>

            <div className="banner-text">

              <hr/>
              <p>HTML/CSS | Bootstrap | Javascript | React | NodeJS | CodeIgniter</p>
            <div className="social-links">
              {/*LinkedIn*/}
              <a href="http://linkedin.com/in/christinejoyremedio/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a>
              <p> remediochristinejoy@gmail.com </p>
              {/*GitHub*/}
              <a href="https://github.com/ChristineJoyRemedio" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"/>
              </a>
            </div>

            </div>



          </Cell>
        </Grid>
      </div>
    )
   }
  }

  export default LandingPage;
