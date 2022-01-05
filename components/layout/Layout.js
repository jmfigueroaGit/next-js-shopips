import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children, title }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			<ToastContainer position="bottom-right" />
			{children}

			<Footer />
		</div>
	);
}
