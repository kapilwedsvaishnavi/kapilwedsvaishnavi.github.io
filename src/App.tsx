import Header from './componants/Header';
import CountdownTimer from './componants/CountdownTimer';
import Couple from './componants/Couple';
import OurStory from './componants/OurStory';
import Rsvp from './componants/Rsvp';
import Event from './componants/Event';
import Footer from './componants/Footer';

function App() {
  
  return (
    <main className="App">
      <Header />
      <CountdownTimer/>
      <Couple />
      <OurStory />
      <Rsvp />
      <Event />
      <Footer />
    </main>
  )
}

export default App
