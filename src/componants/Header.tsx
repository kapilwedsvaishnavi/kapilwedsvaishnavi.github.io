import Navbar from '../ui/Navbar';
import marigold from '../assets/marigold-transparent.png';
import PulsingImage from '../ui/PulsingImage';
import PolaroidCard from '../ui/PolaroidCard';
//import Vaishnavi_Hero from '../assets/vaishnavi-hero-image.jpeg';
import Vaishnavi_Hero_v2 from '../assets/vaishnavi-hero-image-v2.jpeg'
//import Kapil_Hero from '../assets/kapil-hero-image.jpeg';
import Kapil_Hero_V2 from '../assets/kapil-hero-image-v2.jpeg'
import PolaroidParent from '../ui/PoloroidParent';
import * as motion from "motion/react-client"

export default function Header() {


  return (
    <section className="header_section" id='header'>
      <Navbar />

      <div className="w-full h-auto lg:h-screen flex flex-col place-items-center justify-center relative">

        <div className='lg:hidden my-15'>
          <PolaroidCard name={'Vaishnavi Virkar'} imageUrl={Vaishnavi_Hero_v2}/>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="text-md lg:text-7xl font-serif text-center text-black playwrite-au-tas-wedding font-weight-bold">
            Save The Date
          </h1>

          <h5 className="text-md lg:text-3xl font-serif text-center text-black mt-4 playwrite-au-tas-wedding">
            We are getting married on March 14, 2026
          </h5>
        </motion.div>

        <PulsingImage src={marigold} alt="Marigold Flower" size={250} />

        <div className='lg:hidden mb-10'>
          <PolaroidCard name={'Kapil Khursade'} imageUrl={Kapil_Hero_V2}/>
        </div>

        {/* NEW: Parallax Polaroid Layer */}
        <PolaroidParent>
          <PolaroidCard name={'Vaishnavi Virkar'} imageUrl={Vaishnavi_Hero_v2} rotation='-rotate-8'/>
          <PolaroidCard name={'Kapil Khursade'} imageUrl={Kapil_Hero_V2} rotation='rotate-8'/>
        </PolaroidParent>

      </div>
    </section>
  );
}
