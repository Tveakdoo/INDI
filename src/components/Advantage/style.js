import styled from "styled-components";

export const WrapperAdvantage = styled.section`
  font-family: "TT Norms";
  font-size: 20px;
  font-weight: 400;
  padding: 30px;
`

export const WeHave = styled.div`
  border-top: ${props => props.borderTop && "rgba(0,0,0,0.28) solid 2px;" };
  &:not(:last-child) {border-right: rgba(0,0,0,0.28) solid 2px;}
  padding: 40px;
  width: 33.333%; 
  display: flex;
  max-height: 180px;
`


export const Pluses = styled.div`
  max-width: 180px;
  padding: 20px;
`