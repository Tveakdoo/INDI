import styled from "styled-components";
import {colors} from "../../common/commonStyle";

export const Wrapper = styled.div`

`;
export const Border = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 20px 94px;
  border-left: 4px solid ${colors.white};
  border-bottom: 4px solid ${colors.white};
  border-right: 4px solid ${colors.white};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const Call = styled.a`
  display: block;
  border: 0;
  background: #FF0044;
  border-radius: 20px;
  padding:17px 55px;
  color: #fff;
  text-decoration: none;
  font-family: "TT Norms";
`
export const Left = styled.div`
  display: flex;  
  align-items: center;
  font-size: 18px;
  color: ${colors.white};
  font-family: "TT Norms";
  & span {
    margin-right: 10px;
  }
`;
export const Links = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
export const LinkItem = styled.li`
    margin-right: 15px;
`;

