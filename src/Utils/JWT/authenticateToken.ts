import 'dotenv/config';
import { verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as string;

const authenticateToken = (token: string) => {
  const verificationResponse = verify(token, secret);
  return verificationResponse;
};

export default authenticateToken;