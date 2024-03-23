import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./theme";

export const Button = styled.button`
  background: ${ colors.light };
  border-radius: 3px;
  border: 2px solid ${ colors.rosado };
  color: ${ colors.rosado };
  font-size: 0.9em;
  margin: 0;
  padding: 0.25em 1em;
  margin-bottom: 1em;
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  background-color: ${ colors.gris };
  color:  ${ colors.light };
  flex-direction: row;
  align-content: center;
  padding: 5px;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color:  ${ colors.light };
  text-decoration: none;
`;

export const BtnLink = styled.button`
  background-color:  ${ colors.light };
  padding: 0.9em;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
  margin-right: 0.7em;
`;

export const DetailsCont = styled.div`
  background-color:  ${ colors.light };
  padding: 0.5em;
  border-radius: 10px;
  margin-top: 1em;
  width: 70%;
  margin: 0 auto;
  h3,h4{
    color: ${ colors.gris };
  }
`;

export const CenteredCont = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 100vh;
`;

export const CenterInfo = styled.div`
  justify-content: center;
  text-align: center;

  ul li{
    display: inline-block;
  }
`;