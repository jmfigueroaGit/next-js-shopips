export default function BannerBg({ children = '' }) {
	return (
		<div className="object-fill h-auto px-10 py-24 bg-center bg-cover bg-hero-pattern">
			{children}
		</div>
	);
}
