import Banner from '../layout/Banner';
import FeaturedProducts from '../Products/FeaturedProducts';
import ProductDetails from '../Products/ProductDetails';

export default function Home() {
	return (
		<div>
			<Banner title="Smartphones" category="Smartphones" brand="iPhones" />
			<ProductDetails />
			<FeaturedProducts />
		</div>
	);
}
