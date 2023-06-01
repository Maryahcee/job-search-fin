import { Text, Flex, Heading, Spacer, HStack } from '@chakra-ui/react';

export default function NavBar() {
	return (
		<>
			<Flex as="nav" p={5}>
				<Heading>EJobs</Heading>
				<Spacer />
				<HStack spacing={5}>
					<Text>Pricing</Text>
					<Text>About</Text>
					<Text>Contact</Text>
				</HStack>
			</Flex>
		</>
	);
}
