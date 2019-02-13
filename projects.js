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
            <div style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>
            <CardTitle class="wrapper" style={{color:'white', backgroundColor: 'rgba(52, 52, 52, 0.8)', width: '100%', padding: '1px'}} align="center"> <h5 class="effect-box">REACTJS Project #1</h5> </CardTitle></div>
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
            <div style={{height: '176px', background: 'url(https://lh3.googleusercontent.com/z5XQxdCN6oXpSzShmFPy7nEilc7Knt3g78KUopJHwlsmCOgZ2cfwzWRBSaWvPXvMq_Jh_hbEOo_K7ia9K0NYcIGOAhKj4SzLXCdu6mOj1JoEAAESiNtVv2sVbWUpqSDNQ5QvFaGLwpFAV82dcMKdOdhxXyz7HVa480jrgbWoFO-fnVgyDlcxHBK3mfn0kSABvu_X7mtKLF9tGoC_ny1kHTcfFK2QOBnSvCUwQVWWJiRkygpnRkosHHWLXi5Sy70phCyHRgr0BgV6vBimJv1lqGMT9ZlyaHuAlwV0H3-W0rJEUuNp7u7zGNy4_bW4PGKvR4tWLOXKh7VV4L_0i13m_r-Zrn-YOGEMiFNHtF08KabRk8rXJ6-yAVO9-lC13R-FOfcXkpESm3azh-4o4MjKt13m8aqWpvB-cX1setVeqfF5bTjPloRNaOe4bohc-8SGrLZnTCzm7IfNe2JMKeIR6HKtygbcEyu7z2ODrd-SjGxtjz8fU6WgV0l7_3gkheV9gycpXIRUMWkz1bfKetjP46O31wO_xJUnlj9Xxr2eodcCYRmtSu8ia9JEXKA-kb_IN04AwxCs8Ah9CRnE-RON992W5IePG0WMLvztfOs5b9QqA5ohdrVgsAJxFPeb7dndW5o4HlZYwQRYEZC8CRjzvgdd7bh_xg=w676-h328-no) center / cover'}}>
            <CardTitle class="wrapper" style={{color:'white', backgroundColor: 'rgba(52, 52, 52, 0.8)', width: '100%', marginTop: '10px', padding: '1px'}} align="center"> <h5 class="effect-box">CODEIGNITER Project #1</h5> </CardTitle>
            </div>

            <CardText>Web Based Property Management System.
            </CardText>
            <CardActions border>
            <Button colored onClick={()=> window.open("https://www.youtube.com/watch?v=n6ocFV5AKSI", "_blank")}> Youtube  </Button>
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
