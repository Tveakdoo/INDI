import React from "react";
import { Logo, Phone, Adress} from "./style";
import {Container, Flex, Section} from "../../common";

export const Footer = () => {
	return (
		<Section as="footer" backgroundColor="#221F1F" padding="20px">
			<Flex justifyContent="space-between">
				<Logo>
					<img src="/img/svg/logotip.svg" alt="Лого" />
				</Logo>
				<Section>
					<Phone href="tel:+79805830038">
						8(980)583-00-38
					</Phone>
					<Adress>
						ул. Горького, 27, 2 этаж
					</Adress>
				</Section>
			</Flex>
		</Section>
	);
};
