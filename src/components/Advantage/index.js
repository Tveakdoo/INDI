import React from 'react';
import {WrapperAdvantage, WeHave, Text} from "./style";
import {Flex, Container} from "../../common/commonStyle";
import './serega.css';


export const Advantage = () => {
    const list = [
        {
            "map.svg": "Удобное местоположение",
            "globe.svg": "Бесплатный интернет",
            "cup.svg": "Чай,кофе, конфеты"
        },
        {
            "clock.svg": "Первый час бесплатно",
            "spa.svg": "4 кабинета СПА",
            "sun.svg": "Солярий"
        }
    ];
    return (
        <WrapperAdvantage>
            <Container>
                {
                    //создаем функцию map, в которой хранится другая функция,в которой возвращаем jsx
                    // внутри него мы отрисовываем, что нам нужно
                    list.map((item, index) => (

                        <Flex key={index.toString()} justifyContent="center">
                            {/*{Object - это переменная для работы с объектами js }*/}
                            {Object.entries(item).map(([key, value]) => (
                                <WeHave key={key} borderTop={index === 1}>
                                    <img src={`/img/svg/${key}`} alt={value}/>
                                    <Text>{value}</Text>
                                </WeHave>
                            ))}
                        </Flex>
                    ))
                }
            </Container>
        </WrapperAdvantage>
    );
};
