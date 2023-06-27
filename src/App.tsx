import NavBar from './components/NavBar';
import AppDescription from './components/AppDescription';
import SearchJobs from './components/SearchJobs';
import JobFilter from './components/JobFilter';

const App = () => {
	return (
		<>
			<NavBar />
			<AppDescription />
			<SearchJobs />
			<JobFilter />
		</>
	);
};

export default App;
