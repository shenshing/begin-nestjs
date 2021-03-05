import { NestMiddleware, Param, Injectable } from '@nestjs/common';
// import { Request } from 'express-serve-static-core';
// import { Request } from 'express-serve-static-core';
import { Response, Request } from 'express';
import keys from '../../config/key';

//working with jwt
const jwt = require('jsonwebtoken');

@Injectable()
export class AuditMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        const token = req.header('auth-token');
        const auth_id = req.header('user-id');
        let result = jwt.verify(token, keys.token_secret);
        if (result.id === auth_id) {
            next();
        } else {
            res.send('can not delete this user');
        }
    }
};


