import { Box, Center, Container, Text } from '@chakra-ui/react';

const AppDescription = () => {
	return (
		<>
			<Box position={'relative'} zIndex={'1'}>
				<Container maxW={'-moz-max-content'} p={0}>
					<Box
						position="relative"
						h={80}
						bgImage="url('https://www.utep.edu/extendeduniversity/utepconnect/blog/june-2019/how-an-online-degree-can-prepare-you-for-remote-positions.jpg')"
						bgSize="cover"
						bgPosition="center"
						bgRepeat="no-repeat"
						left={0}
						right={0}
						width="100vw"
						maxWidth="100%"
					>
						<Box
							position="absolute"
							top={0}
							left={0}
							w="full"
							h="full"
							bg="white"
							opacity={0.5}
							bgBlendMode="multiply"
						/>
						<Center
							position="relative"
							zIndex={1}
							textAlign="center"
							display="flex"
							justifyContent="center"
							minH={80}
						>
							<Text as="b" fontSize="4xl">
								The leading English speaking Jobs
								<br />
								listing
							</Text>
						</Center>
					</Box>
				</Container>
			</Box>
		</>
	);
};
export default AppDescription;
