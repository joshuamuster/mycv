import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import background from './images/og-paper-background.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${background})` }}>
        
        <Container>
        <Row className='mb-5'>
          <Col>
            <p className='textually-titular'>Eventually this will be an interactive CV, just for fun.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>I don't have any major plans for the site, but I mean, when you see your name is available, you gotta swoop on it, right?</p>
            <p>So here's an embed of my CV on Figma, and I'll gussy up the page soon.</p>
            <p>Or a link, if that works better for you.</p>
            <p><a href='https://www.figma.com/proto/uZsyGlBBoL0EGW9TDDCUxd/My-CV-at-joshuamuster.com?page-id=0%3A1&node-id=1%3A462&viewport=733%2C518%2C0.9&scaling=min-zoom' target='_blank' rel='noreferrer'>Joshua Muster's CV</a></p>
          </Col>
          <Col>
            <iframe title='Figma CV' className='figmaEmbed' width='842' height='600' src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FuZsyGlBBoL0EGW9TDDCUxd%2FMy-CV-at-joshuamuster.com%3Fpage-id%3D0%253A1%26node-id%3D1%253A462%26viewport%3D733%252C518%252C0.9%26scaling%3Dmin-zoom&hide-ui=1' allowfullscreen='true' frameborder="0" ></iframe>
          </Col>
        </Row>
      </Container>

        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
