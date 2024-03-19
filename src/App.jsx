import React from 'react';
import MediaPlayer from './components/MediaPlayer'; // Asegúrate de
function App() {
  return (
    <>
    <div className="App">
      <h2 className="text-center text-2xl font-bold my-4">Reproductor
        Multimedia con React y Tailwind</h2>
      <MediaPlayer type="video" src="../src/media/SinCopi.mp4" />
      <MediaPlayer type="audio" src="../src/media/SinCopi.mp3" />
    </div>
    </>
    
  );
}
export default App;