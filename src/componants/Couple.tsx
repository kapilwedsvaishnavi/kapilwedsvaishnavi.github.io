import CircularRotatingFrame from "../ui/CircularRotatingFrame"
import Couple_Circle_Img from "../assets/couple-circle-img.jpeg"
import Circular_Frame from "../assets/circular-frame.png"
import CoupleDetailsCard from "../ui/CoupleDetailsCard"
import { strings } from '../helper/strings'

const Couple = () => {
    const coupleDetails = strings.coupleDetails
    return (
        <section className="couple_section" id="couple">
            <div className="w-full flex flex-col-1 lg:flex-row flex-wrap justify-center items-center">
                <CoupleDetailsCard name={coupleDetails.kapil_name} details={coupleDetails.kapil_details} />
                <CircularRotatingFrame frameSrc={Circular_Frame} imageSrc={Couple_Circle_Img}/>
                <CoupleDetailsCard name={coupleDetails.vaishnavi_name} details={coupleDetails.vaishnavi_details} />
            </div>
        </section>
    )
}

export default Couple