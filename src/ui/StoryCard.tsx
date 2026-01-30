
interface StoryCardProps {
  date: string;   // date of the story event
  header: string; // header/title of the story event
  detail: string; // detailed description of the story event
}   

const StoryCard: React.FC<StoryCardProps> = ({date, header, detail}) => {
  return (
    <div className="w-full text-center">
        <p className="text-gray-500 austine-font mb-2 austine-font text-xl">{date}</p>
        <h2 className="text-gray-700 text-2xl font-semibold mb-2  playwrite-au-tas-wedding">{header}</h2>
        <p className="text-gray-700">
            {detail}    
        </p>
    </div>
  )
}

export default StoryCard