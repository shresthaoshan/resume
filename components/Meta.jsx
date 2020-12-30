import React from "react";
import Head from "next/head";

export default function Meta() {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			<meta httpEquiv="X-UA-Compatible" content="IE=7" />
			<meta name="description" content="Resume - Oshan Shrestha" />
			<meta name="keywords" content="resume, oshan shrestha" />

			<title>Resume - Oshan Shrestha</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
