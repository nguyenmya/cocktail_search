import logo from './logo.svg';
import './App.css';
import CocKTail from './container/CockTaik/CocKTail';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cau1 from './components/Cau1/Cau1';
import Cau2 from './components/Cau2/Cau2';
import Cau3 from './components/Cau3/Cau3';

function App() {
  return (
    // <div className="App">
    //   <CocKTail/>

    // </div>


    <Router>
      <Switch>
        <Route exact path ="/" component={CocKTail}/>
        <Route exact path ="/Cau1" component={Cau1}/>
        <Route exact path ="/Cau2" component={Cau2}/>
        <Route exact path ="/Cau3" component={Cau3}/>

      </Switch>
    </Router>
  );
}

export default App;
