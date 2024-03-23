import styled from "styled-components";

export	 const colors = {
  primary:'blue',
  seconday: 'darkgray',
  danger: 'red',
  warning: 'yellow',
  rasado: '#BF4F74',
  gris: '#333',
  light: '#DFF5FF'

}

export const theme = {
    fg: '#BF4F74',
    bg:'#DFF5FF',

}
export const invertTheme =({fg, bg}) => ({
   fg: bg,
   bg: fg 
});
 export const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 0;
  padding: 0%.25em 1em;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 1em;

`;

export const CenterInfo = styled.div `
justify-content: center;
text-align: center;

ul li{
    display: inline-block;
}
`;