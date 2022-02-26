import styled from 'styled-components';
// import { Button } from "semantic-ui-react";
// import {Component} from 'react';

export const theme = {
  teal: {
    default: "#1de9b6",
    hover: "#a7ffeb",
    disabled: "#c7cccc",
  }
};

export const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: gray;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border-width: 0;
  margin: 15px 5px;
  cursor: pointer;
  transition: ease background-color 300ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    background-color: ${(props) => theme[props.theme].disabled};

  }
`;

Button.defaultProps = {
  theme: "teal"
};

export const ButtonToggle = styled(Button)`
  background-color: #e7e7e7
  ${({ ativo }) =>
    ativo && 
    `
    opacity: 1;
    color: #ffffff;




  `
  }
`;

