import styled from "styled-components";
import { styleVariables } from "../../common";

export const Unlock = styled.div`
  display: block;
  @media screen and ${styleVariables.desktop} {
    display: none;
  }
`;

export const WrapperAdvantage = styled.section`
  font-family: "TT Norms",sans-serif;
  font-size: 20px;
  font-weight: 400;
  padding: 30px;
`;

export const WeHave = styled.div`
  display: flex;
  @media screen and ${styleVariables.desktop} {
    & img {
    }
  }


  @media screen and ${styleVariables.mobile} and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    background: #E5E5E5;
    padding: 5px 10px 10px;
    height: 200px;
  }
  @media screen and ${styleVariables.desktop} {
    border-top: ${props => props.borderTop && "rgba(0,0,0,0.28) solid 2px;"};
    padding: 40px;
    width: 33.333%;
    max-height: 180px;
    &:not(:last-child) {
      border-right: rgba(0, 0, 0, 0.28) solid 2px;
    }
  }

`;
export const Text = styled.div`
  @media screen and ${styleVariables.desktop} {
    max-width: 180px;
    padding: 20px;
  }
`;
export const SliderWrapper = styled.div`


`;