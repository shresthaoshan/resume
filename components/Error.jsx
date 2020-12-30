import { useRouter } from "next/router";

import styles from "../styles/Error.module.css";

export default function Error() {
	const router = useRouter();
	return (
		<div className={styles.errorMessage}>
			<p>Could not load resume at the moment.</p>
			<p onClick={() => router.reload()} className={styles.refresh}>
				Refresh
			</p>
		</div>
	);
}
