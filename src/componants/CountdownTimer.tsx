import Countdown from 'react-countdown';
import TimerFrame from '../ui/TimerFrame';

function CountdownTimer() {

    const renderer = ({days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a completed state
    return <h1>Congratulations</h1>;
  } else {
    // Render a countdown
    return <div className='grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-2 lg:grid-cols-4 lg:gap-20'>
      <TimerFrame heading={`${days}`} subheading="Days" />
      <TimerFrame heading={`${hours}`} subheading="Hours" />
      <TimerFrame heading={`${minutes}`} subheading="Minutes" />
      <TimerFrame heading={`${seconds}`} subheading="Seconds" />
    </div>
    ;
  }
};

  return (
    <section className='countdown_section w-full flex place-items-center justify-center flex-col' id='countdown'><Countdown date={'2026-03-14T07:00:00'} renderer={renderer} /></section> 
  )
}

export default CountdownTimer
