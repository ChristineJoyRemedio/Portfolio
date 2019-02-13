import React, { Component } from 'react';
import './App.css';
import{Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Oxygen'}} to="/">Christine Joy Remedio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Oxygen', fontSize: '16px', paddingRight: '1em'}} to="/">Christine Joy Remedio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
