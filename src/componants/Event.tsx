import EventCard from "../ui/EventCard"
import { strings } from '../helper/strings'

const Event = () => {
    const EventHeader = strings.eventHeader;
    const EventDetails = strings.eventDetails;

    return (
        <section id="events" className="event_section">
            <div className="w-full h-auto lg:h-screen flex flex-col justify-center items-center p-5">
                <div>
                    <h1 className="text-2xl text-center text-green-600 austine-font">{EventHeader.header}</h1>
                </div>
                <div>
                    <h1 className="lg:text-5xl text-3xl text-center mt-4 px-4 text-gray-800 playwrite-au-tas-wedding font-bold">
                        {EventHeader.subHeading}<br /><br />
                    </h1>
                </div>

                <div className="flex flex-wrap gap-5 justify-center items-center ">
                    {EventDetails.map((eventDetail) => <EventCard eventDetail={eventDetail} key={eventDetail.heading}/>)}
                </div>
            </div>
        </section>
    )
}

export default Event