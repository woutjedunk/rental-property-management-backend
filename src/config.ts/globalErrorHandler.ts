import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from '../shared/errors/ApplicationError.ts';



export function GlobalErrorHandler(err: Error, req: Request, res: Response, next: NextFunction){

    if (err instanceof ApplicationError) {
        res.status(err.status).send(err.applicationErrorResponse); // Bad request
    }
  
    next();
  }