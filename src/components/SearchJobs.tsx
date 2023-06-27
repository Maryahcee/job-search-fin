import {
	Box,
	Input,
	Grid,
	GridItem,
	Select,
	Button,
	Stack,
	Badge,
	Checkbox,
	color,
	Divider,
} from '@chakra-ui/react';

const SearchJobs = () => {
	return (
		<>
			<Box
				position="relative"
				zIndex={2}
				width="80%"
				margin="0 auto"
				marginTop="-30px"
				bgColor={'white'}
				borderRadius={8}
			>
				<Box p={5} borderRadius={'none'} paddingTop={10}>
					<Grid templateColumns={'repeat(4, 1fr)'} gap={4}>
						<GridItem w="100%" h="12">
							<Input placeholder="Keywords" borderRadius={0}></Input>
						</GridItem>
						<GridItem w="100%" h="12" borderRadius={0}>
							<Input placeholder="Location"></Input>
						</GridItem>
						<GridItem w="100%" h="12" borderRadius={0}>
							<Select placeholder="Choose a category">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</Select>
						</GridItem>
						<GridItem w="100%" h="12" borderRadius={0}>
							<Button colorScheme="blue" width={'100%'}>
								Search Jobs
							</Button>
						</GridItem>
					</Grid>
					<Stack direction={'row'} paddingTop={3}>
						<Button px={8} borderRadius={12}>
							<Checkbox bgColor={'white'} marginRight={2}></Checkbox>
							<span>Freelance</span>
						</Button>
						<Button px={8} borderRadius={10}>
							<Checkbox bgColor={'white'} marginRight={2}></Checkbox>
							<span>Full-time</span>
						</Button>
						<Button px={8} borderRadius={10}>
							<Checkbox bgColor={'white'} marginRight={2}></Checkbox>
							<span>Internship</span>
						</Button>

						<Button px={8} borderRadius={10}>
							<Checkbox bgColor={'white'} marginRight={2}></Checkbox>
							<span>Part-time</span>
						</Button>
					</Stack>
				</Box>
				<Divider></Divider>
			</Box>
		</>
	);
};

export default SearchJobs;
