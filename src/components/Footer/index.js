import React from "react";
import { Logo, Phone } from "./style";
import { Flex, Section } from "../../common";

export const Footer = () => {
	return (
		<Section as="footer" backgroundColor="#221F1F" padding="20px">
			<Flex justifyContent="space-between">
				<Logo>
					<img src="/img/svg/logotip.svg" alt="Лого" />
				</Logo>
				<Phone href="tel:+89045912343">
					8(900)535-35-35
				</Phone>
			</Flex>
		</Section>
	);
};
