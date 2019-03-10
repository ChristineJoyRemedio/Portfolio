import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from "react-mdl";

class Project extends Component {
  constructor(props)
    {
      super(props);
      this.state = { activeTab:0};
    }
    toggleCategories(){

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <div style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}}>
            <CardTitle class="wrapper" style={{color:'white', backgroundColor: 'rgba(52, 52, 52, 0.8)', width: '100%', padding: '1px'}} align="center"> <h5 class="effect-box">BeautyBFF</h5> </CardTitle></div>
            <CardText>Makeup Guide, Reviews, Tips, Tutorials, Vlogs and Blogs Collections
            </CardText>
            <CardActions border>
            <Button colored onClick={()=> window.open("https://github.com/ChristineJoyRemedio/BeautyBFF", "_blank")}> BeautyBFF - Github  </Button>
            </CardActions>
          </Card>
        </div>
        )
      }if(this.state.activeTab === 1){
        return (
          <div  className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <div style={{height: '180px', background: 'url(https://i.ytimg.com/vi/n6ocFV5AKSI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAZc7t-ALAg9BAUBnNoxhl7FGLSCQ) center / cover'}}>
            <CardTitle class="wrapper2" style={{color:'white', backgroundColor: 'rgba(52, 52, 52, 0.8)', width: '100%', marginTop: '0px', padding: '0px'}} align="center"> <h5 class="effect-box">Web Based Property Management System</h5> </CardTitle>

            </div>

            <CardText> This  system  aims  to  develop  an  efficient  web-based  property management system specifically Pueblo el Grande Subdivision.
            </CardText>
            <CardActions border>
            <Button colored onClick={()=> window.open("https://www.youtube.com/watch?v=n6ocFV5AKSI", "_blank")}> Youtube  </Button>
              <Button colored onClick={()=> window.open("https://github.com/ChristineJoyRemedio/Web-Based-Property-Management-System/", "_blank")}> Github  </Button>
            </CardActions>



          </Card>

          </div>
        )
      }else{
        return (
          <div  className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <div style={{height: '180px', background: 'url(https://lh3.googleusercontent.com/TeOf8A94jPm7SsLgm1gjL2Q8RzzLlrasIwG9FmHOJtVlf0ZvFxqZG4nhSPtHm7C3fm1PdLNdassIcq5IEUEGc0fH45IypX23bKH1kYbCU4d17nszDAxoR3rFtfMsdTk7MQMEKxGQzhzj95wywaeeVGGBSm7AviUT4E1rcoSfmk25plAPWa13LGoFLcZOUr_-5Hhn3B6vj-ai4SeVELV6uBmydwloVmmqhqwS7JQG4IHdPtEM3Qq13gsHoUkuJMuPLfWks9bNj0d6JTFzFOgDZv9Y_yQl4OMCra8mSKarVQx-xmL4RG_lZlIGHfCU7DqUNZZXgo-1h-qAe_LgcUnIYLcgzgEDgcvjW5yZh1-qcNrYFRvsrH-8jbJNnNVaq2n-JxWhNJnduvKopwodqtoC_ozXVTEOfgvZenmWjXvovaE-NanvEo98inNRiem90QxRj_Fd_KvXWKYDfR8eDkMGR3gYo1mXlZeSg_-DYVqp0nBO2SIl9mbRr7xJN_853kWNme7dvm8yX_x0m00EQ0XKsJKRc-w4DIusULEJMv8jEofzq6gJw4O56Y_CB_SQfNyN7m44-5uiQumzZqa4tvPuthYcEe_SmQI8asdw01D-UuOcY_f7f1iYZnw1ZrlYRtXFdn90uMsG5mjd42Jb6LL2beKQrnerWUA=w1344-h635-no) center / cover'}}>
            <CardTitle class="wrapper3" style={{color:'white', backgroundColor: 'rgba(52, 52, 52, 0.8)', width: '100%', marginTop: '0px', padding: '0px'}} align="center"> <h5 class="effect-box">Stepping Stone</h5> </CardTitle>

            </div>

            <CardText> Is an interactive web application system for kids preferrably from ages 1-8 years old, with Games and Learning activities on Shapes, Colors, Numbers and MORE.
            </CardText>
            <CardActions border>
            <Button colored onClick={()=> window.open("https://https://github.com/ChristineJoyRemedio/SteppingStone-WebApp", "_blank")}> Github  </Button>
            </CardActions>
          </Card>

          </div>
        )
      }
    }

    render(){
      return(
        <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>CodeIgniter</Tab>
            <Tab>HTML Native</Tab>
          </Tabs>

          <section>
            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
          </section>

        </div>
        )
      }
    }

  export default Project;
