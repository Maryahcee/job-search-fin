import {
	Box,
	Card,
	CardBody,
	Flex,
	Img,
	List,
	ListItem,
	Spacer,
	Stack,
} from '@chakra-ui/react';

const Cards = () => {
	return (
		<>
			<Box margin={'0 auto '} width={'80%'} marginTop={5}>
				<Card>
					<CardBody>
						<Flex>
							<Img
								borderRadius={'50%'}
								backgroundColor={'palegreen'}
								width={12}
								height={12}
							/>
							<Stack marginLeft={5}>
								<List fontWeight={'bold'}>
									<ListItem fontSize={'2xl'} textColor={'#212121'}>
										Full Stack Developer
									</ListItem>
									<ListItem
										fontSize={'inherit'}
										textColor={'#617482'}
										marginTop={2}
									>
										Company's Name
									</ListItem>
								</List>
							</Stack>
							<Spacer />
							<List>
								<ListItem textColor={'#212121'}>Calsbad, CA (remote)</ListItem>
								<ListItem textColor={'purple'} fontWeight={'bold'}>
									FullTime
								</ListItem>
								<ListItem textColor={'#c1cbd1'}>Posted 2 days ago</ListItem>
							</List>
						</Flex>
					</CardBody>
				</Card>
			</Box>
			<Box margin={'0 auto '} width={'80%'} marginTop={5}>
				<Card>
					<CardBody>
						<Flex>
							<Img
								borderRadius={'50%'}
								backgroundColor={'palegreen'}
								width={12}
								height={12}
							/>
							<Stack marginLeft={5}>
								<List fontWeight={'bold'}>
									<ListItem fontSize={'2xl'}>IT Consultant</ListItem>
									<ListItem
										fontSize={'inherit'}
										textColor={'#617482'}
										marginTop={2}
									>
										Company's Name
									</ListItem>
								</List>
							</Stack>
							<Spacer />
							<List>
								<ListItem textColor={'#212121'}>New York, NA </ListItem>
								<ListItem textColor={'purple'} fontWeight={'bold'}>
									PartTime
								</ListItem>
								<ListItem textColor={'#c1cbd1'}>Posted 3 days ago</ListItem>
							</List>
						</Flex>
					</CardBody>
				</Card>
			</Box>
		</>
	);
};

export default Cards;
