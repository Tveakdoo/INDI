import styled from "styled-components";

export const colors = {
    white: "#fff",
    gray: "#F2F2F2",
    black: "#221F1F"
}


export const Container = styled.div`
    max-width: 1160px;
    margin: 0 auto;
    
`
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

`
export const Main = styled.main`
  flex: 1 1 auto;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`
export const SectionTitle = styled.div`
    color: ${props => props.white ? colors.white : colors.black};
    margin-bottom: ${props => props.bottom + "px"};
    font-weight: bold;
    font-size: 72px;
    line-height: 84.97px;
`;