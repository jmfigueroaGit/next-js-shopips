import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';

import onError from '../../../middleware/errors';
import { getSingleProduct } from '../../../controllers/productController';

const handler = nc({ onError });
dbConnect();
handler.get(getSingleProduct);

export default handler;
