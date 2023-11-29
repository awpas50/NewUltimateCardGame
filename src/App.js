import './App.css';
import CardGrid from './components/CardGrid.js';
import PlayerCardArea from './components/PlayerCardArea.js';
import ICard from './components/ICard.js';
import Dot from './components/Dot.js';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <CardGrid />

        <PlayerCardArea/>
        
        <ICard x={355} y={86} imageSrc={require('./img/W001.png')}/>
        <ICard x={355} y={310} imageSrc={require('./img/W002.png')}/>

        <ICard x={250} y={460} imageSrc={require('./img/I001.png')}/>
        <ICard x={275} y={460} imageSrc={require('./img/I002.png')}/>
        <ICard x={300} y={460} imageSrc={require('./img/I003.png')}/>
        <ICard x={325} y={460} imageSrc={require('./img/I004.png')}/>
        <ICard x={350} y={460} imageSrc={require('./img/I005.png')}/>
        <ICard x={375} y={460} imageSrc={require('./img/I006.png')}/>
        <ICard x={400} y={460} imageSrc={require('./img/I007.png')}/>

      </div>
    </div>
  );
}

export default App;
