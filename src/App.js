import './App.css';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GuessGamePage from './pages/GuessGamePage';
import SliderPage from './pages/Slider';

function App() {
  return (
    <div className="App">
      <Router>
            <NavigationBar></NavigationBar>
            <Switch>
              <Route path="/GuessGamePage" component={GuessGame}></Route>
              <Route path="/SliderPage" component={Slider}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
        </Router>
    </div>
  );
}

const Home=()=>{
  return <div className="App-header">
</div>;
}

const GuessGame = ()=>{
  return <div>
    <GuessGamePage></GuessGamePage>
  </div>;
}

const Slider=()=>{
  return <div>
    <SliderPage></SliderPage>
</div>;
}

export default App;