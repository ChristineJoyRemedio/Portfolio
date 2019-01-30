import React, {Component} from 'react';
import {Grid,Cell,List,ListItem} from 'react-mdl';

class Education extends Component {
  render(){
    return(
    <Grid>
      <Cell style={{paddingLeft: '3em'}} col={4}>
        <p>{this.props.startYear} - {this.props.endYear}</p>
      </Cell>
      <Cell col={8}>
        <h5 style={{marginTop:'0px'}} >{this.props.degreeCourse}</h5>
        <h6 style={{marginTop:'0px'}} >{this.props.schoolName}</h6>
        <p style={{marginTop:'-20px'}} >{this.props.schoolDescription}</p>
        <List style={{fontColor: 'white', fontSize: '14px', fontFamily: 'Oxygen', paddingLeft:'1em'}}>
          Topics Covered:
          <ListItem style={{color:'#a8a7a6', fontSize:'12px'}}>ICT Fundamentals</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Introduction to Computer Science & Programming</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Advance Programming A&B</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Software Application</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Web Page Design</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Multimedia Basics w/ Image Processing</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Multimedia Production</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Lab Technician’s Course</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Database Systems I & II</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Data Communication & Networking</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Quality Assurance</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Network Management & Security</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Professional Ethics for ICT</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Web Application Development</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Capstone Proposal & Project</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>UX Design</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Web Technologies</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Human Computer Interaction / UI Design</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Introduction to Object Oriented Technology</ListItem>
          <ListItem style={{color:'#a8a7a6', fontSize:'12px', marginTop:'-30px'}}>Motion Graphics and Visual Effects</ListItem>
        </List>
      </Cell>
    </Grid>
    )
   }
  }

  export default Education;
