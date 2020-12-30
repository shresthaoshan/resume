import Meta from "../components/Meta";
import "../styles/globals.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Meta />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
