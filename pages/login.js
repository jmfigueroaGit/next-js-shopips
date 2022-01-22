import Layout from '@/components/layout/Layout';
import LoginScreen from '@/components/Screens/LoginScreen';
import { getSession } from 'next-auth/client';

export default function Login() {
	return (
		<Layout>
			<LoginScreen />
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req });

	if (session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}
