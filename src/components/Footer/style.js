import styled from "styled-components";
import { styleVariables} from "../../common";

export const Logo = styled.div`
  & img {
    width: 120px;

    @media screen and ${styleVariables.desktop} {
      width: 150px;
    }
`

export const Phone = styled.a`
  font-weight: 700;
  font-size: 16px;
  display: block;
  color: #fff;
  text-decoration: none;
  font-family: "TT Norms";
  opacity: 70%;
  padding-top: 20px;
  @media screen and ${styleVariables.desktop} {
    font-weight: 700;
    font-size: 32px;
    display: block;
    color: #fff;
    text-decoration: none;
    font-family: "TT Norms";
    opacity: 70%;
    padding-top: 15px;
  }
`