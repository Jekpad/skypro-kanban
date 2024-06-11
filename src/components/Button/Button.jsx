import { StyledButton, StyledButtonInverted } from "./Button.styled";

const Button = ({ link, text, onClick, ...props }) => {
  return (
    <>
      {props.$inverted ? (
        <StyledButtonInverted onClick={onClick} {...props}>
          {" "}
          {link ? <a href={link}>{text}</a> : text}
        </StyledButtonInverted>
      ) : (
        <StyledButton onClick={onClick} {...props}>
          {" "}
          {link ? <a href={link}>{text}</a> : text}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
