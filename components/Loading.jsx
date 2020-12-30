import styles from "../styles/Loading.module.css";

export default function Loading() {
	return (
		<div className={styles.loader}>
			<img
				src="https://oshanshrestha.com.np/images/loader.svg"
				alt="loader"
			/>
		</div>
	);
}
