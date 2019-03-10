import React, {Component}from 'react';
import {Grid, Cell} from 'react-mdl';

class References extends Component {

  render(){
    return(
      <Grid >
        <Cell  style={{marginTop:'0px',paddingLeft: '3em'}} col={4}>
            <h6>{this.props.employer}</h6>
        </Cell>
        <Cell col={8}>
          <p style={{marginTop:'2px'}} >{this.props.position}</p>
          <p style={{marginTop:'0px'}} >{this.props.companyName}</p>
          <p style={{marginTop:'0px', color: '#a8a7a6'}} >{this.props.address}</p>
          <p>Contact Details:</p>
          <p style={{marginTop:'0px', color: '#a8a7a6'}} >{this.props.number}</p>
          <p style={{marginTop:'0px', color: '#a8a7a6'}} >{this.props.email}</p>
      </Cell>

    </Grid>
  )
  }
}

export default References;
