import type React from "react";

interface TimerFrameProps {  
    heading: string;
    subheading: string;
}
const TimerFrame: React.FC<TimerFrameProps> = ({ heading, subheading }) => {  
    return (  <div className="lg:w-70 lg:h-70 w-40 h-40 timerframe flex flex-col place-items-center justify-center pl-6 lg:gap-5">
        <h2 className="text-green-600 text-5xl lg:text-7xl font-bold">{heading}</h2>
        <p className="text-green-600 lg:text-md">{subheading}</p>
    </div> );
}

export default TimerFrame;