import React, {Component}from 'react';
import {Grid, Cell, List} from 'react-mdl';

class Knowledge extends Component {

  render(){
    return(
      <Grid>

        <Cell style={{paddingLeft: '0em'}} col={12}>
          <List style={{fontColor: 'white', fontSize: '14px', fontFamily: 'Oxygen', paddingLeft:'1em'}}>
          {this.props.knowlist1}</List>
          <List style={{fontColor: 'white', fontSize: '14px', fontFamily: 'Oxygen', paddingLeft:'1em'}}>
          {this.props.knowlist2}</List>
          <List style={{fontColor: 'white', fontSize: '14px', fontFamily: 'Oxygen', paddingLeft:'1em'}}>
          {this.props.knowlist3}</List>
          <List style={{fontColor: 'white', fontSize: '14px', fontFamily: 'Oxygen', paddingLeft:'1em'}}>
          {this.props.knowlist4}</List>


        </Cell>
      </Grid>
    )
  }
}

export default Knowledge;
