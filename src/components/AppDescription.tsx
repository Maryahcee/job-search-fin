import { Container, Text } from '@chakra-ui/react';

export default function AppDescription() {
	return (
		<>
			<Container textAlign="center" maxW={'xl'}>
				<Text as="b" fontSize="4xl">
					The leading English speaking Jobs <br></br> listing in Finland
				</Text>
			</Container>
		</>
	);
}
