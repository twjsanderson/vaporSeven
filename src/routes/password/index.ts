import express, { Request, Response, NextFunction } from 'express';
import { asyncCatchHandler } from '../../utils/httpResponses/handlers';

const router = express.Router();

router.get('/password', (req: Request, res: Response, next: NextFunction) => {
    // formulate res, req and next?
    // asyncCatch();
});

export { router };
