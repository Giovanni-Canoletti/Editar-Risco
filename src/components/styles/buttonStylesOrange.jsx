import styled from 'styled-components';
// import { Button } from "semantic-ui-react";
// import {Component} from 'react';

export const theme = {
  orange: {
    default: "#f2711c",
    hover: "#fcb166",
    disabled: "#e0e1e2",
  }
};

export const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: #5b5b5b;
  padding: 10px 15px;
  border-radius: 5px;
  border-width: 0;
  margin: 5px 1px;
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
  theme: "orange"
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

