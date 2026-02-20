import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StoryCard from './StoryCard';
import StoryPhotoCard from './StoryPhotoCard';

import Timeline_img_1 from '../assets/Timeline-img-1.png';
import Timeline_img_2 from '../assets/Timeline-img-2.png';
import Timeline_img_3 from '../assets/Timeline-img-3.png';

import Timeline_flower_1 from '../assets/timeline-flower-1.png';
import Timeline_flower_2 from '../assets/timeline-flower-2.png';
import Timeline_flower_3 from '../assets/timeline-flower-3.png';
import type React from 'react';

interface TimelineItemProps {
    image: string;
    floater: string;
    floaterSide?: string;
    date: string;
    header: string;
    detail: string;
}

const timelineItems: TimelineItemProps[] = [
    {
        image: Timeline_img_1,
        floater: Timeline_flower_1,
        floaterSide: 'right-50',
        date: "04 Feb, 2024",
        header: "💛How We Met",
        detail: `It started with a simple hello.
                What began as casual conversations slowly turned into something we both looked forward to every day.
                Without any big moment or drama, we simply found comfort in each other — and that’s how it all began.`
    },
    {
        image: Timeline_img_2,
        floater: Timeline_flower_2,
        floaterSide: 'left-50',
        date: "11 Oct, 2024",
        header: "💍The Decision",
        detail: `There wasn’t confusion.
                There wasn’t doubt.
                Just two hearts that knew this felt right.
                So we chose each other — not just for a moment, but for life`
    },
    {
        image: Timeline_img_3,
        floater: Timeline_flower_3,
        floaterSide: 'right-50',
        date: "20 Nov, 2025",
        header: "✨ It’s Now Official",
        detail: `With our families’ blessings and hearts full of excitement,
                we finally set the date.
                What started as “us” is now becoming “forever.”`
    }
];

export default function StoryTimeline() {

    const TimelineSeparatorComponent: React.FC<TimelineItemProps> = ({ image, floater, floaterSide, date, header, detail }) => (
        (
            <TimelineItem>
                <TimelineOppositeContent sx={{ width: '150px', py: '12px', px: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <StoryPhotoCard image={image} floater={floater} floterSide={floaterSide} direction='left'/>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <FavoriteBorderIcon fontSize='large' className='text-green-500 border-2 border-green-500 rounded-full text-md p-1' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ width: '750px', py: '12px', px: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <StoryCard date={date} header={header} detail={detail} direction='right'/>
                </TimelineContent>
            </TimelineItem>
        )
    );

    const TimelineEnd = () => (
        <TimelineSeparator>
            <TimelineConnector />
            <div className='text-green-500 border-4 w-6 h-6 border-green-500 rounded-full' />
            <TimelineConnector />
        </TimelineSeparator>

    )

    const timelineComponents = timelineItems.map((item, index) => (
        <TimelineSeparatorComponent key={index} {...item} />
    ));

    return (
        <>
            <div className='hidden lg:block'>
                <Timeline position="alternate">
                    <TimelineEnd />
                    {timelineComponents}
                    <TimelineEnd />
                </Timeline>
            </div>
            <div className='lg:hidden flex flex-col justify-center items-center justify-items-center'>
                {timelineItems.map((item, index) => (
                    <div key={index} className='md:w-[50%] mb-12 gap-5 flex flex-col justify-center items-center'>
                        <StoryPhotoCard image={item.image} floater={item.floater} direction='down'/>
                        <StoryCard date={item.date} header={item.header} detail={item.detail} direction='down'/>
                    </div>
                ))}
            </div>
        </>

    );
}
