import Layout from '@/components/layout/Layout';
import Home from '@/components/Home';

import { getProducts } from '@/actions/productAction';
import { wrapper } from '@/redux/store';
import { loadUser } from '@/actions/userAction';

export default function Index() {
	return (
		<Layout>
			<Home />
		</Layout>
	);
}

export const getServerSideProps = wrapper.getServerSideProps(
	async ({ req, query, store }) => {
		await store.dispatch(getProducts(req));
	}
);
