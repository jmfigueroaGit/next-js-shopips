import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<div className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill bg-[url('/images/banner.jpg')]">
				<div className="md:w-1/2">
					<p className="text-sm font-bold uppercase">Services</p>
					<p className="text-3xl font-bold">Multimedia products</p>
					<p className="mb-10 text-2xl leading-none">
						Atractive designs for your brand
					</p>
					<a
						href="#"
						className="px-8 py-4 text-xs font-bold text-white uppercase bg-purple-800 rounded hover:bg-gray-200 hover:text-gray-800"
					>
						Contact us
					</a>
				</div>
			</div>
			<div>Hello World</div>
		</div>
	);
}
