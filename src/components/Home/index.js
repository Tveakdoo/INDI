import React from 'react';
import styled from "styled-components";

const Background = styled.div`  
  background: url("/img/logo.png")  no-repeat;
  background-size: cover;
  width: 1920px;
  height: 980px;
  
`
export const Home = () => {
    return (
        <div>
        <Background/>
        </div>
    );
};
