const Container = ({ children, className }) => {
  return (
    <div
      className={`container mx-auto my-12 px-2 sm:my-16 sm:px-2 md:my-20 md:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
