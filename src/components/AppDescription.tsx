import { Box, Container, Text } from '@chakra-ui/react';

export default function AppDescription() {
	return (
		<>
			<Box>
				<Box
					h={'80'}
					sx={{
						content: `''`,
						bgSize: 'cover',
						opacity: 0.5,
						width: 'full',
						bgColor: 'black',
						bgBlendMode: '0.9',
						bgImage:
							'https://www.utep.edu/extendeduniversity/utepconnect/blog/june-2019/how-an-online-degree-can-prepare-you-for-remote-positions.jpg',
					}}
					backgroundPosition={'center'}
					backgroundRepeat={'no-repeat'}
					backgroundSize={'cover'}
					backgroundBlendMode={'darken'}
				></Box>
				<Container
					textAlign="center"
					maxW={'xl'}
					display={'flex'}
					centerContent
					h={'full'}
					justifyContent={'center'}
					mt={-60}
					opacity={1}
				>
					<Text as="b" fontSize="4xl">
						The leading English speaking Jobs <br></br> listing in Finland
					</Text>
				</Container>
			</Box>
		</>
	);
}
