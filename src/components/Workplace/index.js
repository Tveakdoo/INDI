import React from 'react';
import {BackgroundBlock, FrontBlock, Section, Title, Content, Text} from "./style";
import {Container, Flex, SectionTitle} from "../../common/commonStyle";

export const Workplace = () => {
    return (
        <Section>
            <Container>
                <SectionTitle bottom={36}>
                    Аренда рабочих мест
                </SectionTitle>
                <Flex padding="0 100px" justifyContent="space-between">
                    <Content>
                        <FrontBlock img="makeup.png">
                            <Flex height="100%" column justifyContent="flex-end">
                                <Title>
                                    Визажная зона
                                </Title>
                            </Flex>
                        </FrontBlock>
                        <BackgroundBlock>
                            <Text>Гримёрное зеркало, визажный стул, сухожаровой шкаф, стерилизатор</Text>
                        </BackgroundBlock>
                    </Content>
                    <Content>
                        <FrontBlock img="makeup.png">
                            <Flex height="100%" column justifyContent="flex-end">
                                <Title>
                                    Визажная зона
                                </Title>
                            </Flex>
                        </FrontBlock>
                        <BackgroundBlock>
                            <Text>Гримёрное зеркало, визажный стул, сухожаровой шкаф, стерилизатор</Text>
                        </BackgroundBlock>
                    </Content>
                </Flex>
            </Container>
        </Section>
    );
};

