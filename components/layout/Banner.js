import {
	ShoppingCartIcon,
	CashIcon,
	TruckIcon,
} from '@heroicons/react/outline';
import BannerItem from './BannerItems/BannerItem';

export default function Banner() {
	return (
		<div className="top-0 p-0 m-0">
			<div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill bg-[url('/images/banner.jpg')]">
				<div className="md:w-1/2">
					<p className="text-sm font-bold uppercase">Services</p>
					<p className="text-3xl font-bold">Multimedia products</p>
					<p className="mb-10 text-2xl leading-none">
						Atractive designs for your brand
					</p>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center mt-2 sm:flex-row">
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
