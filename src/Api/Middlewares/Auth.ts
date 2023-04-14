import { NextFunction, Request, Response } from 'express';
import AppError from '../Errors/AppError';
import authenticateToken from '../../Utils/JWT/authenticateToken';
import ErrorTypes from '../Errors/ErrorTypes';

class Auth {
  public static async tokenValidation(
    req: Request,
    _res: Response,
    next: NextFunction,
  ) {
    const { authentication } = req.headers;

    if (!authentication) throw new AppError(401, ErrorTypes.TokenNotFound);

    try {
      authenticateToken(authentication as string);

      next();
    } catch (error) {
      throw new AppError(401, ErrorTypes.TokenNotValid);
    }
  }
}

export default Auth;
