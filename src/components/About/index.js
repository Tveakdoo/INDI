import React from 'react';
import {Wrapper, Title, Text, TopText, UnderText, Words} from "./style";
import {Container} from "../../common/commonStyle";


export const About = () => {
    return (
        <Wrapper>
            <Container>
            <Title>
                о нас
            </Title>
                <Text>
                <TopText>
                    Бьюти-коворкинг - это новый тренд, который смещает привычный понятие о работе
                </TopText>
                <UnderText>
                    В INDI вы платите только за аренду рабочего места
                </UnderText>
                </Text>
                <Words>
                    <li>любые расходники</li>
                    <li>приятные цены</li>
                    <li>никаких начальников</li>
                    <li>выгодные акции</li>
                    <li>быстрый ответ на все вопросы</li>
                    <li>работаешь сам на себя</li>
                    <li>дружелюбный персонал</li>
                </Words>
            </Container>
        </Wrapper>
    );
};
