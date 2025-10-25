import React from 'react';

const Image = ({
  src,
  alt = '',
  className = '',
  rounded = 'lg',
  objectFit = 'cover',
  hoverZoom = true,
}) => {
  const classes = `
    w-full h-full 
    object-${objectFit} 
    ${hoverZoom ? 'transition-transform duration-300 hover:scale-105' : ''}
    ${rounded ? `rounded-${rounded}` : ''} 
    ${className}
  `;

  return <img src={src} alt={alt} className={classes} />;
};

export default Image;
