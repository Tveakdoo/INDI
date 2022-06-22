import styled from "styled-components";
import {styleVariables} from "../../common/commonStyle";

export const Wrapper = styled.div`
  background: url("/img/png/about1.png") no-repeat;
  background-size: cover;
  height: 360px;
  font-family: "TT Norms";
  padding-top: 25px;
  @media screen and ${styleVariables.tablet} {
    background: url("/img/png/about.png") no-repeat fixed;
    background-size: cover;
    height: 500px;
    font-family: "TT Norms";
    padding-top: 25px;
  }
  @media screen and ${styleVariables.desktop} {
    background: url("/img/png/about.png") no-repeat fixed;
    background-size: cover;
    height: 980px;
    font-family: "TT Norms";
    padding-top: 25px;
  }
`;
export const Text = styled.div`
  margin-bottom: 12px;
  color: ${styleVariables.white};
  font-weight: 400;
  font-size: 17px;
  max-width: 232px;
  
  @media screen and ${styleVariables.mobile1}{
    margin-bottom: 12px;
    color: ${styleVariables.white};
    font-weight: 400;
    font-size: 20px;
    max-width: 232px;
  }
  @media screen and ${styleVariables.desktop} {
    margin-bottom: ${props => props.marginBottom};
    color: ${styleVariables.white};
    font-weight: 400;
    font-size: 32px;
    max-width: 270px;
  }
  

  & span {
    font-weight: bold
  }

`


export const List = styled.ul`
  display: none;
  @media screen and ${styleVariables.desktop} {
    font-weight: 400;
    font-size: 30px;
    color: ${styleVariables.white};
    margin-left: 65px;
    margin-top: 80px;
    list-style: none;
    display: block;
  }
`;

export const ListItem = styled.li`
  
  @media screen and ${styleVariables.desktop} {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
    display: flex;
    align-items: center;
    &:before{
      content: "";
      display: block;
      width: 10px;
      border: 0.5px solid white;
      height: 10px;
      margin: 10px 10px 0 0;
      border-radius: 50%;
      background: linear-gradient(73.9deg, #BBE94E -24.88%, #EE7B47 8.62%, #E41E33 48.22%, #8F2173 129.71%);
    }
  }
`;
export const WrapperText = styled.div`
  background-color: rgba(0, 0, 0, 0.47);
  text-align: center;
  padding: 13px 16px;
  position: relative;
  max-width: 200px;
  align-items: center;
  border: solid 4px;
  border-image: linear-gradient(73.9deg, #BBE94E -24.88%, #EE7B47 8.62%, #E41E33 48.22%, #8F2173 129.71%) 1;
  
  @media screen and ${styleVariables.mobile1}{
    background-color: rgba(0, 0, 0, 0.47);
    text-align: center;
    padding: 25px 10px;
    position: relative;
    max-width: 300px;
    align-items: center;
    border: solid 4px;
    border-image: linear-gradient(73.9deg, #BBE94E -24.88%, #EE7B47 8.62%, #E41E33 48.22%, #8F2173 129.71%) 1;
  }
  @media screen and ${styleVariables.tablet}{
    background-color: rgba(0, 0, 0, 0.47);
    text-align: center;
    padding: 50px 20px;
    position: relative;
    max-width: 300px;
    align-items: center;
    border: solid 4px;
    border-image: linear-gradient(73.9deg, #BBE94E -24.88%, #EE7B47 8.62%, #E41E33 48.22%, #8F2173 129.71%) 1;
  }
  @media screen and ${styleVariables.desktop}{
    background-color: rgba(0, 0, 0, 0.47);
    text-align: center;
    padding: 100px 43px;
    margin-left: 100px;
    max-width: 400px;
    border: solid 5px;
    border-image: linear-gradient(73.9deg, #BBE94E -24.88%, #EE7B47 8.62%, #E41E33 48.22%, #8F2173 129.71%) 1;
  }
  
`
