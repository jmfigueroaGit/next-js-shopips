import nc from 'next-connect';
import dbConnect from '@/config/dbConnect';

import { authUser } from '@/controllers/authController';
import onError from '@/middleware/errors';

const handler = nc({
	onError,
});
dbConnect();
handler.post(authUser);

export default handler;
