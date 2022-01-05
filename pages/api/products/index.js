import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';

import { getProducts } from '../../../controllers/productController';
import onError from '../../../middleware/errors';

const handler = nc({
	onError,
});
dbConnect();
handler.get(getProducts);

export default handler;
