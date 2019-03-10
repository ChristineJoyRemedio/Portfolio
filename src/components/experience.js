import React, {Component}from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {

  render(){
    return(
      <Grid >
        <Cell  style={{paddingLeft: '3em'}} col={4}>
            <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h5 style={{marginTop:'0px'}} >{this.props.position}</h5>
          <h6 style={{marginTop:'0px'}} >{this.props.companyName}</h6>
          <p>Job Description:</p>
          <p style={{marginTop:'0px', color: '#a8a7a6'}} >{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
