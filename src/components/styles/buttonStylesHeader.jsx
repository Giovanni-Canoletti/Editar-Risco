import styled from 'styled-components'

const color = {
  teal: {
    default: "#00b5ad",
    hover: "#9ececc",
    disabled: "#e0e1e2",
  }
};

const Button = styled.button`
  background-color: ${(props) => color[props.theme].default};
  color: gray;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border-width: 0;
  margin: 15px 0px 10px 13px;
  cursor: pointer;
  transition: ease background-color 300ms;
  &:hover {
    background-color: ${(props) => color[props.theme].hover};
  }
  &:disabled {
    background-color: ${(props) => color[props.theme].disabled};

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