import { NextFunction, Request, Response } from 'express';
import AppError from '../Errors/AppError';

class HandleGlobalError {
  public static execute(
    error: AppError,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ) {
    const status = error.status as number;
    const message = error.message as string;

    if (error instanceof AppError) {
      return response
        .status(status)
        .json({
          message,
        });
    }
    return response.status(500).json({ message });
  }
}

export default HandleGlobalError;
