import { Box, Divider, Flex, HStack, Spacer, Text } from '@chakra-ui/react';

const Footer = () => {
	return (
		<>
			<Box>
				<Divider marginTop={5} />
				<Box margin={'0 auto'} width={'80%'} marginTop={5}>
					<Flex margin={'0 auto'}>
						<HStack>
							<Text>lOGO</Text>
							<Text textColor={'#c1cbd1'} fontSize={'small'}>
								© 2023 Jobs, Inc.
							</Text>
						</HStack>

						<Box marginLeft={5} width={'80%'} textColor={'purple'}>
							<HStack>
								<Text>Terms</Text>
								<Spacer />
								<Text>Privacy</Text>
								<Spacer />
								<Text>Contact</Text>
								<Spacer />
								<Text>About</Text>
								<Spacer />
								<Text>Status</Text>
								<Spacer />
								<Text>Blog</Text>
								<Spacer />
								<Text>Docs</Text>
								<Spacer />
								<Text>Status</Text>
							</HStack>
						</Box>
					</Flex>
				</Box>
			</Box>
		</>
	);
};

export default Footer;
