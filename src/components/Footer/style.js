import styled from "styled-components";
import { styleVariables } from "../../common";

export const Logo = styled.div`
  max-width: 80px;
  opacity: 70%;
  padding-top: 7px;

  @media screen and ${styleVariables.desktop} {
      max-width: 150px;
      opacity: 70%;
      padding-top: 10px;
    }
  & img{
    display: block;
    width: 100%;
  }
`
export const Adress = styled.div`
  font-weight: 500;
  font-size: 12px;
  display: block;
  color: #fff;
  font-family: "TT Norms";
  opacity: 50%;
  padding-top: 10px;
  @media screen and ${styleVariables.desktop} {
    font-weight: 500;
    font-size:18px;
    display: block;
    color: #fff;
    font-family: "TT Norms";
    opacity: 50%;
  }
`
export const Phone = styled.a`
  font-weight: 500;
  font-size: 12px;
  display: block;
  color: #fff;
  text-decoration: none;
  font-family: "TT Norms";
  opacity: 50%;
  padding-top: 5px;
  @media screen and ${styleVariables.desktop} {
    font-weight: 500;
    font-size:24px;
    display: block;
    color: #fff;
    text-decoration: none;
    font-family: "TT Norms";
    opacity: 50%;
    padding-top: 13px;
  }
`;