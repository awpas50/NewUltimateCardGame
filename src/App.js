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
        <ICard x={380} y={460} showICard={true}/>
        <ICard x={400} y={460} showICard={true}/>

      </div>
    </div>
  );
}

export default App;
