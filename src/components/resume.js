import React, {Component} from 'react';
import {Grid, Cell,} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Knowledge from './knowledge';
import References from './references';

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
          <p>532/72 Nelson Street, Auckland, New Zealand</p>
          <h5>Phone</h5>
          <p>(+064) 0223633935</p>
          <h5>Email</h5>
          <p>remediochristinejoy@gmail.com</p>
          <h5>LinkedIn</h5>
          <p>http://linkedin.com/in/christinejoyremedio/</p>
          <h5>Github</h5>
          <p>https://github.com/ChristineJoyRemedio</p>
          <hr/>
          <h3>Skills</h3>

          <Skills
            skill="Communication"
            progress={90}
          />
          <Skills
            skill="Computer"
            progress={80}
          />
          <Skills
            skill="Teaching"
            progress={80}
          />
          <Skills
            skill="Creative"
            progress={90}
          />
          <Skills
            skill="Media"
            progress={80}
          />
          <hr/>
          <h3>Experiences</h3>
          <Skills
            skill="Front End"
            progress={60}
          />
          <Skills
            skill="Web Development"
            progress={60}
          />
          <Skills
            skill="Web Design"
            progress={60}
          />
          <Skills
            skill="Graphic Design"
            progress={80}
          />
          <Skills
            skill="Teacher/Tutor"
            progress={80}
          />
          <Skills
            skill="DJ/Radio Personality"
            progress={45}
          />
          <Skills
            skill="VJ/Video Host"
            progress={45}
          />
          <Skills
            skill="Data Gatherer"
            progress={45}
          />
          <Skills
            skill="News Writer"
            progress={30}
          />
          <Skills
            skill="Event Host"
            progress={80}
          />
          <Skills
            skill="Film Production"
            progress={45}
          />
          <Skills
            skill="Photo Editor"
            progress={70}
          />
          <Skills
            skill="Photographer"
            progress={60}
          />
          <Skills
            skill="Cinematographer"
            progress={60}
          />
          <Skills
            skill="Sales Representative"
            progress={60}
          />
          <hr/>
          <h3>Knowledge</h3>
          <Knowledge
            knowlist1="•	ReactJS, Node.js,  Java, C, SQL, PHP,  Visual Basic, Javascript, CSS, HTML, JQuery, and other JS Libraries & Frameworks"
            knowlist2="•	Win 7, Win 8, Win 10, Vista, XP and Windows 98"
            knowlist3="•	Microsoft Office"
            knowlist4="•	Adobe Photoshop, Illustrator, InDesign, Dreamweaver"
            />
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
              endYear="December 2016"
              position="Web Developer, Front-End and Graphic Designer"
              companyName="Lavon Enterprise and Ventures"
              jobDescription="Design and Develop the business's own website and other advertising materials; Produce documents and other printings; Respond to any problems and issues"
              />
              <Experience
              startYear="2015"
              endYear="2016"
              position="Freelance- Film Production: Photo Editor, Cinematographer & Photographer"
              companyName="Nixfilm"
              jobDescription="Coordinate with the team in capturing moments from clients as well as editing the captured products into client's desired results."
              />

              <Experience
              startYear="2014"
              endYear="2017"
              position="Freelance- Graphic Designer"
              companyName="Bibo Global Opportunity, Inc."
              jobDescription="Helping students online to improve their listening, speaking and reading skills as well as checking and assessing students' work."
              />

              <Experience
              startYear="March 2018"
              endYear="January 2019"
              position="Online English Tutor"
              companyName="Bibo Global Opportunity, Inc."
              jobDescription="Helping students online to improve their listening, speaking and reading skills as well as checking and assessing students' work."
              />


              <Experience
              startYear="2016"
              endYear="2017"
              position="Radio Personality | News Writer | Data Gatherer"
              companyName="Y101FM"
              jobDescription="Prepare script for news broadcasting; gather data; entertain audiences; serve genres in music & radio, news, talks, and plug-ins/commercials."
              />

              <Experience
              startYear="2016"
              endYear="2017"
              position="Freelance - VJ / Video Host"
              companyName="USC-TC"
              jobDescription="Announce, introduce and do live performances on camera(video recordings and live recordings)"
              />

              <Experience
              startYear="2015"
              endYear="2017"
              position="Freelance - Event Hosts"
              companyName="Bo's Coffee Anniversary, Estate Christmas Party, Charity Christmas Party"
              jobDescription="Act as a master of ceremonies at (an entertainment or large social occasion)."
              />

              <Experience
              startYear="2016"
              endYear="2017"
              position="Sales Representative & Distributor"
              companyName="USANA"
              jobDescription="Individual appointments and meetings on presenting Usana's highest quality vitamin/mineral supplements, and selling health products)."
              />

            <hr/>
            <h3>References</h3>
            <References
              employer="Kentaro Sakane"
              position="First Party - Representative"
              companyName="BIBO Global Opportunity, Inc."
              address="Lot 3, Unit 903 9/F FLB Corporate Center, Blk 2 Archbishop Reyes Ave, Cebu City, 6000 Cebu"
              number="0917 463 3493"
              email=""
            />
            <References
              employer="Mike Olitres"
              position="Manager"
              companyName="Y101FM"
              address="Gaisano Country Mall Bldg, 2nd/floor Camp Lapu-Lapu Rd, Cebu City"
              number="09177211080"
              email="y101mao@gmail.com"
            />
            <References
              employer="Rabe Briton"
              position="Instructor | Nixflim Team Head"
              companyName="Nixfilm"
              address=""
              number="09335011262"
              email="rabebriton@gmail.com"
            />
          </Cell>
        </Grid>
      </div>
    )
   }
  }

  export default Resume;
