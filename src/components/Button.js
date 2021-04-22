const Button = ({ content }) => {
  return (
    <button className="bg-blue-200 text-black font-bold rounded lg:px-4 lg:py-4 px-2 py-2 lg:mt-4 mt-2 lg:text-sm text-xs">
      {content}
    </button>
  );
};

export default Button;
