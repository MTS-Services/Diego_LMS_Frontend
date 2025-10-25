import React from 'react';

const Heading = ({ level = 1, children, className = '', ...props }) => {
  const Tag = `h${level}`;

  const sizes = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-bold',
    3: 'text-2xl font-semibold',
    4: 'text-xl font-semibold',
    5: 'text-lg font-medium',
    6: 'text-base font-medium',
  };

  const classes = `${sizes[level]} ${className}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
