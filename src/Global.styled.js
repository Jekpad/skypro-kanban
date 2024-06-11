import { styled, createGlobalStyle } from "styled-components";

export const breakpoints = {
  sm: 375,
  md: 495,
  lg: 660,
  xl: 1200,
};

export const lightTheme = {
  color_background_primary: "#FFFFFF",
  color_background_secondary: "#EAEEF6",

  color_font_primary: "#000",
  color_font_secondary: "#94A6BE",

  color_shadow: "rgba(26, 56, 101, 0.21)",

  color_button_font: "#FFFFFF",
  color_button_background: "#565EEF",
  color_button_background_contrast: "#33399b;",
  color_button_border: "#565EEF",

  color_button_inverted_font: "#565EEF",
  color_button_inverted_background: "transparent",
  color_button_inverted_border: "#565EEF",
};

export const darkTheme = {
  color_background_primary: "#20202C",
  color_background_secondary: "#151419",

  color_font_primary: "#FFF",
  color_font_secondary: "#94A6BE",

  color_shadow: "rgba(148, 166, 190, 0.40)",

  color_button_font: "#FFFFFF",
  color_button_background: "#565EEF",
  color_button_background_contrast: "#33399b;",
  color_button_border: "#565EEF",

  color_button_inverted_font: "#FFF",
  color_button_inverted_background: "transparent",
  color_button_inverted_border: "#FFF",
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.25s linear;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
  background: ${(props) => props.theme.color_font_secondary};
}

body{
  background: ${(props) => props.theme.color_background_secondary};
}

/* width/height */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background: ${(props) => props.theme.color_background_secondary};
}

/* Track */
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.color_background_primary};
  border-radius: 8px; 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: red;
  border-radius: 8px;
  background: ${(props) => props.theme.color_button_background};
}

/* Hover */
::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme.color_button_background_contrast};
}
`;

export const StyledWrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;
