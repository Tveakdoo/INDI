import React from 'react';
import {Wrapper, Titles, Text, Title} from "./style";
import {Header} from "../Header";


export const Home = () => {
    return (
        <Wrapper>
            <Header/>
            <Titles>
                <Text>
                    Коворкинг
                </Text>
                <Title>
                    INDI Владимир
                </Title>
            </Titles>
        </Wrapper>
    );
};
