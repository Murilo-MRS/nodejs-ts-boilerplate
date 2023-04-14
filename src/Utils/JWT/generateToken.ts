import 'dotenv/config';
import { sign } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

function generateToken(payload: string) {
  return sign({ payload }, secret, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
}
export default generateToken;