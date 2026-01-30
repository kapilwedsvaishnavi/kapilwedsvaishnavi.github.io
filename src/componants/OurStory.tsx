import StoryTimeline from '../ui/StoryTimeline';

const OurStory = () => {
    return (
        <section className="ourstory_section" id='story'>
            <div className="w-full flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-2xl text-center text-green-600 austine-font">Our Story</h1>
                </div>
                <div>
                    <h1 className="lg:text-5xl text-3xl text-center mt-4 px-4 text-gray-800 playwrite-au-tas-wedding font-bold">
                        How it all began...<br /><br />
                    </h1>
                </div>
                <StoryTimeline />
            </div>
        </section>
    )
}

export default OurStory