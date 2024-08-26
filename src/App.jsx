import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title='Easy' targerTime={1} />
        <TimerChallange title='Not Easy' targerTime={5} />
        <TimerChallange title='Hard' targerTime={10} />
        <TimerChallange title='Pros only' targerTime={15} />
      </div>
    </>
  );
}

export default App;
