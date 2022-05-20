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
  margin-bottom: ${props => props.marginBottom };
  color: ${colors.white};
  font-weight: 400;
  font-size: 32px;
  max-width: 270px; 
  & span{font-weight: bold}
  
`


export const List = styled.ul`
  font-weight: 400;
  font-size: 30px;
  color: ${colors.white};
  margin-left: 65px;
  margin-top: 80px;
`;
export const ListItem = styled.li`
    &:not(:last-child){
      margin-bottom: 40px;
    }
`;
export const WrapperText = styled.div`
  background-color: rgba(0, 0, 0, 0.47);
  text-align: center;
  padding: 100px 43px;
  margin-left: 100px;
`
