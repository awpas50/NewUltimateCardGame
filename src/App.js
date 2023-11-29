import './App.css';
import CardGrid from './components/CardGrid.js';
import PlayerCardArea from './components/PlayerCardArea.js';
import ICard from './components/ICard.js';
import Dot from './components/Dot.js';
import FullscreenButton from './components/FullscreenButton';
import ScoresHeader from './components/ScoresHeader';

function App() {

  return (
    <div className="App">
      <div className='App-header'>
        <ScoresHeader/>
        <FullscreenButton />
        <CardGrid />
        <PlayerCardArea/>
        
        <ICard x={355 - 286} y={86 + 21} imageSrc={require('./img/W001.png')}/>
        <ICard x={355 - 286} y={310 + 21} imageSrc={require('./img/W002.png')}/>

        <ICard x={250 - 240} y={460 + 21} imageSrc={require('./img/I001.png')}/>
        <ICard x={275 - 240} y={460 + 21} imageSrc={require('./img/I002.png')}/>
        <ICard x={300 - 240} y={460 + 21} imageSrc={require('./img/I003.png')}/>
        <ICard x={325 - 240} y={460 + 21} imageSrc={require('./img/I004.png')}/>
        <ICard x={350 - 240} y={460 + 21} imageSrc={require('./img/I005.png')}/>
        <ICard x={375 - 240} y={460 + 21} imageSrc={require('./img/I006.png')}/>
        <ICard x={400 - 240} y={460 + 21} imageSrc={require('./img/I007.png')}/>
        </div>
      </div>
    );
  }

export default App;
