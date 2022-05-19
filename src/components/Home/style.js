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
  padding-top: 160px;
  font-weight: 700;
  font-size: 48px;
`
export const Title = styled.div`
  font-weight: 800;
  font-size: 120px;
`