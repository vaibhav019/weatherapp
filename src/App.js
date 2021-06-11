import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import Card from './components/Dnd';
import { Container, Row, Col } from 'reactstrap';
import Dnd from './components/Dnd';


function App() {
  return (
    <div className="App">
    <HeaderContainer />
    <Container>
    <Row>
    <Col>  <HomeContainer/> </Col>
    <Col></Col>
    <Col>  <Dnd/>   </Col>
    </Row>
    </Container>
  
    
    
    </div>
  );
}

export default App;
