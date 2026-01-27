
import './App.css'
import Countdown from 'react-countdown';

function App() {

  const renderer = ({days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a completed state
    return <h1>Congratulations</h1>;
  } else {
    // Render a countdown
    return <p className='playwrite-au-tas-wedding'>{days} Days {hours} Hours {minutes} Min {seconds} Sec</p>;
  }
};
  
  return (
    <div style={{height: '80vh'}}>
      <h1 className="playwrite-au-tas-wedding">Kapil Weds Vaishnavi</h1>
      <Countdown date={'2026-03-14T07:00:00'} renderer={renderer} />
    </div>
  )
}

export default App
