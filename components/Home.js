import Banner from './layout/Banner';
import LowerBanner from './layout/BannerItems/LowerBanner';
import FeaturedProducts from './Products/FeaturedProducts';
import LatestProducts from './Products/LatestProducts';

export default function Home() {
	return (
		<div>
			<Banner title="Multimedia Products" />
			<LatestProducts />
			<LowerBanner />
			<FeaturedProducts />
		</div>
	);
}
