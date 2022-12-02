import './App.css';
import AddEvent from './components/AddEvent';
import Eventos from './components/Eventos';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registro from './components/Registro';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
          <div className="Content">
            <Switch>
              <Route exact path="/">
                <Eventos></Eventos>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/registro">
                <Registro></Registro>
              </Route>
              <Route exact path="/addevent">
                <AddEvent></AddEvent>
              </Route>
            </Switch>
          </div>
          

       
      </div>
    </Router>
   
  );
}

export default App;
