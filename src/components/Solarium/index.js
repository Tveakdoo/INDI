import React from 'react';
import {Container, SectionTitle, Section, Flex} from "../../common/commonStyle";
import {Text, Block, Indi} from "./style";
import {YMaps, Map } from "react-yandex-maps";



export const Solarium = () => {
    return (
        <Section padding="25px 0" backgroundColor="#F2F2F2">
            <Container>
                <SectionTitle bottom={35}>
                    солярий
                </SectionTitle>
                <Flex justifyContent="center">
                    <Block>
                        <img src="/img/png/solarium.png" alt="Солярий"/>
                    </Block>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, sint.
                    </Text>
                </Flex>
                <Indi>
                <YMaps no-repeat>
                </YMaps>
                </Indi>
            </Container>

        </Section>
    );
};
