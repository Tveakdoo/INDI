import React from "react";
import {Container, SectionTitle, Section, Flex, useMediaQuery} from "../../common";
import { Text, Block, MapWrapper } from "./style";
import { YMaps, Map, Placemark } from "react-yandex-maps";


export const Solarium = () => {
	const isDesktop = useMediaQuery("(min-width: 768px)");
	const getMapHeight = () => isDesktop ? "426px" : "200px";
	return (
		<Section padding="25px 0 0" backgroundColor="#F2F2F2">
			<Container>
				<SectionTitle bottom={35}>
					солярий
				</SectionTitle>
				<Flex justifyContent="center">
					<Block>
						<img src="/img/png/solarium.png" alt="Солярий" />
					</Block>
					<Text>
						Современный солярий с первоклассными коллагеновыми лампами. С помощью него вы можете получить ровный и красивый загар,а вдобавок, сгладить морщины и сделать кожу более эластичной.
					</Text>
				</Flex>
			</Container>
			<MapWrapper>
				<YMaps>
					<Map width="100%" height={getMapHeight()} defaultState={{ center: [56.137315, 40.400652], zoom: 17 }}>
						<Placemark defaultGeometry={[56.137315, 40.400652]} />
					</Map>
				</YMaps>
			</MapWrapper>
		</Section>
	);
};
