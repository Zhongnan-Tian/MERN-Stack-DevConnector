import CLIENT_SECRET_PROD from './keys_prod';
import CLIENT_SECRET_DEV from './keys_dev';

let CLIENT_SECRET;

if (process.env.NODE_ENV === 'production') {
  CLIENT_SECRET = CLIENT_SECRET_PROD;
} else {
  CLIENT_SECRET = CLIENT_SECRET_DEV;
}

export default CLIENT_SECRET;
