import NavBar from './components/NavBar';
import AppDescription from './components/AppDescription';
import SearchJobs from './components/SearchJobs';
import JobFilter from './components/JobFilter';
import Cards from './components/Cards';

const App = () => {
	return (
		<>
			<NavBar />
			<AppDescription />
			<SearchJobs />
			<JobFilter />
			<Cards />
		</>
	);
};

export default App;
