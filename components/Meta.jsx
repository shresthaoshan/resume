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
			<link rel="canonical" href="https://resume.oshanshrestha.com.np" />

			<title>Resume - Oshan Shrestha</title>
			<link rel="icon" href="/favicon.ico" />

			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500&display=swap"
				rel="stylesheet"
			/>

			<meta
				property="og:url"
				content="https://resume.oshanshrestha.com.np"
			/>
			<meta property="og:title" content="Resume - Oshan Shrestha" />
			<meta
				property="og:description"
				content="A skilled youth in the tech industry extremely motivated to make a change in the society."
			/>
			<meta
				property="og:image"
				content="https://oshanshrestha.com.np/images/display_picture.jpg"
			/>
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@shrestha_oshan" />
			<meta property="twitter:title" content="Resume - Oshan Shrestha" />
			<meta
				property="twitter:description"
				content="A skilled youth in the tech industry extremely motivated to make a change in the society."
			/>
			<meta
				name="twitter:image"
				content="http://oshanshrestha.com.np/images/display_picture.jpg"
			/>
			<meta
				property="twitter:url"
				content="https://resume.oshanshrestha.com.np/"
			/>
		</Head>
	);
}
