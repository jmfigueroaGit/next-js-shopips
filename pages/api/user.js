import nc from 'next-connect';
import dbConnect from '@/config/dbConnect';

import { loadUserProfile } from '@/controllers/authController';
import { protect } from '@/middleware/auth';

import onError from '@/middleware/errors';

const handler = nc({
	onError,
});

dbConnect();

handler.use(protect).get(loadUserProfile);

export default handler;
