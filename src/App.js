import './style.css';
import imageInSrc from './imageInSrc.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Farouk Allani</h1>
          <br />
          <img src={imageInSrc} alt="inSrc" width={420} height={240} />
          <br />
          <> 
          <img src='/images/imageInPublic.jpg' alt='public'  width={420} height={240} /> 
          </>
        </div>
        <video width={320} height={240} controls>
          <source src="/myVideo.mp4" type="video/mp4" autoPlay loop />
        </video>
      </div>
      </header>
    </div>
  );
}

export default App;
