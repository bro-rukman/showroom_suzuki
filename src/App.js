import logo from './logo.svg';
import './Assets/Css/style.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import DetailOutlet from './Pages/DetailOutlet';
import DetailMobil from './Pages/DetailMobil';
import CarouselItem from './Components/Carousel/CarouselItem';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Homepage}/>
        <Route path="/DetailOutlet/:id" component={DetailOutlet}/>
        <Route path="/DetailMobil/:id" component={DetailMobil}/>
        <Route path="/carousel" component={CarouselItem}/>
      </Router>
    </>
  );
}

export default App;
