import styled from "styled-components";
import { styleVariables} from "../../common";

export const Logo = styled.div`
    max-width: 80px;
  opacity: 70%;

  @media screen and ${styleVariables.desktop} {
      max-width: 150px;
      opacity: 70%;
    }
  & img{
    display: block;
    width: 100%;
  }
`

export const Phone = styled.a`
  font-weight: 700;
  font-size: 12px;
  display: block;
  color: #fff;
  text-decoration: none;
  font-family: "TT Norms";
  opacity: 50%;
  padding-top: 10px;
  @media screen and ${styleVariables.desktop} {
    font-weight: 700;
    font-size:24px;
    display: block;
    color: #fff;
    text-decoration: none;
    font-family: "TT Norms";
    opacity: 50%;
    padding-top: 20px;
  }
`