import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
  render(){
    return(
      <div className="contact-body">\
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 >Christine Joy Remedio</h2>
              <img src={require('./img/myPic.png')}
                  alt="avatar"
                  className="contact-img"/>
                  <p>Address: Hobson Heights 208, Hobson Street, Auckland</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
              <hr/>
            <div className="contact-list" >
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'Oxygen'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>(+063) 9222656223</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '18px', fontFamily: 'Oxygen'}}>
                    <i className="fa fa-envelope-square" aria-hidden="true"/>remediochristinejoy@gmail.com</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '16px', fontFamily: 'Oxygen'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>linkedin.com/in/christinejoyremedio/</ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
   }
  }

  export default Contact;
