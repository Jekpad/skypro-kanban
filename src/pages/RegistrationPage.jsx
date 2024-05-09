import {
  StyledWrapper,
  StyledContainer,
  StyledModal,
  StyledModalBlock,
  StyledModalTitle,
  StyledModalFormLogin,
  StyledModalFormGroup,
} from "../components/SignInUp/SignInUp.styled";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { AppRoutes } from "../AppRoutes ";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(AppRoutes.Login);
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledModal>
          <StyledModalBlock>
            <StyledModalTitle>
              <h2>Регистрация</h2>
            </StyledModalTitle>
            <StyledModalFormLogin id="formLogIn" action="#">
              <Input type="text" name="first-name" id="first-name" placeholder="Имя" />
              <Input type="text" name="login" id="loginReg" placeholder="Эл. почта" />
              <Input type="password" name="password" id="passwordFirst" placeholder="Пароль" />
              <Button $width={"100%"} text={"Зарегистрироваться"} onClick={goToLogin}></Button>
              <StyledModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to={AppRoutes.Login}>Войдите здесь</Link>
                </p>
              </StyledModalFormGroup>
            </StyledModalFormLogin>
          </StyledModalBlock>
        </StyledModal>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default RegistrationPage;
