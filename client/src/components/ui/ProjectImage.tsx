import React from 'react';

interface ProjectImageProps {
  image: string | React.ReactNode;
  alt?: string;
  height?: number | string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ image, alt = "", height = "12rem" }) => {
  if (typeof image === 'string') {
    return (
      <img 
        src={image} 
        alt={alt} 
        className="w-full object-cover object-center"
        style={{ height }}
      />
    );
  }
  
  return (
    <div className="w-full overflow-hidden" style={{ height }}>
      {image}
    </div>
  );
};

export default ProjectImage;