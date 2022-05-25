import styled from "styled-components";
import {colors} from "../../common/commonStyle";

export const Wrapper = styled.div`
  background: url("/img/png/about.png") no-repeat fixed;
  background-size: cover;
  height: 980px;
  font-family: "TT Norms";
  padding-top: 25px;
`;
export const Text = styled.div`
  margin-bottom: ${props => props.marginBottom};
  color: ${colors.white};
  font-weight: 400;
  font-size: 32px;
  max-width: 270px;

  & span {
    font-weight: bold
  }

`


export const List = styled.ul`
  font-weight: 400;
  font-size: 30px;
  color: ${colors.white};
  margin-left: 65px;
  margin-top: 80px;
  list-style: none;
`;
export const ListItem = styled.li`
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
`;
export const WrapperText = styled.div`
  background-color: rgba(0, 0, 0, 0.47);
  text-align: center;
  padding: 100px 43px;
  margin-left: 100px;
`
