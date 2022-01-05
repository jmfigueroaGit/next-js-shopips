import Layout from '../../components/layout/Layout';
import ProductScreen from '../../components/Screens/ProductScreen';

import { getProduct } from '../../redux/actions/productAction';
import { wrapper } from '../../redux/store';
export default function BookingDetailsPage() {
	return (
		<Layout>
			<ProductScreen />
		</Layout>
	);
}

export const getServerSideProps = wrapper.getServerSideProps(
	async ({ req, params, store }) => {
		await store.dispatch(getProduct(params.id));
	}
);
