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
import { AppRoutes } from "../AppRoutes ";

const NotFoundPage = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledModal>
          <StyledModalBlock>
            <StyledModalTitle>
              <h1>404 Не найдено</h1>
            </StyledModalTitle>
            <StyledModalFormGroup>
              <p>Запрошенная страница не найдена</p>
              <Link to={AppRoutes.Main}>Перейти на главную</Link>
            </StyledModalFormGroup>
          </StyledModalBlock>
        </StyledModal>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default NotFoundPage;
