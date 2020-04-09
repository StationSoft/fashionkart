import {
	Flex,
	Box,
  theme,
	ThemeProvider,
	CSSReset,
	ColorModeProvider,
} from '@chakra-ui/core';
import Navbar from '../components/Navbar';

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={newTheme}>
			<ColorModeProvider>
        <Flex direction='column'>
					<CSSReset />
					<Box pos="fixed" w="100%">
						<Navbar />
					</Box>
					
					<Flex justify='center' align='center' w='100%' pt='20'>
						<Component {...pageProps} />
					</Flex>
				</Flex>
			</ColorModeProvider>
		</ThemeProvider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
