import CircularRotatingFrame from "../ui/CircularRotatingFrame"
import Couple_Circle_Img from "../assets/couple-circle-img.jpeg"
import Circular_Frame from "../assets/circular-frame.png"
import CoupleDetailsCard from "../ui/CoupleDetailsCard"

const Couple = () => {
    return (
        <section className="couple_section" id="couple">
            <div className="w-full flex flex-col-1 lg:flex-row flex-wrap justify-center items-center">
                <CoupleDetailsCard name={"Vaishnavi Ketan Virkar"} details={"Daughter of Shubhdha & Ketan Virkar"} />
                <CircularRotatingFrame frameSrc={Circular_Frame} imageSrc={Couple_Circle_Img}/>
                <CoupleDetailsCard name={"Kapil Keshav Khursade"} details={"Son of Suvarna & Keshav Khursade"} />
            </div>
        </section>
    )
}

export default Couple