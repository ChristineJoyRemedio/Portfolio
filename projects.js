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
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
            House Keeper's Log Book</CardTitle>
            <CardText>House Keeper's Log Book: Records Date & Time Working, and Summation of Salary.
            </CardText>
            <CardActions border>
            <Button colored> Github  </Button>
            </CardActions>
          </Card>
        </div>
        )
      }else {
        return (
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
            CodeIgniter Project #1</CardTitle>
            <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </CardText>
            <CardActions border>
            <Button colored> Youtube  </Button>
            </CardActions>
          </Card>
        )
      }
    }

    render(){
      return(
        <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>CodeIgniter</Tab>
          </Tabs>

          <section className="projects-grid">
            <Grid className="projects-grid">
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
