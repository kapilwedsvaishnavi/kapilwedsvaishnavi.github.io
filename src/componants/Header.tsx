import Navbar from '../ui/Navbar'
import marigold from '../assets/marigold-transparent.png';
import PulsingImage from '../ui/PulsingImage';

export default function Header() {
  return (
    <section className='header_section'>
        <Navbar />
        <div className='w-full h-screen flex place-items-center justify-center flex-col'>
             <h1 className="text-md lg:text-7xl font-serif text-center text-black playwrite-au-tas-wedding">Save The Date</h1>
             <h5 className="text-md lg:text-3xl font-serif text-center text-black mt-4 playwrite-au-tas-wedding">We are getting married on March 14, 2026</h5>
             <PulsingImage src={marigold} alt="Marigold Flower" size={250}/>
        </div>
    </section>
  )
}