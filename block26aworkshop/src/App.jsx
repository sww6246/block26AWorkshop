import { useState } from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import SelectedPlayer from './components/SelectPlayer';

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  return (
    <>
      {selectedPlayerId ? (
        <SelectedPlayer 
          selectedPlayerId={selectedPlayerId}
          setSelectedPlayerId={setSelectedPlayerId}
        />
      ) : (
        <PlayerList setSelectedPlayerId={setSelectedPlayerId}/>
      )}
    </>
  );
}

export default App;
