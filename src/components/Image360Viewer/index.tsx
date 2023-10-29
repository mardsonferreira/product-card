import React, { useRef, useState } from 'react';
import './index.css';

interface Image360ViewerProps {
  imageUrls: string[];
}

const Image360Viewer: React.FC<Image360ViewerProps> = ({ imageUrls }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const width = imageRef.current.clientWidth;
      const offsetX = e.nativeEvent.offsetX;
      const degrees = (offsetX / width) * 360;
      const imageIndex = Math.floor((degrees / 360) * imageUrls.length);
      setCurrentImage(imageIndex);
    }
  };

  return (
    <div className="viewer-container" onMouseMove={handleMouseMove}>
      <img
        ref={imageRef}
        className="viewer-image"
        src={imageUrls[currentImage]}
        alt="360-degree version"
      />
    </div>
  );
};

export default Image360Viewer;
