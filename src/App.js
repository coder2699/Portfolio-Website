import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CodingIds from './Components/CodingIds';
import Os from './Components/Os';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/Pranshu-Pandey-Portfolio" exact component={Home}/>
          <Route path="/" exact component={Home}/>
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/cp-profiles" component={CodingIds} />
          <Route path="/open-source" component={Os} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
