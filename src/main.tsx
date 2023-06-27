import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App.tsx';

const fonts = {
	body: 'Playfair Display',
	heading: 'Libre Bakserville',
};

const variants = {
	_hover: {
		backgroundColor: 'none',
	},
};
const theme = extendTheme({ fonts, variants });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
