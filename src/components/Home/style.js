import styled from "styled-components";
import {colors} from "../../common/commonStyle";

export const Wrapper = styled.div`
  background: url("/img/logo.png") no-repeat fixed;
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
  display: block;
  border: 4px solid ${colors.white};
  border-radius: 10px;
  padding: 20px 50px ;
  margin-top: 90px;
  color: #fff;
`