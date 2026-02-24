import StoryTimeline from '../ui/StoryTimeline';
import { strings } from '../helper/strings';

const OurStory = () => {
    const OurStoryHeader = strings.ourStoryHeader
    return (
        <section className="ourstory_section" id='story'>
            <div className="w-full flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-2xl text-center text-green-600 austine-font">{OurStoryHeader.heading}</h1>
                </div>
                <div>
                    <h1 className="lg:text-5xl text-3xl text-center mt-4 px-4 text-gray-800 playwrite-au-tas-wedding font-bold">
                        {OurStoryHeader.subHeading}<br /><br />
                    </h1>
                </div>
                <StoryTimeline />
            </div>
        </section>
    )
}

export default OurStory