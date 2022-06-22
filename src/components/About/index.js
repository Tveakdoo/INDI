import React from 'react';
import {Wrapper, Text, List, ListItem, WrapperText} from "./style";
import {Container, SectionTitle} from "../../common/commonStyle";
import {Flex} from "../../common/commonStyle";

export const About = () => {
    const list = [
        "любые расходники",
        "приятные цены",
        "никаких начальников",
        "выгодные акции",
        "быстрый ответ на все вопросы",
        "работаешь сам на себя",
        "дружелюбный персонал",
    ]
    return (
        <Wrapper id="about">
            <Container>
                <SectionTitle white bottom={36}>
                    о нас
                </SectionTitle>
                <Flex justifyContent="center">
                    <WrapperText>
                        <Text marginBottom="153px">
                            Бьюти-коворкинг - это новый тренд, который смещает привычный понятие о работе.
                        </Text>
                        <Text>
                            В INDI вы платите только{" "}
                            <span>за аренду</span>{" "}
                            рабочего места
                        </Text>
                    </WrapperText>
                    <List>
                        {list.map(item => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </List>
                </Flex>

            </Container>

        </Wrapper>
    );
};
