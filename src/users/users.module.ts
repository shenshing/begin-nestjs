import { Module, MiddlewareConsumer, RequestMethod, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditMiddleware } from '../middleware/audit.middleware';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
})

// export class UsersModule {}
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // throw new Error('Method not implemented.');
        consumer
            .apply(AuditMiddleware)
            .forRoutes({ path: 'users/*', method: RequestMethod.DELETE });
    }

}
