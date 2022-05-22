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
  padding: ${props => props.padding};
  flex-wrap: ${props => props.wrap ? "wrap" : "nowrap"};
  width: ${props => props.width};
  height: ${props => props.height};
`;
export const SectionTitle = styled.div`
  margin-bottom: ${props => props.bottom + "px"};
  font-size: 72px;
  font-weight: bold;
  line-height: 84.97px;
  color: ${props => props.white ? colors.white : colors.black};
  text-transform: uppercase;
`;