import styled from "styled-components";
import {colors} from "../../common/commonStyle";

export const Wrapper = styled.div`
  background: url("/img/about.png") no-repeat fixed;
  background-size: cover;
  height: 980px;
  font-family: "TT Norms";
`
export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 72px;
  font-weight: 700;
  color: ${colors.white};
`
export const Text = styled.div`
  background-color: rgba(0, 0, 0, 0.47);
  color: ${colors.white};
  font-weight: 400;
  font-size: 32px;
  max-width: 380px;
  text-align: center;
  padding: 100px 43px;
`
export const UnderText = styled.div`
  margin-top: 100px;
`
export const TopText = styled.div`
`
export const Words = styled.ul`
  font-weight: 500;
  font-size: 30px;
  color: ${colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
`
