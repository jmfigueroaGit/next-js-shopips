import {
	ShoppingCartIcon,
	CashIcon,
	TruckIcon,
} from '@heroicons/react/outline';
import BannerBg from './BannerItems/BannerBg';
import BannerItem from './BannerItems/BannerItem';
import BannerText from './BannerItems/BannerText';

export default function Banner() {
	return (
		<div className="top-0 p-0 m-0">
			<BannerBg>
				<BannerText title="Multimedia Products" />
			</BannerBg>
			<div className="flex flex-col items-center mt-2 justify-evenly sm:flex-row">
				<BannerItem
					title="Free Shipping & Return"
					content="Free Shipping on selected products"
					Icon={ShoppingCartIcon}
				/>
				<BannerItem
					title="100% Money Refund"
					content="100% Money Refund on selected products"
					Icon={CashIcon}
				/>
				<BannerItem
					title="60-Day Return"
					content="60-Day Return on selected products"
					Icon={TruckIcon}
				/>
			</div>
		</div>
	);
}
