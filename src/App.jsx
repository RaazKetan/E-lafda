import { useState } from 'react';
import ElafdaList from './ElafdaList';

function App() {
 const [showElafda, setShowElafda] = useState(false);

 const handleButtonClick = () => {
    setShowElafda(true);
    const music = document.getElementById('backgroundMusic');
    music.play();
 };

 return (
    <div className="App" style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>E-Lafda App</h1>
      <button onClick={handleButtonClick} style={{ display: 'block', margin: '1em auto', padding: '10px 20px' }}>E-Lafda</button>
      {showElafda && <ElafdaList />}
      <audio id="backgroundMusic" src="/background-music.mp3" loop></audio>
    </div>
 );
}

export default App;
