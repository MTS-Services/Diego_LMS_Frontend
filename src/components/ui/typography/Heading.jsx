import React from 'react';

const Heading = ({ level = 1, children, className = '', ...props }) => {
  const Tag = `h${level}`;

  const sizes = {
    1: 'text-7xl',
    2: 'text-5xl',
    3: 'text-3xl',
    4: 'text-xl',
    5: 'text-lg',
    6: 'text-base',
  };

  const classes = `${sizes[level]} ${className}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
