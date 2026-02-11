import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next:NextFunction) {
        console.log("Serverga so'rov keldi : ", req.method);
        next()
    }
}