import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StoryCard from './StoryCard';
import StoryPhotoCard from './StoryPhotoCard';
import type React from 'react';
import { strings } from '../helper/strings';

interface TimelineItemProps {
    image: string;
    floater: string;
    floaterSide?: string;
    date: string;
    header: string;
    detail: string;
}

export default function StoryTimeline() {

    const timelineItems = strings.timelineItems;

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
