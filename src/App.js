import './App.css';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GuessGamePage from './pages/GuessGamePage';
import SliderPage from './pages/Slider';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Game1Page from './pages/Game1Page';

function App() {
  return (
    <div className="App">
      <Router>
            <NavigationBar></NavigationBar>
            <Switch>
              <Route path="/GuessGamePage" component={GuessGame}></Route>
              <Route path="/SliderPage" component={Slider}></Route>
              <Route path="/Game1Page" component={Game1}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
            <Footer></Footer>
        </Router>
    </div>
  );
}

const Home=()=>{
  return <div>
    <HomePage></HomePage>
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

const Game1=()=>{
  return <div>
    <Game1Page></Game1Page>
  </div>;
}

export default App;