import styles from "../styles/Home.module.css";

import { Document, Page } from "react-pdf";

export default function Home() {
	return (
		<div className={styles.container}>
			<Document file="https://checkter-tracker-yolo.s3.amazonaws.com/Resume.pdf">
				<Page pageNumber={1} />
			</Document>
		</div>
	);
}
