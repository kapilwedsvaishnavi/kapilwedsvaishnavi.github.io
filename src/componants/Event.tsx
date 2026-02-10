import EventCard from "../ui/EventCard"

const EventDetails = [
    {
    heading: 'The Engagement',
    date: 'Saturday, 14 March. 2026',
    time: '8.30.00 Am to 9.30 Am',
    address: 'Shree Haripriya Sabhagruha, Datar Farms, Sinhgad Rd, behind Navshya Maruti Mandir Lane, Sarita Vihar Phase 2, Dattawadi, Pune, Maharashtra 411030',
    location: 'https://maps.app.goo.gl/En3jUJW2ivB9ZBW28'
    },
    {
    heading: 'The Wedding',
    date: 'Saturday, 14 March. 2026',
    time: '12.40 PM',
    address: 'Shree Haripriya Sabhagruha, Datar Farms, Sinhgad Rd, behind Navshya Maruti Mandir Lane, Sarita Vihar Phase 2, Dattawadi, Pune, Maharashtra 411030',
    location: 'https://maps.app.goo.gl/En3jUJW2ivB9ZBW28'
    },
    {
    heading: 'The Reception',
    date: 'Monday, 16 March 2026',
    time: '7.00 Pm to 10 Pm',
    address: 'Mali Lawans, Shri Ram Housing Society, Bhusawal, Maharashtra 425201',
    location: 'https://maps.app.goo.gl/i9NgoEnpW9Hw8J9E6'
    },
]

const Event = () => {
    return (
        <section id="events" className="event_section">
            <div className="w-full h-auto lg:h-screen flex flex-col justify-center items-center p-5">
                <div>
                    <h1 className="text-2xl text-center text-green-600 austine-font">Our Wedding</h1>
                </div>
                <div>
                    <h1 className="lg:text-5xl text-3xl text-center mt-4 px-4 text-gray-800 playwrite-au-tas-wedding font-bold">
                        When & Where<br /><br />
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