import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component{

  render(){
    return(
      <Grid>
        <Cell col={2}>
          <div style={{display: 'flex', paddingLeft: '2em'}}>{this.props.skill}</div>
        </Cell>
        <Cell col={10}>
          <div style={{display: 'flex', paddingLeft: '2em'}}><ProgressBar style={{margin:'auto', paddingLeft: '3em' ,width: '75%'}} progress={this.props.progress}/></div>
        </Cell>
      </Grid>

    )
  }
}

export default Skills;
