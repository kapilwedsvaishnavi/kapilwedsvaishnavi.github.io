import React from "react";
import './css/pulsingimage.css'

interface PulsingImageProps {
  src: string;
  alt?: string;
  size?: number;
}

const PulsingImage: React.FC<PulsingImageProps> = ({ src, alt = "image", size=100 }) => {
  return (
    <div className="pulse-container">
      <img style={{width: size, height: size}} src={src} alt={alt} className="pulse-image" />
    </div>
  );
};

export default PulsingImage;
