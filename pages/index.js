import styles from "../styles/Home.module.css";

import { Document, Page } from "react-pdf";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import Loading from "../components/Loading";

const thresholdWidth = 900;

export default function Home() {
	const [pageWidth, setPageWidth] = useState(thresholdWidth);
	useEffect(() => {
		if (window && window.innerWidth <= thresholdWidth) {
			setPageWidth(window.innerWidth);
		}
	}, []);
	return (
		<div className={styles.container}>
			<Document
				file="/Resume.pdf"
				loading={<Loading />}
				error={<Error />}
			>
				<Page
					loading="Preparing stuffs..."
					width={pageWidth}
					pageNumber={1}
				/>
			</Document>
		</div>
	);
}
