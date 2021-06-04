import logo from './logo.svg';
import './Assets/Css/style.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import DetailOutlet from './Pages/DetailOutlet';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Homepage}/>
        <Route path="/DetailOutlet/:id" component={DetailOutlet}/>
      </Router>
    </>
  );
}

export default App;
