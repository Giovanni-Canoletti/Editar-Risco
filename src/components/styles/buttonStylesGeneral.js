import styled from 'styled-components'

const theme = {
  blue: {
    default: "#2185d0",
    hover: "#c2c2c2",
    disabled: "#e0e1e2",
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: #5b5b5b;
  padding: 10px 25px;
  border-radius: 5px;
  border-width: 0;
  margin: 5px 5px 0px 0px;
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
  theme: "blue"
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