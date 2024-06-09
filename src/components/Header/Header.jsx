import { useState } from "react";
import { Link } from "react-router-dom";

import { AppRoutesList } from "../../AppRoutesList.js";

import * as Styled from "./Header.styled.js";
import { StyledContainer } from "../Container/Container.styled.js";
import { StyledButton } from "../Button/Button.styled.js";

import { ThemeContext } from "../../providers/CustomThemeProvider";
import { useContext } from "react";

const Header = ({ user }) => {
  const [displayUserCard, setDisplayUserCard] = useState(false);

  const toggleUserCard = () => {
    setDisplayUserCard((previousState) => !previousState);
  };

  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Styled.StyledHeader>
      <StyledContainer>
        <Styled.StyledHeaderBlock>
          <Styled.StyledHeaderLogo>
            <Link to={AppRoutesList.Main}>
              <img src={theme === "light" ? "/logo.png" : "/logo_dark.png"} alt="logo" />
            </Link>
          </Styled.StyledHeaderLogo>
          <Styled.StyledNav>
            <Link to={`${AppRoutesList.Card}`}>
              <Styled.StyledAddTaskButton text="Создать новую задачу" id="btnMainNew" $width={"178px"} />
            </Link>
            <Styled.StyledHeaderUser onClick={toggleUserCard}>{user.name}</Styled.StyledHeaderUser>
            {displayUserCard ? (
              <Styled.StyledPopUpUser id="user-set-target">
                <Styled.StyledPopUpUserName>{user.name}</Styled.StyledPopUpUserName>
                <Styled.StyledPopUpUserMail>{user.login}</Styled.StyledPopUpUserMail>
                <Styled.StyledHeaderTheme>
                  <p>Темная тема</p>
                  <input onClick={changeTheme} checked={theme != "light"} type="checkbox" name="checkbox" readOnly />
                </Styled.StyledHeaderTheme>
                <Link to={"/exit"}>
                  <StyledButton $inverted $width={"72px"}>
                    Выйти
                  </StyledButton>
                </Link>
              </Styled.StyledPopUpUser>
            ) : (
              ""
            )}
          </Styled.StyledNav>
        </Styled.StyledHeaderBlock>
      </StyledContainer>
    </Styled.StyledHeader>
  );
};

export default Header;
