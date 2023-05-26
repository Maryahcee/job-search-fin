import { Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react';
import AppDescription from './components/AppDescription';
function App() {
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
			<AppDescription />
		</>
	);
}

export default App;
