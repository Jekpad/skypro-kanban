const Button = ({ link, text, id, className }) => {
  return (
    <button id={id || ""} className={className || ""}>
      <a href={link || "#"}>{text}</a>
    </button>
  );
};

export default Button;
