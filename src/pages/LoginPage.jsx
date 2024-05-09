import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";
import {
  StyledWrapper,
  StyledContainer,
  StyledModal,
  StyledModalBlock,
  StyledModalTitle,
  StyledModalFormLogin,
  StyledModalFormGroup,
} from "../components/SignInUp/SignInUp.styled";
import { AppRoutes } from "../AppRoutes ";

const LoginPage = ({ authUser }) => {
  const navigate = useNavigate();
  const auth = () => {
    authUser(true);
    navigate("/");
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledModal>
          <StyledModalBlock>
            <StyledModalTitle>
              <h2>Вход</h2>
            </StyledModalTitle>
            <StyledModalFormLogin id="formLogIn" action="#">
              <Input type="text" name="login" id="formlogin" placeholder="Эл. почта" />
              <Input type="password" name="password" id="formpassword" placeholder="Пароль" />
              <Button $width={"100%"} onClick={auth} text={"Войти"}></Button>
              <StyledModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={AppRoutes.Register}>Регистрируйтесь здесь</Link>
              </StyledModalFormGroup>
            </StyledModalFormLogin>
          </StyledModalBlock>
        </StyledModal>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default LoginPage;
