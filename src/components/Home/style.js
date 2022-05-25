import styled from "styled-components";
import {colors} from "../../common/commonStyle";

export const Wrapper = styled.div`
  background: url("/img/png/logo.png") no-repeat fixed;
  background-size: cover;
  height: 980px;
`
export const Titles = styled.div`
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "TT Norms";
`

export const Text = styled.div`
  padding-top: 130px;
  font-weight: 700;
  font-size: 48px;
`
export const Title = styled.h1`
  margin: 0;
  font-weight: 800;
  font-size: 120px;
`
export const Logo = styled.div`
  padding-top: 120px;
`
export const Button = styled.a`
  position: relative;
  display: block;
  border: 4px solid ${colors.white};
  border-radius: 10px;
  padding: 20px 80px;
  margin-top: 90px;
  color: #fff;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
  
  & span{
    position: relative;
    z-index: 1;
  }
  
  &::before{
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(73.9deg, #BBE94E -24.88%, #EE7B47 8.62%, #E41E33 48.22%, #8F2173 129.71%);
    opacity: 0;
    border-radius: 5px;
    transition: opacity .2s;
  }
  
  &:hover::before{
    opacity: 1;
  }
`