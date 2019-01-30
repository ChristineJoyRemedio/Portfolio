import React, {Component} from 'react';
import {Grid, Cell,} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}>
            <img src={require('./img/myPic.png')}
                alt="avatar"
                className="resume-img"/>
            </div>
            <h2> Christine Joy C. Remedio </h2>
            <h4> Programmer </h4>
            <hr/>
            <p>A BSICT (Bachelor of Science in Information and Communications Technology) Graduate; Has been
            involved in many activities and gained variety of experiences; able to effectively coordinate tasks to
            accomplish projects with timeliness and creativity; conscientious self-starter; flexible and analytical; able
            to adapt to changing priorities and maintain a positive attitude and strong work ethic; participated in
            graphic design and Capstone competitions with awards and certificates; Eager to learn new things.</p>
          <hr/>
          <h5>Address</h5>
          <p>Hobson Heights 208, Hobson Street, Auckland</p>
          <h5>Phone</h5>
          <p>(+063)9222656223</p>
          <h5>Email</h5>
          <p>remediochristinejoy@gmail.com</p>
          <h5>LinkedIn</h5>
          <p>http://linkedin.com/in/christinejoyremedio/</p>
          <hr/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h3>Education</h3>
              <Education
                startYear={2013}
                endYear={2018}
                degreeCourse="Bachelor of Science in Information and Communications Technology"
                schoolName="University of San Carlos - Talamban Campus"
                schoolDescription="Nasipit, Talamban, Cebu, Philippines"
              />
              <hr/>
              <h3>Experiences</h3>
              <Experience
              startYear="May 2014"
              endYear="December 2014"
              position="Web Developer and Graphic Designer"
              companyName="Lavon Enterprise and Ventures"
              jobDescription="Design and Develop the business's own website and other advertising materials; Produce documents and other printings; Respond to any problems and issues"
              />
              <Experience
              startYear="June 2015"
              endYear="August 2015"
              position="Freelance-Videographer, Photographer, and Photo & Video Editor"
              companyName="Nixfilm"
              jobDescription="Coordinate with the team in capturing moments from clients as well as editing the captured products into client's desired results."
              />

              <Experience
              startYear="March 2018"
              endYear="January 2019"
              position="Online English Tutor"
              companyName="Bibo Global Opportunity, Inc."
              jobDescription="Helping students online to improve their listening, speaking and reading skills as well as checking and assessing students' work."
              />


              <Experience
              startYear="January 2016"
              endYear="August 2016"
              position="Radio Personality | News Writer | Data Gatherer"
              companyName="Y101FM"
              jobDescription="Prepare script for news broadcasting; gather data; entertain audiences; serve genres in music & radio, news, talks, and plug-ins/commercials."
              />

            <hr/>
            <h3>Skills</h3>

            <Skills
              skill="Photoshop"
              progress={90}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="JavaScript"
              progress={70}
            />
            <Skills
              skill="Illustrator"
              progress={50}
            />
            <Skills
              skill="React"
              progress={30}
            />
            <Skills
              skill="Node.JS"
              progress={20}
            />
            <Skills
              skill="CodeIgniter"
              progress={20}
            />
            <Skills
              skill="Java"
              progress={15}
            />
            <Skills
              skill="C"
              progress={10}
            />
            <Skills
              skill="PHP"
              progress={10}
            />
          </Cell>
        </Grid>
      </div>
    )
   }
  }

  export default Resume;
