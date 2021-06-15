import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Hunting from './components/pages/Hunting';
import Fishing from './components/pages/Fishing';
import Guns from './components/pages/Guns';

function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hunting' component={Hunting}/>
          <Route path='/fishing' component={Fishing}/>
          <Route path='/guns' component={Guns}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
