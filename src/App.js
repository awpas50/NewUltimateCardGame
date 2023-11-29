import './App.css';
import CardGrid from './components/CardGrid.js';
import PlayerCardArea from './components/PlayerCardArea.js';
import ICard from './components/ICard.js';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <CardGrid />
        <PlayerCardArea/>
        <ICard/>
      </div>
    </div>
  );
}

export default App;
