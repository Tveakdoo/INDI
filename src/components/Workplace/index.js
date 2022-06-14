import React from 'react';
import {BackgroundBlock, FrontBlock, Title, Content, Text} from "./style";
import {Container, Flex, SectionTitle, Section} from "../../common";

export const Workplace = () => {
    return (
        <Section padding="25px 0">
            <Container>
                <SectionTitle bottom={36}>
                    Аренда рабочих мест
                </SectionTitle>
                <Flex wrap="true" padding="0 100px" justifyContent="space-between">
                    <Content>
                        <FrontBlock img="paric.png">
                            <Flex height="100%" column justifyContent="flex-end">
                                <Title>
                                    Рабочее место парикмахера
                                </Title>
                            </Flex>
                        </FrontBlock>
                        <BackgroundBlock>
                            <Text>Моечная для волос, лаборатория, сухожаровой шкаф, стерилизатор</Text>
                        </BackgroundBlock>
                    </Content>

                    <Content>
                        <FrontBlock img="manic.png">
                            <Flex height="100%" column justifyContent="flex-end">
                                <Title>
                                    Маникюрная зона
                                </Title>
                            </Flex>
                        </FrontBlock>
                        <BackgroundBlock>
                            <Text>Настольная лампа, LED-лампа, маникюрный пылесос, сухожаровой шкаф</Text>
                        </BackgroundBlock>
                    </Content>
                    <Content>
                        <FrontBlock img="spa.png">
                            <Flex height="100%" column justifyContent="flex-end">
                                <Title>
                                    Кабинет с кушеткой
                                </Title>
                            </Flex>
                        </FrontBlock>
                        <BackgroundBlock>
                            <Text>Регулируемая кушетка, регулируемый стул, плед для клиентов, лампа-лупа</Text>
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

