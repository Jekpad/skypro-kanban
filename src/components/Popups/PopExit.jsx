import { Link } from "react-router-dom";
import Button from "../Button/Button";
import * as Styled from "./PopUp.styled";
import * as StyledEx from "./PopUpExit.styled";
import { AppRoutesList } from "../../AppRoutesList";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user";

const PopExit = () => {
  const { updateUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    updateUser(null);
    navigate(AppRoutesList.Login);
  };

  return (
    <Styled.StyledPopUp>
      <Styled.StyledPopUp>
        <Styled.StyledPopUpContainer>
          <StyledEx.ExitStyledPopUpBlock>
            <StyledEx.ExitTitle>Выйти из аккаунта?</StyledEx.ExitTitle>
            <form id="formExit">
              <Styled.StyledPopUpExitFormGroup>
                <Button $width={"119px"} text={"Да, выйти"} onClick={handleLogout}></Button>
                <Link to={"/"}>
                  <Button $inverted $width={"119px"} text={"Нет, остаться"}></Button>
                </Link>
              </Styled.StyledPopUpExitFormGroup>
            </form>
          </StyledEx.ExitStyledPopUpBlock>
        </Styled.StyledPopUpContainer>
      </Styled.StyledPopUp>
    </Styled.StyledPopUp>
  );
};

export default PopExit;
