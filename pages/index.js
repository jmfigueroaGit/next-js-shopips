import Layout from '../components/layout/Layout';
import Home from '../components/Home';

import { getProducts } from '../redux/actions/productAction';
import { wrapper } from '../redux/store';

export default function Index() {
	return (
		<Layout>
			<Home />
		</Layout>
	);
}

export const getServerSideProps = wrapper.getServerSideProps(
	async ({ req, query, store }) => {
		await store.dispatch(getProducts());
	}
);
