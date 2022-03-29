import styled from 'styled-components'

const colors = [
    "#3a3a3a",
    "#1de9b6",
    "#1de9b6",
    "#1bd669",
    "#1bd669",
    "#f2711c",
    "#f2471c",
];

const Button = styled.button`
  background-color: ${(props) => colors[props.colors] };
  color: #ffffff;
  border-radius: 5px;
  border-width: 0;
  padding: 10px;
  margin: 5px 0px 0px 6px;
  width: 245px;
  transition: ease background-color 250ms;
`;

Button.defaultProps = {
  colors: 0
};

export const ButtonToggle = styled(Button)``;