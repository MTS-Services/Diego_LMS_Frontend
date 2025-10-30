import React from 'react';

const Container = ({ children, size = 'default', className = '' }) => {
  const sizes = {
    sm: 'max-w-2xl',
    default: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const classes = `mx-auto px-4 sm:px-6 lg:px-32 pt-[20px] md:pt-[50px] lg:pt-[80px] ${sizes[size]} ${className}`;
  return <section className={classes}>{children}</section>;
};

export default Container;