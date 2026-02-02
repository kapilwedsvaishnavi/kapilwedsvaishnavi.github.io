import './css/storyphotocard.css';
 
interface StoryPhotoCardProps {
  image: string;  // photo to display
  floater: string; // decorative floater image
  floterSide?: string
}

const StoryPhotoCard: React.FC<StoryPhotoCardProps> = ({image, floater, floterSide = 'right-50'}) =>   {
  return (
    //a photo card component
    <div className="relative story-photo-card border-1 border-green-500">
      <div className='border border-green-500 absolute w-full h-full rotate-4'/>
      <img
        src={image}
        alt="Story"
        className="w-full object-cover"
      />
      <img
        src={floater}
        alt="Decoration"
        className={`absolute bottom-0 ${floterSide} w-32 h-32 object-contain diagonal-drift`}
      />
    </div>
  )
}

export default StoryPhotoCard