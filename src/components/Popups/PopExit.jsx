import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { StyledPopUp } from "./PopUp.styled";
import { StyledButton } from "../Button/Button.styled";

const PopExit = ({ logout }) => {
  return (
    <StyledPopUp>
      <StyledPopUp className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form className="pop-exit__form" id="formExit" action="#">
              <div>
                <Button $width={"100%"} text={"Да, выйти"} onClick={logout}>
                  Да, выйти
                </Button>
                <Button $inverted $width={"100%"} text={"Нет, остаться"}>
                  <Link to={"/"}></Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </StyledPopUp>
    </StyledPopUp>
  );
};

export default PopExit;
